'use strict';

// Package Imports
const marked = require('marked');

// getPost()
function getPost() {
  const testString = '# Fancy Title\n\nYou really thought this was gonna be **BIG**, huh?';
  return marked(testString);
}

// Setting the exports
module.exports = {
  GetPost: getPost
};
