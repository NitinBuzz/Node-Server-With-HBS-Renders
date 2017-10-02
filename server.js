const express = require('express');
const hbs = require('hbs');

const PORT = process.env.PORT || 3000;

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
  next();
});
//app.use((req, res, next) => {
//  res.render('down.hbs');
//});

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

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'My projects',
    welcomeMessage: 'nanananana'
  });
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
