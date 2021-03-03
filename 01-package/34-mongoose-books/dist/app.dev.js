"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost:27017/local_library');
var db = mongoose.connection;
app.get('/', function (request, response) {
  var AuthorModel = require('./models/author');

  var BookModel = require('./models/book');

  var BookInstanceModel = require('./models/bookinstance');

  var GenreModel = require('./models/genre');

  response.render('index.ejs');
});
db.on('error', function (error) {
  console.log(error);
});
app.listen(3000);