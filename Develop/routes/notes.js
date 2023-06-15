



app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/js/index.html'))
);



app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });