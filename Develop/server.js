//Import modules and packages
const express = require('express');
const api = require('./routes/index')
const viewsRouter = require('./routes/views')

//setup express.js server 
const PORT = process.env.PORT || 3001;
const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
//below is a required security feature
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));
// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', api);
app.use('/', viewsRouter);


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});




















