"use strict";

var https = require('https');

var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());
app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname + '/html/index.html'));
});
app.post('/search-jokes', function (request, response) {
  response.type('text/html');
  var options = {
    hostname: 'icanhazdadjoke.com',
    path: '/search?term=' + request.body.search_term,
    headers: {
      'Accept': 'application/json'
    }
  };
  var api_request = https.request(options, function (api_response) {
    var data = '';
    api_response.on('data', function (chunk) {
      data += String(chunk);
    });
    api_response.on('end', function () {
      var json = JSON.parse(data);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = json.results[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          joke_object = _step.value;
          response.write("<div>".concat(joke_object.joke, "</div>"));
          response.write('<hr>');
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

      response.end();
    });
  });
  api_request.end();
});
app.listen(3000);