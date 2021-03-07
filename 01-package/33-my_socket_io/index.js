const app = require('express')(); //Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
const http = require('http').createServer(app);

app.get('/', (req, res) => { //We define a route handler / that gets called when we hit our website home.
  res.send('<h1>Hej ponka!</h1>');
});

http.listen(3000, () => { //We make the http server listen on port 3000.
  console.log('listening on *:3000');
}); 
