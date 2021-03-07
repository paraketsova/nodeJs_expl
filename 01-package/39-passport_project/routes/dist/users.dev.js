"use strict";

var express = require('express');

var router = express.Router(); // Login

router.get('/login', function (request, response) {
  response.render('login');
});
router.get('/register', function (request, response) {
  response.render('register');
});
router.post('/login', function (request, response, next) {// do stuff
});
router.post('/register', function (request, response) {// do stuff
});
router.get('/logout', function (request, response) {// do stuff
});
module.exports = router;