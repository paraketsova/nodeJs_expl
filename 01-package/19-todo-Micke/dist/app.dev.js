"use strict";

// npm init
//npm install express
//npm install ejs
var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var cookieSession = require('cookie-session'); // paket som innehåler cookies


app.use('/public', express["static"]('assets')); // add allt som ligger i assets

app.use(cookieSession({
  // används för att kriptera
  name: 'session',
  keys: ['veryimportantsecret', 'notsoimportantsecret']
}));
app.use(bodyParser.urlencoded());
app.get('/', function (request, response) {
  var tasks = request.session.tasks || []; // egensk som finns i req.session.tasks spara i variabel, om det finns inte spara []

  response.render('index.ejs', {
    tasks: tasks
  });
});
app.post('/add', function (request, response) {
  var tasks = request.session.tasks || [];
  var max_value = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tasks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var task = _step.value;

      if (task.id > max_value) {
        max_value = task.id;
      }
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

  max_value++;
  tasks.push({
    id: max_value,
    task: request.body.todo_item,
    done: false
  });
  request.session.tasks = tasks; //console.log(request.body)
  // request.session = null; - мы можем написать это
  //request.session.tasks = []; - или это, но вместо этого пишем  app.get('delete... ): let tasks = request.session.tasks || []

  response.redirect('/');
});
app.get('/delete/:id', function (request, response) {
  //вводим переменную, которая будет указываться в линке при удалении записи - конкретный айди
  var tasks = request.session.tasks || [];
  tasks = tasks.filter(function (task) {
    return task.id != request.params.id;
  }); // ряд выше - фильтруем объект, который нас интересует

  request.session.tasks = tasks;
  response.redirect('/'); //console.log(tasks);
});
app.get('/edit/:id', function (request, response) {
  var tasks = request.session.tasks || [];
  var current_tasks = tasks.filter(function (task) {
    return task.id == request.params.id;
  }); // ряд выше - фильтруем объект, который нас интересует

  var view_task;

  if (current_tasks.length == 1) {
    // этот ифсатсер - своеобразный фельхантеринг. Если айди для несуществующего таскА, то нас отправит опять "на главную"
    view_task = current_tasks[0];
  } else {
    response.redirect('/');
  } //console.log(view_task);


  response.render('edit.ejs', view_task); //т.о. здесь мы рендерим объект (наш таск) с тремия свойствами: айди, телом таска и показателем "дан" (тру или фолс)
});
app.post('/edit/:id', function (request, response) {
  console.log(request.body);
});
app.listen(3000);