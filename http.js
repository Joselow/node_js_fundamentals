const http = require('http');

// Crea un servidor HTTP
const server = http.createServer((req, res) => {
  // Configura la respuesta HTTP
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 300
  res.end('¡Hola, mundo!\n');
});

// Escucha en el puerto 3000 y la dirección IP local
const PORT = 3000;
const IP = '127.0.0.1';

server.listen(PORT, IP, () => {
  console.log(`El servidor está escuchando en http://${IP}:${PORT}/`);
});
