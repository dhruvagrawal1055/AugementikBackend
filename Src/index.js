// src/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const heroBannerRoutes = require('./Routes/heroBannerRoutes');
const carRoutes = require('./Routes/CarRoute');
const contact = require('./Routes/ContactRoute');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const dbUrl = 'mongodb+srv://dhruvagrawal1055:RAMshyam1055@cluster1.bodv07q.mongodb.net/';
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// API Routes
app.use('', heroBannerRoutes);
app.use('', carRoutes);
app.use('', contact);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
