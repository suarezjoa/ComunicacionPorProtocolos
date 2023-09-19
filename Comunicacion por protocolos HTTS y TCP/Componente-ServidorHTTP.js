const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/ping') {
    const currentTime = new Date().toLocaleTimeString();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hora del servidor: ${currentTime} Grupo: Joaquin Suarez y Andres briend`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});