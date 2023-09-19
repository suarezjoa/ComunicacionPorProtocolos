const http = require('http');

const options = {
  hostname: '172.16.12.38', // Cambia esto por la dirección del servidor si es diferente
  port: 8080,
  path: '/ping',
  method: 'GET',
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Hora recibida del servidor:', data);
  });
});

req.on('error', (error) => {
  console.error('Error al realizar la solicitud:', error);
});

req.end();
