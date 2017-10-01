const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('CapIt', string => {
  return string.toUpperCase();
});

app.use((req, res, next) => {
  res.render('down.hbs');
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

app.listen(3000, () => {
  console.log(`Server is up on port 3000`);
});
