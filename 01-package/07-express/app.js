var express = require('express');//use express module
var app = express(); //skapa objekt av express module

const hostname = '127.0.0.1';
const port = 3002;

app.get('/', function (request, response) { //skapa callback funkt
    response.send('Hello World!'); //send response
});

app.get('/users', function(request, response) {
  response.send("Here's a list of our users.");
});

var server = app.listen(port, () => {
  const port = 3002;
  console.log(`Server running at http://${hostname}:${port}/`)
});