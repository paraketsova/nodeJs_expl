const https = require('https')

const options = {
  hostname: 'randomuser.me', //убираем http, здесь только имя сайта для линка

  path: '/api', // последняя часть в линке
  method: 'GET'
}

const req = https.request(options, res => { // здесь два параметра - опции и сама функция, обеспечивающая забор данных
  console.log(`statusCode: ${res.statusCode}`) //выводим статус код - смотрим установилось ли соединение(200 или нет)

/*   document.getElementById('smth').addEventListener('click', function() {
    alert("Hi gays!")
  }) */

  res.on('data', d => { //этот процес запишет данные, если их найдёт
    process.stdout.write(d)
  })
})

req.on('error', error => { //фелхантеринг - что делать с ошибкой
  console.error(error)
})

req.end() //маркируем конец сеанса
/*
Теперь мы можем просто вызвать в терминале файл и увидеть данные произвольной персоны из API, ПРОИЗВОЛЬНОЙ
*/