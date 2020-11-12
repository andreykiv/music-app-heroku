const express = require('express');

// express app
const app = express();

// configuration of remote or local server port 
const port = process.env.PORT || 3000

// listen for requests
app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});

const songs = [
    {title: "Don't leave", artist: 'Gummy boy', genre: "Electronic", subgenre: "Sovietwave"},
    {title: 'Nightcall', artist: 'Kavinsky', genre: "Electronic", subgenre: "Synthwave"},
    {title: 'M.O.O.N ', artist: 'Dust', genre: "Electronic", subgenre: "Synthwave"},
    {title: 'Resurrection (Robots Outro)', artist: 'PPK', genre: "Electronic", subgenre: "Sovietwave"},
    {title: 'Futurisma', artist: 'Flashworx', genre: "Electronic", subgenre: "Sovietwave"},
    {title: 'Resurrection (Robots Outro)', artist: 'PPK', genre: "Electronic", subgenre: "Sovietwave"},
    {title: 'Resurrection (Robots Outro)', artist: 'PPK', genre: "Electronic", subgenre: "Sovietwave"}
  ];

app.get("/", (req, res) => {
    res.render('index', {title: 'Home', songs})
})

app.get("/chart", (req, res) => {
    res.render('chart', {title: "Chart", songs})
})


app.get("/songs/create", (req,res) =>{
    res.render('create', {title: "New"})
})


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
  