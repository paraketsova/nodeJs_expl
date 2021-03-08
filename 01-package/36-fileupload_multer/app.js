const express = require('express');
const app = express();

const multer = require('multer');
const uploadPath = 'uploads/'

const storage = multer.diskStorage ({
  destination: (request, file, callback) => { // var сохраняем. калбек берет первым параметром нулл - ошибку (мы не придаём ей имя переменно, т.к. не собираемся сделать с ней что-0то конкретное)и имя файла
      callback(null, uploadPath)
  },
  filename: (request, file, callback) => { // 

    //const error = new Error("Something went wrong")
    callback(null, Dater.now() + path.extname(file.originalname))
  }
})

const upload = multer({   // создаём ограничения и условия для загружаемых объектов
  dest: 'uploads',
  limits: {
    files: 3,
    filedSize: 2 * 1024 * 1024
  }, 
  storage: storage,
  
  fileFilter: (request, file, callback) => { // file filter som validerare filens storlek
    if (!file.originalname.match(/\.(jpg|png|gif)$/)) {
      callback(new Error('Only images ending in .gif, .jpg, .png allowed.'), false);
    } // проверяет, что загружаемое - картинки
  
    calback(null, true) // первый параметр - ошибка, с ней ничего не делаем. Второй - результат - если он есть, то выдаём тру, файл значит ОК для загрузки
  }
})

app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index');
})

app.post('upload-profile-pic', upload.single('profile_pic'), (request, response) => {
  try {
    const profile_pic = uploadPath + request.file.filename
    //console.log(profile_pic)

    if(profile_pic) {
      response.render('image', { images: [profile_pic] })
    } else {
      response.end('<h1>File not uploaded</h1>')
    }  
  }
  catch (error) {
    console.log(error)
    response.render('error', error)
  }
})

app.listen(3000)