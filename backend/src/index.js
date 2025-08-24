import express from 'express';
import dotenv from 'dotenv';
import { connectMongo, mongoState } from './mongo.js';

dotenv.config();

const app = express();
const started = Date.now();

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    started,
    mongo: mongoState()
  });
});

app.get('/', (_req, res) => {
  res.json({
    service: 'onelastai-backend',
    message: 'API online',
    mongo: mongoState()
  });
});

const port = process.env.PORT || 3000;

// Start server after attempting DB connection (non-fatal if fails first time)
async function start() {
  await connectMongo();
  app.listen(port, () => {
    console.log(`[backend] listening on :${port}`);
  });
}

start();

process.on('SIGINT', async () => {
  console.log('SIGINT received, exiting');
  process.exit(0);
});

console.log('[backend] ENV summary:', {
  mongo: (process.env.MONGODB_URI || '').startsWith('mongodb+srv://') ? 'atlas' : 'local',
  redisHost: process.env.REDIS_HOST,
  redisAuth: !!process.env.REDIS_PASSWORD
});
