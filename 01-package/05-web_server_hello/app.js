const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
  //console.log("Someone vizited our site")
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1>Lorem ipsum</h1>');
  response.end('Hello World\n'); // каждый раз когда мы будем делать реквест увидим это
});



server.listen(port, hostname, () => { // функция чтения, выполняемая при реквесте
  console.log(`Server running at http://${hostname}:${port}/`); // два параметра - хостнейм и порт, куда будет поступать
});