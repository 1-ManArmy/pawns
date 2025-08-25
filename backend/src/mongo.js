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

function buildOptions() {
    const opt = {
        autoIndex: false,
        serverSelectionTimeoutMS: parseInt(process.env.MONGODB_SERVER_SELECTION_TIMEOUT_MS || '8000', 10),
        tls: true,
        maxPoolSize: process.env.MONGODB_MAX_POOL ? parseInt(process.env.MONGODB_MAX_POOL, 10) : 10,
        minPoolSize: process.env.MONGODB_MIN_POOL ? parseInt(process.env.MONGODB_MIN_POOL, 10) : 0,
        socketTimeoutMS: process.env.MONGODB_SOCKET_TIMEOUT_MS ? parseInt(process.env.MONGODB_SOCKET_TIMEOUT_MS, 10) : undefined,
        connectTimeoutMS: process.env.MONGODB_CONNECT_TIMEOUT_MS ? parseInt(process.env.MONGODB_CONNECT_TIMEOUT_MS, 10) : undefined,
        heartbeatFrequencyMS: 10000,
        serverApi: { version: '1', strict: true, deprecationErrors: true }
    };
    if (process.env.MONGODB_COMPRESSORS) {
        opt.compressors = process.env.MONGODB_COMPRESSORS.split(',').map(s => s.trim()).filter(Boolean);
    }
    return opt;
}

function ensureDbInUri(uri) {
    if (!process.env.MONGODB_DB_NAME) return uri; // user didn't request override
    // If URI already specifies a db (pattern host/<db> before ?), skip
    const afterHost = uri.split('@').pop(); // host[/db][?]
    if (!afterHost) return uri;
    const pathPart = afterHost.split('?')[0];
    // pathPart examples:
    //  pawns.pwzfji.mongodb.net/            -> trailing slash only (no db) => should append
    //  pawns.pwzfji.mongodb.net/onelastai   -> has db
    //  pawns.pwzfji.mongodb.net/onelastai/  -> has db (rare form)
    const firstSlash = pathPart.indexOf('/');
    if (firstSlash === -1) {
        // no slash at all, need to add one and db
        return uri.endsWith('/') ? uri + process.env.MONGODB_DB_NAME : uri + '/' + process.env.MONGODB_DB_NAME;
    }
    const afterFirstSlash = pathPart.slice(firstSlash + 1);
    if (afterFirstSlash.length === 0) {
        // only trailing slash, append db
        return uri + process.env.MONGODB_DB_NAME;
    }
    if (afterFirstSlash && !afterFirstSlash.startsWith('/')) {
        // already has a db segment
        return uri;
    }
    const db = process.env.MONGODB_DB_NAME;
    if (!db) return uri;
    // Insert db name before query string
    const parts = uri.split('?');
    parts[0] = parts[0] + db; // append db at end (already ends with /)
    return parts.join('?');
}

export async function connectMongo() {
    if (!process.env.MONGODB_URI) {
        console.warn('[mongo] MONGODB_URI not set; skipping connection');
        return;
    }
    if (mongoose.connection.readyState === 1 || connecting) return;

    let uri = process.env.MONGODB_URI;
    // If URI ends with '/' and no db name segment & env overrides specify MONGODB_DB_NAME, append it.
    if (/\/$/.test(uri)) {
        uri = ensureDbInUri(uri);
    }
    const startTs = Date.now();
    try {
        connecting = true;
        retryAttempt++;
        console.log(`[mongo] connecting attempt ${retryAttempt} ...`);
        await mongoose.connect(uri, buildOptions());
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