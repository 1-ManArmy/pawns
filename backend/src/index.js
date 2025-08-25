import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import http from 'http';
import mongoose from 'mongoose';
import { connectMongo, mongoState } from './mongo.js';
import agentsRouter from './routes/agents.js';

dotenv.config();

const app = express();
const started = Date.now();

// Middleware
app.use(express.json({ limit: '1mb' }));
app.use(cors({
  origin: (process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:5173']),
  credentials: true
}));
app.use(helmet());
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Health endpoints
app.get(['/health', '/api/health'], (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    started,
    mongo: mongoState()
  });
});

// Root info
app.get('/', (_req, res) => {
  res.json({ service: 'onelastai-backend', message: 'API online', mongo: mongoState() });
});

// API routes
app.use('/api/agents', agentsRouter);

// 404 for API
app.use('/api', (_req, res) => res.status(404).json({ error: 'Not Found' }));

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: err.message || 'Server error',
    ...(process.env.NODE_ENV !== 'production' ? { stack: err.stack } : {})
  });
});

const port = process.env.PORT || 3000;
const server = http.createServer(app);

async function start() {
  await connectMongo();
  server.listen(port, () => {
    console.log(`[backend] listening on :${port}`);
  });
}
start();

async function graceful(signal) {
  console.log(`[backend] ${signal} received, shutting down`);
  try { if (mongoose.connection.readyState === 1) await mongoose.disconnect(); } catch {}
  server.close(() => {
    console.log('[backend] closed');
    process.exit(0);
  });
  setTimeout(() => process.exit(1), 10000).unref();
}
['SIGINT', 'SIGTERM'].forEach(sig => process.on(sig, () => graceful(sig)));

console.log('[backend] ENV summary:', {
  mongo: (process.env.MONGODB_URI || '').startsWith('mongodb+srv://') ? 'atlas' : 'local',
  redisHost: process.env.REDIS_HOST,
  redisAuth: !!process.env.REDIS_PASSWORD
});
