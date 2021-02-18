// сделать задание с роутс с Постман
var express = require('express');
var app = express();

app.route('/Node')

  .get(function(request, response) {
  response.send('Tutorial on Node');
  })

  .post(function(request, response) {
    response.send('Create post on Node');
  })

  .options(function (request, response) {
    response.send('Something smth options on Node');
  })

app.route('/Angular')
  .get(function(request, response) {
    response.send('Tutorial on Angular');
  })

  .post(function(request, response) {
    response.send('Angular is cool!');
  });


var server = app.listen(3004, () => {
  /* console.log(`Server running at http://${hostname}:${port}/`) */
});
np