const http = require('http');

// Product data
const menProducts = [
  { id: 1, name: 'Men Product 1', category: 'Men' },
  { id: 2, name: 'Men Product 2', category: 'Men' },
  // Add more products here...
];

const womenProducts = [
  { id: 1, name: 'Women Product 1', category: 'Women' },
  { id: 2, name: 'Women Product 2', category: 'Women' },
  // Add more products here...
];

// Create the server
const server = http.createServer((req, res) => {
  // Set response headers
  res.setHeader('Content-Type', 'application/json');

  // Endpoint: /
  if (req.url === '/') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
  }
  // Endpoint: /men
  else if (req.url === '/men') {
    res.statusCode = 200;
    res.end(JSON.stringify({ products: menProducts }));
  }
  // Endpoint: /women
  else if (req.url === '/women') {
    res.statusCode = 200;
    res.end(JSON.stringify({ products: womenProducts }));
  }
  // Endpoint: /other
  else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Page not found' }));
  }
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
