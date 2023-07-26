const http = require('http');

const serv = http.createserv((req, res) => {
 

  if (req === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Bienvenido al servidor HTTP')
    res.end()
  } else if (req === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Esta es la página de acerca de nosotros.')
    res.end()
  } else if (req === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Ponte en contacto con nosotros en contact@example.com')
    res.end()
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.write('Pagina no encontrada')
    res.end()
  }
});

const port = 3000;

serv.listen(port, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${port}`);
});