"use strict";

var express = require('express');

var app = express();

var fileUpload = require('express-fileupload');

var path = require('path');

app.use(fileUpload({
  createParentPath: true
}));
app.use(express.urlencoded({
  extended: true
}));
app.use('/uploads', express["static"](path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
  response.render('index');
});
app.post('/upload-profile-pic', function (request, response) {
  try {
    if (request.files) {
      var profile_pic = request.files.profile_pic;
      var file_name = "./uploads/".concat(profile_pic.name);
      profile_pic.mv(file_name);
      response.render('image', {
        image: file_name
      });
    } else {
      response.end('<h1>No file uploaded!</h1>');
    }
  } catch (error) {
    response.send(error);
  }
});
app.listen(3000);