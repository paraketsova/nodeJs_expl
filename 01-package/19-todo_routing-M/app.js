const express = require(‘express’);
const cookieSession = require(‘cookie-session’);
const bodyParser = require(‘body-parser’);
const app = express();
app.set(‘trust proxy’, 1);
app.use(cookieSession({
    name: “session”,
    keys: [“secretsecret”, “kindasecret”]
}));
app.use(bodyParser.urlencoded());
app.get(‘/’, (request, response) => {
    response.render(‘index.ejs’, {list: request.session.todolist || []})
    response.end();
})
app.get(‘/remove/:id’, (request, response) => {
  const todolist = request.session.todolist;
  let id = request.params.id;
  const new_todolist = todolist.filter(item => item.id != id);
  request.session.todolist = new_todolist;
  response.redirect(‘/’);
});
app.post(‘/add-todo’, (request, response) => {
    const todolist = request.session.todolist || [];
    let new_id = 0;
    for(item of todolist) {
        if (item.id > new_id) {
            new_id = item.id;
        }
    }
    new_id ++;
    const list_item = {
        id: new_id,
        title: request.body.new_item
    }
    todolist.push(list_item);
    request.session.todolist = todolist;
    response.redirect(‘/’);
})
app.listen(3000);

