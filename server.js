const express = require('express');
const path = require('path');
const dbAPI = require('db.json')

const PORT = 3001;
const app = express();

//static middleware
app.use(express.static('public'));

//root 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/assets/index.html'));
});

//the get request to the API
app.get('/api/db.json', (req, res) => res.json(dbAPI));

//this listens to the above request
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});