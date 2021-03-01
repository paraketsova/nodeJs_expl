"use strict";

var _require = require('express'),
    request = _require.request;

var express = require('express');

var app = express();

var monk = require('monk');

var db = monk('localhost:27017/nodetest1'); // från mongoDB compass host: ---

app.use(function (request, response, next) {
  request.db = db;
  next();
});
app.get('/', function (request, response) {
  var users = request.db.get('user');
  users.find().then(function (data) {
    console.log(data);
    response.render('userlist.ejs', {
      users: data
    });
  });
});
app.post('/adduser', function (request, response) {
  var users = request.db.get('user');
  users.insert(request.body);
  response.redirect('/');
});
app.listen(3000);