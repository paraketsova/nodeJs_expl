"use strict";

var express = require(express);

var router = express.Router();
router.get('/'), function (request, response) {
  response.render('welcome');
};
router.get('/register', function (request, response) {
  response.render('register');
});
module.exports = router;