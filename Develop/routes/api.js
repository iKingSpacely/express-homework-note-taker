const api = require('express').Router()



api.get('/notes', (req, res) => res.json(database));

module.exports = api;