const express = require('express');
const app = express();

app.get('/', (request, response) => {
  response.end('<h1>Hello</h1>');
})

app.listen(3000);
