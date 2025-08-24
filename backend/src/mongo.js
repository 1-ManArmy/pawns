import mongoose from 'mongoose';
import dns from 'dns';

let connecting = false;
let retryAttempt = 0;

export function mongoState() {
    return {
        state: mongoose.connection.readyState, // 0=disconnected 1=connected 2=connecting 3=disconnecting
        host: mongoose.connection.host || undefined,
        name: mongoose.connection.name || undefined
    };
}

function classifyError(err) {
    if (!err) return 'unknown';
    if (err.message?.includes('Authentication failed')) return 'auth';
    if (err.message?.includes('getaddrinfo ENOTFOUND')) return 'dns';
    if (err.message?.includes('IP that isn\'t whitelisted')) return 'ip-allowlist';
    if (err.message?.toLowerCase().includes('timeout')) return 'timeout';
    if (err.message?.includes('SSL') || err.message?.includes('TLS')) return 'tls';
    return 'other';
}

export async function connectMongo() {
    if (!process.env.MONGODB_URI) {
        console.warn('[mongo] MONGODB_URI not set; skipping connection');
        return;
    }
    if (mongoose.connection.readyState === 1 || connecting) return;

    const uri = process.env.MONGODB_URI;
    const startTs = Date.now();
    try {
        connecting = true;
        retryAttempt++;
        console.log(`[mongo] connecting attempt ${retryAttempt} ...`);
        await mongoose.connect(uri, {
            autoIndex: false,
            serverSelectionTimeoutMS: 8000,
            tls: true,
            maxPoolSize: 10,
            heartbeatFrequencyMS: 10000,
            serverApi: { version: '1', strict: true, deprecationErrors: true }
        });
        retryAttempt = 0;
        console.log('[mongo] connected in', Date.now() - startTs, 'ms');
    } catch (err) {
        const kind = classifyError(err);
        console.error(`[mongo] connect failed (${kind}):`, err.message);
        if (kind === 'dns') {
            // Attempt DNS resolution debug
            try {
                const host = uri.split('@').pop().split('/')[0].split('?')[0];
                dns.resolveAny(host, (e, records) => {
                    if (e) console.error('[mongo][dns] resolution error:', e.message);
                    else console.log('[mongo][dns] records:', records);
                });
            } catch { }
        }
    } finally {
        connecting = false;
    }
}

function scheduleReconnect() {
    if (mongoose.connection.readyState === 1 || connecting) return; // already connected or connecting
    const base = 5000;
    const delay = Math.min(base * Math.pow(2, Math.max(0, retryAttempt - 1)), 60000); // cap 60s
    console.warn(`[mongo] scheduling reconnect in ${Math.round(delay / 1000)}s (attempt ${retryAttempt + 1})`);
    setTimeout(() => connectMongo(), delay);
}

mongoose.connection.on('disconnected', () => {
    console.warn('[mongo] disconnected');
    scheduleReconnect();
});

mongoose.connection.on('error', err => {
    console.error('[mongo] error event:', err.message);
});