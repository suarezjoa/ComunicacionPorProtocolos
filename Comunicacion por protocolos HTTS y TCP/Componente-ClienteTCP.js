const net = require('net');

const client = new net.Socket();

const PORT = 8000;
const HOST = '127.0.0.1'; // Cambia esto por la dirección IP del servidor si es necesario

client.connect(PORT, HOST, () => {
  console.log('Conectado al servidor');
  client.write('ping');
});

client.on('data', (data) => {
  console.log('Hora recibida del servidor:', data.toString());
  client.end();
});

client.on('close', () => {
  console.log('Conexión cerrada');
});
