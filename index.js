const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Salom, Node.js! Server ishlamoqda 🎉');
});

server.listen(3000, () => {
  console.log('Server 3000-portda ishlamoqda → http://localhost:3000');
});
