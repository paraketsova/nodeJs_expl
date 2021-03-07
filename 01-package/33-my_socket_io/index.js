const app = require('express')(); //Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).
const http = require('http').createServer(app);

const io = require('socket.io')(http);//* initialize a new instance of socket.io by passing the http (the HTTP server) object. 

app.get('/', (req, res) => { //We define a route handler / that gets called when we hit our website home.
  res.sendFile(__dirname + '/html/index.html');//refactor our route handler uses sendFile with HTML file
});

io.on('connection', (socket) => { //* (add after  add html form and install socket il modul)listen on the connection event for incoming sockets and log it to the console.
  console.log('a user connected'); // now if refresh the webpage you should see the console print “a user connected”.
   
  socket.on('disconnect', () => {
    console.log('user disconnected');//Each socket also fires a special disconnect event
  });
});



http.listen(3000, () => { //We make the http server listen on port 3000.
  console.log('listening on *:3000');
}); 

