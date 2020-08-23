'use strict';

// Package Imports
const express = require('express');

// File Imports
const router = require('./router.js');

// Getting the listening port
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// Defining the Express application
const app = express();
app.disable('x-powered-by');

// Setting up the website routers
router(app);

// Listening for connections
app.listen(port, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on port ${port}...`);
});
