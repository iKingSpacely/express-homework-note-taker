const express = require('express');



// Import our files containing our routes
const apiRouter = require('./api')

// Create and instance of express so we can apply the middleware and routing
const app = express();


app.use('/', apiRouter);

module.exports = app;