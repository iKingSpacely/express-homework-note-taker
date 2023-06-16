const express = require('express');



// Import our files containing our routes
const notesRouter = require('./notes')
const apiRouter = require('./api')

// Create and instance of express so we can apply the middleware and routing
const app = express();

app.use('/html', notesRouter);
app.use('/', apiRouter);

module.exports = app;