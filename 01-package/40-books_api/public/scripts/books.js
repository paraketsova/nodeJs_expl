const { response } = require("express")

const loadBooks = () => {
  const books = fetch('/books')
    .then(response => {
      response.json()//kontrollera statuskod?
    })
    .then(data => {
      console.log(data) //browser console log
    })
};

loadBooks();