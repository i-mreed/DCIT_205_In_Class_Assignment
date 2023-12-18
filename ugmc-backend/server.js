const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/ugmc_emr', { useNewUrlParser: true, useUnifiedTopology: true });

// Check for successful connection
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Handle connection errors
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

const patientRoutes = require('./routes/patients');
app.use('/patients', patientRoutes);
