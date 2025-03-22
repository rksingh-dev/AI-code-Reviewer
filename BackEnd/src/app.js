const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const aiRoutes = require('./routes/ai.routes');


app.use('/ai', aiRoutes);


app.get('/', (req, res) => {
  res.status(200).send('API is running');
});

module.exports = app;
