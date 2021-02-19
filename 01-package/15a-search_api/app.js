const https = require('https');

const options = {
  hostname: 'icanhazdadjoke.com', //убираем http, здесь только имя сайта для линка

  headers: {
    'Accept': 'application/json'
  }
}

const request = https.request(options, response => {

  let data;


  response.on ('data', response_json => {
    console.log(JSON.parse(response_json))
  })
})

request.end();