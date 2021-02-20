const https = require('https'); //поставили в проект npm, express, path.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.request(bodyParser.urlencoded());

const options = {
  hostname: 'icanhazdadjoke.com', //убираем http, здесь только имя сайта для линка

  headers: {
    'Accept': 'application/json'
  }
}

const request = https.request(options, response => {

  let data = '';

   /* response.on ('data', response_json => {
    console.log(JSON.parse(response_json))
  }) */

  response.on ('data', chunk => {
    data += String(chunk);
  })

  response.on ('end', () => {
    json = JSON.parse(data);
    console.log(json);
  })


  

 
})

request.end();