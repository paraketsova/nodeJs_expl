const express = require('express');
const app = express();
bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index.ejs")
})

app.post("/addpost", (req, res) => {
  console.log(req.body);
  req.redirect('/');
})

app.listen(3000);