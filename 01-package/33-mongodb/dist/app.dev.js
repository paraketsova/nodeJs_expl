"use strict";

var express = require('express');

var app = express();

var monk = require('monk');

var db = monk('localhost:27017/nodetest1');

var bodyParser = require('body-parser');

app.use(function (request, response, next) {
  request.db = db;
  next();
});
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', function (request, response) {
  var users = request.db.get('usercollection');
  users.find().then(function (data) {
    response.render('userlist.ejs', {
      users: data
    });
  });
});
app.post('/adduser', function (request, response) {
  var users = request.db.get('usercollection');
  users.insert(request.body);
  response.redirect('/');
});
app.get('/edituser/:id', function (request, response) {
  var users = request.db.get('usercollection');
  users.find({
    _id: request.params.id
  }).then(function (data) {
    if (data.length == 1) {
      response.render('edituser.ejs', data[0]);
    } else {
      response.redirect('/');
    }
  });
});
app.get('/removeuser/:id', function (request, response) {
  var users = request.db.get('usercollection');
  users.remove({
    _id: request.params.id
  });
  response.redirect('/');
});
app.post('/saveuser', function (request, response) {
  var users = request.db.get('usercollection');
  users.update({
    _id: request.body.userid
  }, {
    $set: {
      username: request.body.username,
      email: request.body.email
    }
  });
  response.redirect('/');
});
app.listen(3000);