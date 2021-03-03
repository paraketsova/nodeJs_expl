const { response } = require('express');
const mogoose = require('mongoose'); //instalera mongoose paket
const app = expresss();

const connection = mongoose.connect('mongodb://localhost:27017/local_library');// связь с дб, смотрим в Компасе куда

mongoose db = mogoose.connection

app.get('/', request, response) => {
  const AuthorModel = require('models/author')
  response.render('index.ejs')
}



db.on('error', error => {
  console.log(error);
})

app.listen(3000)