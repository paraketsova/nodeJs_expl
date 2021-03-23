//выводим в консоль лог шутку с сайта:

const https = require('https')

const options = {
  hostname: 'icanhazdadjoke.com', //убираем http, здесь только имя сайта для линка
  method: 'GET',
  headers: {    //по сравнению с файлом "реквест" тут мы добавляем хедерс, об этом пишут на раздающем сайте
    'Accept': 'application/json'
}}
//в переменной далее есть два параметра - опции и сама функция, обеспечивающая забор данных - переменная с опциями и функцию
const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => { //этот процес запишет данные, если их найдёт
    data = JSON.parse(d); // чтобы распарсить результат получаемого джейсон файла
    console.log(data.joke);
  })
})

req.on('error', error => { //фелхантеринг - что делать с ошибкой
  console.error(error)
})

req.end()