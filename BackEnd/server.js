require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = require('./src/app')

// CORS configuration
app.use(cors({
  origin: '*', // For debugging, allow all origins
  methods: ['GET', 'POST']
}))

app.use(express.json())

// Import routes
const aiRoutes = require('./src/routes/ai.routes')

// Use routes - make sure the path matches your vercel.json configuration
app.use('/ai', aiRoutes)

// Add a simple health check route
app.get('/api', (req, res) => {
  res.status(200).send('API is running')
})

// For local development
const PORT = process.env.PORT || 3000
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// Export for Vercel serverless functions
module.exports = app
