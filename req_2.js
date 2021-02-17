// ПОВТОРИТЬ ПЕРВОЕ ЕГО УПРАЖНЕНИЕ
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => { // здесь два параметра - опции и сама функция, обеспечивающая забор данных
  const queryObject = url.parse(request.url, true).query;
  //console.dir(queryObject);
  console.log(queryObject.foo);
  console.log(queryObject.lorem);


  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1>Lorem ipsum</h1>');
  response.end('Hello gays\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});