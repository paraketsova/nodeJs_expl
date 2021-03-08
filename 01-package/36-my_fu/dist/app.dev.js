"use strict";

var express = require('express');

var app = express();

var path = require('path');

var fileUpload = require('express-fileupload');

app.use(express.urlencoded({
  extended: true
}));
app.use('/uploads', express["static"](path.join(__dirname, 'uploads')));
app.set('view engine', 'ejs');
app.get('/', function (request, response) {
  response.render('index');
});
app.post('/uploads-photos', function (request, response) {
  try {
    var photoArr = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = request.files.photos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var photo = _step.value;
        var photoPath = "./uploads/".concat(photo.name);
        photo.mv(photoPath);
        photoArr.push(photo);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    response.render('photo', {
      photoArr: photoArr
    });
  } catch (error) {
    response(error);
  }
});
app.listen(3000);