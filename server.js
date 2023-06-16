//Import modules and packages
const express = require('express');
const api = require('./Develop/routes/index');


//setup express.js server 
const PORT = 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
//below is a required security feature
app.use(express.urlencoded({ extended: true }));

// Middleware to serve up static assets from the public folder
app.use(express.static('public'));

// Send all the requests that begin with /api to the index.js in the routes folder
app.use('/api', api);





//Get Route to retrieve all of our saved notes 
//Read the db.json file 
//return all saved notes 

//Post route to add new saved notes 
//Read the db.json file 
//Parse the request body to get the new note data 
//Assign a unique ID (uuid)
//Need to push this new note to the array of saved notes 
//Write the updated array of notes the db.json file 
//Return the new to the client

//Delete route to remove a saved note by the unique ID //*****Bonus Extra Credit
//Read db.json 
//Get the id of the note to be able to remove 
//find the note with the corresponding ID in the array 
//remove the note from the array 
//Write the new updated array of saved notes with the deleted missing

//use the helper folder for your uuid and utils 





app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});




















