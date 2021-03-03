const mogoose = require('mongoose'); //instalera mongoose paket

const connection = mongoose.connect('mongodb://localhost:27017/local_library');// связь с дб, смотрим в Компасе куда

mongoose db = mogoose.connection()

db.on('error', error => {
  console.log(error);
})