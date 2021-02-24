var express = require('express');
var bodyParser = require('body-parser');
var cores = require ('cors');

var app = express(); //мы создаём запрос к серверу ??

app.use(bodyParser()); //мы конфигурируем запрос
app.use(cors());

app.set('views', path.join(__dirname, 'views')); // здесь мы производим конкатинацию текущей директории и вьюз
app.set('view engine', 'ejs'); //стандартно указываем установку движка ejs

app.get('/', function(request, response) {
  response.render('index'); //указываем имя ejs файла, при этом не указывая его расширения!!!
});

app.listen(3000, function() { // здесь мы пишем что работаем на локалхосте сейчас - какой порт мы слушаем.
  console.log("heard on 3000 with me");
});