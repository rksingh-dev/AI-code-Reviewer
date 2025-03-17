require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = require('./src/app')

// Ensure your app is properly configured with routes
app.use(express.json())

// Import routes 
const aiRoutes = require('./src/routes/ai.routes')

// Use routes
app.use('/api', aiRoutes)

const PORT = process.env.PORT || 3000

// For Vercel serverless functions
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
}

// Export the Express app for Vercel
module.exports = app
