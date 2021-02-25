// npm init
//npm install express
//npm install ejs

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session') // paket som innehåler cookies
app.use('/public', express.static('assets')); // add allt som ligger i assets
app.use(cookieSession({ // används för att kriptera
    name: 'session',
    keys: ['veryimportantsecret', 'notsoimportantsecret']
}))
app.use(bodyParser.urlencoded())

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

  tasks = tasks.filter(task =>  task.id != request.params.id)
    // ряд выше - фильтруем объект, который нас интересует

  request.session.tasks = tasks;

  response.redirect('/');

  //console.log(tasks);
})

app.get('/edit/:id', (request, response) => {
  let tasks = request.session.tasks || []

  let current_tasks = tasks.filter(task =>  task.id == request.params.id)
  // ряд выше - фильтруем объект, который нас интересует
  
  console.log(current_tasks);

  response.end();

})

app.listen(3000)