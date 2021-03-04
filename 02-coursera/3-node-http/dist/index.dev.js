"use strict";

//создаем страницу сайта Хелло Уорлд и получаем в консоль логе строку 17 и характеристику реквеста со всеми подробностями
var http = require('http');

var hostname = 'localhost';
var port = 3000;
var server = http.createServer(function (req, res) {
  console.log(req.headers);
  statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Hello World!<h1></body></html>');
});
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port));
});