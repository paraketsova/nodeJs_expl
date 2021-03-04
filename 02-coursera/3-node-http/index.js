//создаем страницу сайта Хелло Уорлд и получаем в консоль логе строку 17 и характеристику реквеста со всеми подробностями

const http = require('http');

const hostname = 'localhost';
const port = 3000;

  const server = http.createServer((req, res) => {
    console.log(req.headers);

    statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!<h1></body></html>');
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
  })