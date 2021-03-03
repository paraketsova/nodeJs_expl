const express = require('express')
const app = express()

const mongoose = require('mongoose')
const connection = mongoose.connect('mongodb://localhost:27017/local_library')
const db = mongoose.connection


app.get('/', (request, response) => {
    
    //const AuthorModel = require('./models/author')
    const BookModel = require('./models/book');
    //const BookInstanceModel = require('./models/bookinstance')
    //const GenreModel = require('./models/genre')

    BookModel.find ({}, "title _id", (error, books) => {
            if (error) return handleError(error);
            
            console.log(books);
            response.render("index.ejs", {books})
    })
        

        /* .populate('author')
        .populate('genre')
        .exec((error, book) => {
            if (error) {
                return handleError(error)
            }

            console.log(book) 
            response.render('index.ejs', book)
        })*/
})

app.get("/booksdetails/:id", (req, res) => {
    BookModel.findOne(req.params.id);
    //const bookDetails = book.select("title")
    console.log(bookDetails);
})

db.on('error', error => {
    console.log(error)
})

app.listen(3000)