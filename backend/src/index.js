import express from 'express';

const app = express();
const started = Date.now();

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), started });
});

app.get('/', (_req, res) => {
  res.json({ service: 'onelastai-backend-placeholder', message: 'Replace this placeholder with real API implementation.' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`[placeholder-backend] listening on :${port}`);
});

console.log('[backend] ENV summary:', {
  mongo: (process.env.MONGODB_URI || '').startsWith('mongodb+srv://') ? 'atlas' : 'local',
  redisHost: process.env.REDIS_HOST,
  redisAuth: !!process.env.REDIS_PASSWORD
});
