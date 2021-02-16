const https = require('https')

const options = {
  hostname: 'icanhazdadjoke.com', //убираем http, здесь только имя сайта

  method: 'GET',
  headers: {
    'Accept': 'application/json'
  }
}

const req = https.request(options, res => { // здесь два параметра - опции и сама функция, обеспечивающая забор данных
  //console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => { //этот процес запишет данные, если их найдёт
    data = JSON.parse(String(d))
    console.log(data.joke)
  })
})

req.on('error', error => { //фелхантеринг - что делать с ошибкой
  console.error(error)
})

req.end()