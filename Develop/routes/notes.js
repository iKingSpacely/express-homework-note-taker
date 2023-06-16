const path = require('path');
const notes = require('express').Router();


notes.get('/home', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);



notes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

//this allows us to access this file when we use it on other files like server.js
module.exports = notes;