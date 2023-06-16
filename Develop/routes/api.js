const api = require('express').Router()
const methods = require('../helpers/methods')



api.get('/notes', (req, res) => {
    console.info(`${req.method} request received for notes`);

    methods.getNotes().then(
        data => {
            return res.json(data)
        }
    )
});

api.post('/notes', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request received to submit notes`);

    // Destructuring assignment for the items in req.body
    const { title, text } = req.body;

    // If all the required properties are present
    if (title && text ) {
        // Variable for the object we will save
        const newNote = {
            title,
            text,
            is: uuid(),
        };

        readAndAppend(newNote, './db/db.json');

        const response = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting your note');
    }
});


module.exports = api;