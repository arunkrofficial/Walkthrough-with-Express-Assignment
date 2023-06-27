newFunction();
function newFunction() {
  const express = require('express');
  const app = express();

  // Route for the homepage
  app.get('/home', (req, res) => {
    res.json({ msg: 'I am homepage' });
  });

  // Route for the about page
  app.get('/about', (req, res) => {
    res.json({ msg: 'I am about page' });
  });

  // Route for the contact page
  app.get('/contact', (req, res) => {
    res.json({ msg: 'email: supports@pwskills.com' });
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}

