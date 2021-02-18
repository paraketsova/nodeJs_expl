const https = require('https')

const options = {
  hostname: 'randomuser.me', //убираем http, здесь только имя сайта для линка

  path: '/api', // последняя часть в линке 
  method: 'GET'
}

const req = https.request(options, res => { // здесь два параметра - опции и сама функция, обеспечивающая забор данных
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => { //этот процес запишет данные, если их найдёт
    process.stdout.write(d)
  })
})

req.on('error', error => { //фелхантеринг - что делать с ошибкой
  console.error(error)
})

req.end()