//Import modules and packages
const express = require('express');
const path = require('path');
const database = require('./db/db.json')

const notes = require('notes')

//setup express.js server 
const PORT = 3001;
const app = express();

app.use(express.static('public'));



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





 














