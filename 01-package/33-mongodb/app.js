const { request } = require('express')
const express = require('express')
const app = express()
const monk = require('monk')
const db = monk('localhost:27017/nodetest1')  // från mongoDB compass host: ---
app.use((request, response, next) => {
  request.db = db
  next()
})
app.get('/', (request, response) => {
  const users = request.db.get('user');
  users
      .find()
      .then(data => {
          console.log(data)
          response.render('userlist.ejs', {users: data})
      });
});

app.post('/adduser', (request, response) => {
  const users = request.db.get('user');
  users.insert(request.body);
  response.redirect('/');
});


app.listen(3000);