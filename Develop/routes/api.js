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

    methods.postNote(req.body)
    .then((note) => res.json(note))
});

api.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete notes`);

    methods.deleteNote(req.params.id)
    .then(() => res.json({ok: true}))
});

module.exports = api;