//сделать упражнение на сложение чисел (см. лекцию)
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((request, response) => { // здесь два параметра - опции и сама функция, обеспечивающая забор данных
  const queryObject = url.parse(request.url, true).query;
  console.log(queryObject.tal1);
  console.log(queryObject.sign);
  console.log(queryObject.tal2);

  if ('plus' === queryObject.sign) {
    console.log(`${queryObject.tal1} + ${queryObject.tal2} = ${Number(queryObject.tal1) + Number(queryObject.tal1)}`)
  }

  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1>Lorem ipsum</h1>');
  response.end('Hello gays\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});