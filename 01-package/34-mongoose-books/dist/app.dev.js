"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var connection = mongoose.connect('mongodb://localhost:27017/local_library');
var db = mongoose.connection;
app.get('/', function (request, response) {
  //const AuthorModel = require('./models/author')
  var BookModel = require('./models/book'); //const BookInstanceModel = require('./models/bookinstance')
  //const GenreModel = require('./models/genre')


  BookModel.find({}, "title _id", function (error, books) {
    if (error) return handleError(error);
    console.log(books);
    response.render("index.ejs", {
      books: books
    });
  });
  /* .populate('author')
  .populate('genre')
  .exec((error, book) => {
      if (error) {
          return handleError(error)
      }
       console.log(book) 
      response.render('index.ejs', book)
  })*/
});
app.get("/booksdetails/:id", function (req, res) {
  BookModel.findOne(req.params.id); //const bookDetails = book.select("title")

  console.log(bookDetails);
});
db.on('error', function (error) {
  console.log(error);
});
app.listen(3000);