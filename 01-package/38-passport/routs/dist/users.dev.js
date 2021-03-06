"use strict";

var express = require(express);

var router = express.Router(); //Handle login

router.get('/login'), function (request, response) {
  response.render('login');
};
router.get('/register', function (request, response) {
  response.render('login');
});
router.post('/register', function (request, response, next) {//do stuff
});
router.post('/register', function (request, response) {//do stuff
});
router.get('/logout', function (request, response) {//
});
module.exports = router;