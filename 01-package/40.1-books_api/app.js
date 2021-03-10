//чтобы из МонгоДБ получались только файлы с конкретным автором (тут важно как мы оформили связку, клиентская стороная тут не сделана для поиска)
const express = require('express')
const app = express()
const monk = require('monk')
const db = monk('localhost:27017/hejhej')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get('/books/:author', (request, response) => {
    const author = request.params.author
    const book = db.get('hej')
    book
        .find({author: author})
        .then(data => {
            response.send(data)
        })
})
app.listen(3000)