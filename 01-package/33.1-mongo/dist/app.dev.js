"use strict";

var express = require('express');

var app = express();

var monk = require('monk');

var db = monk('localhost:27017/nodetest1');
app.use(function (req, res, next) {
  req.db = db;
  next();
});
app.use(express.urlencoded({
  extended: true
}));
app.get("/", function (req, res) {
  var recipies = req.db.get('recipies'); //имя коллекции в ДБ

  recipies.find().then(function (data) {
    res.render("index.ejs", {
      recipies: data
    });
  });
});
app.post("/addpost", function (req, res) {
  var recipies = req.db.get('recipies'); // console.log(req.body);

  recipies.insert(req.body);
  res.redirect('/');
});
app.get("/edit/:id", function (req, res) {
  var recipies = req.db.get('recipies');
  recipies.find({
    _id: req.params.id
  }).then(function (data) {
    if (1 == data.length) {
      res.render("edit.ejs", data[0]);
    } else {
      res.redirect('/');
    }
  });
}); // app.post("/savededit", (req, res) => {
// })

app.get("/delete/:id", function (req, res) {
  var recipies = req.db.get('recipies');
  recipies.remove({
    _id: req.params.id
  });
  res.redirect('/');
});
app.listen(3000);