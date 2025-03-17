const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');
const path = require('path');

const app = express();

// CORS configuration for Render
app.use(cors({
  // In production, specify your frontend URL
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// Mount routes with the correct prefix
app.use('/ai', aiRoutes);

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('API is running');
});

module.exports = app;
