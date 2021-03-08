"use strict";

var express = require('express');

var app = express();

var multer = require('multer');

var uploadPath = 'uploads/';
var storage = multer.diskStorage({
  destination: function destination(request, file, callback) {
    callback(null, uploadPath);
  },
  filename: function filename(request, file, callback) {
    callback(null, Dater.now() + path.extname(file.originalname));
  }
});
var upload = multer({
  dest: 'uploads',
  limits: {
    files: 3,
    filedSize: 2 * 1024 * 1024
  },
  storage: storage,
  fileFilter: function fileFilter(request, file, callback) {
    // file filter som validerare filens storlek
    if (!file.originalname.match(/\.(jpg|png|gif)$/)) {
      callback(new Error('Only images ending in .gif, .jpg, .png allowed.'), false);
    } // проверяет, что загружаемое - картинки

  }
});
app.use(express.urlencoded({
  extended: true
}));
app.use('/uploads', express["static"](path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
  response.render('index');
});
app.post('upload-profile-pic', upload.single('profile_pic'), function (request, response) {
  try {
    var profile_pic = uploadPath + request.file.filename; //console.log(profile_pic)

    if (profile_pic) {
      response.render('image', {
        images: [profile_pic]
      });
    } else {
      response.end('<h1>File not uploaded</h1>');
    }
  } catch (error) {
    console.log(error);
    response.render('error', error);
  }
});
app.listen(3000);