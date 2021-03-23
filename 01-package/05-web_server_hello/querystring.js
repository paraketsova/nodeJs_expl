//калькулятор через части строки в куери стринг

const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3002;

const server = http.createServer((request, response) => {//создаём сервер, используя http библиотеку
    const queryObject = url.parse(request.url, true).query;//создаём куери объект, идущий после урл. Он принимает первым параметром запрашиваемый урл,
    /*

    console.log(queryObject); //вбиваем в адрес строку сайта после 3002/    ?aaa=lorem&bbb=ipsum  и получим в терманале строку: { aaa: 'lorem', bbb: 'ipsum' }
   //тогда если мы ввели http://localhost:3002/?aaa=lorem&bbb=ipsum  то, что в предыд комменте, то при вводе:
    console.log(queryObject.aaa);//получим в консоли терминала: lorem
    console.log(queryObject.bbb);// => ipsum

 */
 //если мы хотим сделать калькулятор через данные куери строки, задав число 1, знак и число 2 через &:
 //http://localhost:3002/?tal1=5&sign=plus&tal2=8 тогда получим в терминале: 5 + 8 = 13
    if ('plus' === queryObject.sign) {
        console.log(`${queryObject.tal1} + ${queryObject.tal2} = ${Number(queryObject.tal1) + Number(queryObject.tal2)}`)
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Lorem ipsum2</h1>');
    //чтобы вывести действие из строки в тело на сайте:
    response.write(`<p>${queryObject.tal1} + ${queryObject.tal2} = ${Number(queryObject.tal1) + Number(queryObject.tal2)}</p>`);
    response.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
