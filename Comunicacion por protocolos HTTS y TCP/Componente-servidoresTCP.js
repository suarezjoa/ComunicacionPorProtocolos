const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  socket.on('data', (data) => {
    if (data.toString().trim() === 'ping') {
      const currentTime = new Date().toLocaleTimeString();
      socket.write(`Hora del servidor: ${currentTime} Grupo: Joaquin Suarez y Andres briend`);
    }
  });

  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});
const PORT = 8000;

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`El puerto ${PORT} ya está en uso.`);
  } else {
    console.error('Error inesperado:', error);
  }
});

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
