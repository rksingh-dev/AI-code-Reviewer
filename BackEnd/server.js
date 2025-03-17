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

// IMPORTANT: Use the PORT environment variable provided by Render
const PORT = process.env.PORT || 3000

// Make sure this line is not inside any conditional blocks
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`)
})

// No need to export the app since Render runs it as a service
