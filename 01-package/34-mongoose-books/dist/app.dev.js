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

  BookModel.findOne({
    title: 'The Name of the Wind (The Kingkiller Chronicle, #1)'
  }).populate('author').populate('genre').exec(function (error, book) {
    if (error) {
      return handleError(error);
    }

    console.log(book);
    response.render('index.ejs', book);
  });
});
db.on('error', function (error) {
  console.log(error);
});
app.listen(3000);