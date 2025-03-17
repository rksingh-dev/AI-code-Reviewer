const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()

// Update CORS configuration for production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? true // Allow requests from the same origin in production
    : 'http://localhost:5173', // Allow your local frontend in development
  methods: ['GET', 'POST'],
  credentials: true
};

app.use(cors(corsOptions))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/ai', aiRoutes)

module.exports = app
