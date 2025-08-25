import express from 'express';
import Agent from '../models/Agent.js';

const router = express.Router();

// List agents
router.get('/', async (_req, res, next) => {
  try {
    const agents = await Agent.find().sort('-createdAt').lean();
    res.json(agents);
  } catch (e) { next(e); }
});

// Create agent
router.post('/', async (req, res, next) => {
  try {
    const agent = await Agent.create(req.body);
    res.status(201).json(agent);
  } catch (e) { next(e); }
});

// Get one
router.get('/:id', async (req, res, next) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) return res.status(404).json({ error: 'Not found' });
    res.json(agent);
  } catch (e) { next(e); }
});

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const agent = await Agent.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!agent) return res.status(404).json({ error: 'Not found' });
    res.json(agent);
  } catch (e) { next(e); }
});

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const agent = await Agent.findByIdAndDelete(req.params.id);
    if (!agent) return res.status(404).json({ error: 'Not found' });
    res.json({ deleted: true });
  } catch (e) { next(e); }
});

export default router;
