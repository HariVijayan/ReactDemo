const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// Create an array to store client connections
let clients = [];

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Check if it's a new client connection
  if (req.url === '/connect') {
    // Add the client to the array
    clients.push(res);
    
    // Send a welcome message to the client
    res.end('Connected to server\n');
  } else if (req.url === '/broadcast') {
    // Handle broadcast message to all connected clients
    clients.forEach(client => {
      client.end('Broadcast message from server\n');
    });
    res.end('Broadcast sent to all clients\n');
  } else {
    // Handle other requests
    res.end('Hello World\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
