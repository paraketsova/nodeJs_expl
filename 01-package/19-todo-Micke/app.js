// npm init
//npm install express
//npm install ejs

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session'); // paket som innehåler cookies
const { request } = require('express');
app.use('/public', express.static('assets')); // add allt som ligger i assets
app.use(cookieSession({ // används för att kriptera
    name: 'session',
    keys: ['veryimportantsecret', 'notsoimportantsecret']
}))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (request, response) => {
  let tasks = request.session.tasks || []  // egensk som finns i req.session.tasks spara i variabel, om det finns inte spara []
  
  response.render('index.ejs', { tasks: tasks })
})
app.post('/add', (request, response) => {
  let tasks = request.session.tasks || [] 

  let max_value = 0
  for (let task of tasks) {
      if (task.id > max_value) {
          max_value = task.id
      }
  }
  max_value++

  tasks.push({
      id: max_value,
      task: request.body.todo_item,
      done: false
  })

  request.session.tasks = tasks;
  //console.log(request.body)
  // request.session = null; - мы можем написать это
  //request.session.tasks = []; - или это, но вместо этого пишем  app.get('delete... ): let tasks = request.session.tasks || []
  
  response.redirect('/')
})

app.get('/delete/:id', (request, response) => { //вводим переменную, которая будет указываться в линке при удалении записи - конкретный айди
  let tasks = request.session.tasks || []

  /* tasks = tasks.filter(task =>  task.id != request.params.id)
    // ряд выше - фильтруем объект, который нас интересует

  request.session.tasks = tasks; */

  request.session.tasks = tasks.filter(task => {
    return task.id != request.params.id
  })

  response.redirect('/');

  //console.log(tasks);
})

app.get('/edit/:id', (request, response) => {
  let tasks = request.session.tasks || []

  let current_tasks = tasks.filter(task =>  task.id == request.params.id)
  // ряд выше - фильтруем объект, который нас интересует

  let view_task;
  if (current_tasks.length == 1) { // этот ифсатсер - своеобразный фельхантеринг. Если айди для несуществующего таскА, то нас отправит опять "на главную"
      view_task = current_tasks[0];
  } else {
    response.redirect('/')
  }
  //console.log(view_task);

  response.render('edit.ejs', view_task); //т.о. здесь мы рендерим объект (наш таск) с тремя свойствами: айди, телом таска и показателем "дан" (тру или фолс)

})

app.post('/edit/:id', (request, response) => {
  let tasks = request.session.tasks || []

  for (let task of tasks) { //..обновляем значение таска в основном списке после его редактирования==положить новое значение в нужную строку списка
    
    if (task.id == request.params.id) {
        task.task = request.body.todo_item // здесь обновляем отдельный таск
      }
  }

  //request.session.task = tasks; // ЭТО НЕ НУЖНО - здесь обновляем весь список таксков с новым значением таска ??
  
  response.redirect('/');
 /*  console.log(request.params.id); //  номер в тудушке
  console.log(request.body); // тело-строка таска
  response.end() */
})

app.listen(3000)