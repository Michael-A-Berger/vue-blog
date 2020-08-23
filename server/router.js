'use strict';

// Package Imports
const express = require('express');

// File Imports
const posts = require('./posts.js');

// Setting up the routing
function router(app) {
  // Static Files
  app.use('/media', express.static('media'));

  // Blog Posts
  app.get('/post/:whatever', (rq, rs) => {
    console.log(`- Requested [${rq.url}]`);
    rs.send(posts.GetPost(rq, rs));
  });
}

// Setting the export
module.exports = router;
