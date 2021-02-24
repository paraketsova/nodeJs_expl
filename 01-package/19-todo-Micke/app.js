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
  /*
  let tasks = [
    {
      id: 1,
      task: 'Tvätta kläder',
      status: false
    },
     {
      id: 2,
      task: 'Handla',
      status: false
    },
    {
      id: 3,
      task: 'plugga node.js',
      status: false
    }
  ];*/
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

  request.session.tasks = tasks
  //console.log(request.body)
  
  response.redirect('/')
})
app.listen(3000)