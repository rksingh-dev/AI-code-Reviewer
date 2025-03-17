const express = require('express');
const cors = require('cors');

const app = express();

// Simpler CORS configuration for debugging
app.use(cors({
  origin: '*', // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// Other middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
const aiRoutes = require('./routes/ai.routes');

// Mount routes
app.use('/ai', aiRoutes);

// Add a root route for health check
app.get('/', (req, res) => {
  res.status(200).send('API is running');
});

// Export the app
module.exports = app;
