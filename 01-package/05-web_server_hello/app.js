//создаём вебсервер:
const http = require('http'); //указываем тип соединения - мы будем делать на хттп

const hostname = '127.0.0.1'; //адрес в адресной строке
const port = 3001; //порт  на котором мы будем слушать сообщения к серверу

const server = http.createServer((request, response) => { //используем метод креэйтСервер, параметры которого - рекв и респ
  //console.log("Someone vizited our site")
  response.statusCode = 200; //если передача будет, то принимающая сторона получит 200
  response.setHeader('Content-Type', 'text/html');
  response.write('<h1>Lorem ipsum</h1>');// каждый раз когда мы будем делать реквест увидим это
  response.end('Hello World\n'); // и это
});



server.listen(port, hostname, () => { // функция чтения, выполняемая при реквесте
  console.log(`Server running at http://${hostname}:${port}/`); // два параметра - хостнейм и порт, куда будет поступать
});