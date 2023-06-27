const express = require('express');
const app = express();

// Initialize counter
let counter = 0;

// Endpoint: /
app.get('/', (req, res) => {
  res.json({ counter: counter });
});

// Endpoint: /increment
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter: counter });
});

// Endpoint: /decrement
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter: counter });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
