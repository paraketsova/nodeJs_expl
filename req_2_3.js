// сделать задание с роутс с Постман
var express = require('express');
var app = express();

const hostname = '127.0.0.1';
const port = 3002;

app.get('/', function(request, response) {
  response.send('Hello pony!');
});

app.get('/', function(request, response) {
  response.send("Here's a list of our users.");
});

var server = app.listen(port, () => {
  const port = 3002;
  console.log(`Server running at http://${hostname}:${port}/`)
});