"use strict";

var express = require('express');

var app = express();
bodyParser = require('body-parser');
app.use(express.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  res.render("index.ejs");
});
app.post("/addpost", function (req, res) {
  console.log(req.body);
  req.redirect('/');
});
app.listen(3000);