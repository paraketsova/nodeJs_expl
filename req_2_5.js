// сделать задание с ... выводом имени (учителя)
var express = require('express');
var app = express();

const hostname = 'localhost';
const port = 3003;

/* app.get('/', function(request, response) {
  response.send('Hello pony!');
}); */

app.get('/instructor/:name', (request, response) => {
  response.send(`Teacher name is ${request.params.name}`);
});

var server = app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});