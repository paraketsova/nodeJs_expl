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

// выведет в теле браузера строку Лараре хетер ИМЯ ИЗ КУЕРИ РЕКВЕСТА после инструктор/ИМЯ:
app.get('/instructor/:name', (request, response) => {
  response.send(`Läraren heter ${request.params.name}`);
});
//====//

var server = app.listen(port, () => {
  const port = 3002;
  console.log(`Server running at http://${hostname}:${port}/`)
});