"use strict";

var app = require('express')(); //Express initializes app to be a function handler that you can supply to an HTTP server (as seen in line 2).


var http = require('http').createServer(app);

var io = require('socket.io')(http); //* initialize a new instance of socket.io by passing the http (the HTTP server) object. 


app.get('/', function (req, res) {
  //We define a route handler / that gets called when we hit our website home.
  res.sendFile(__dirname + '/html/index.html'); //refactor our route handler uses sendFile with HTML file
});
io.on('connection', function (socket) {
  //* (add after  add html form and install socket il modul)listen on the connection event for incoming sockets and log it to the console.
  console.log('a user connected'); // now if refresh the webpage you should see the console print “a user connected”.

  socket.on('disconnect', function () {
    console.log('user disconnected'); //Each socket also fires a special disconnect event
  });
});
io.on('connection', function (socket) {
  //we print out the chat message event
  socket.on('chat message', function (msg) {
    console.log('message: ' + msg); //io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

    io.emit('chat message', msg); //for the sake of simplicity we’ll send the message to everyone, including the sender.
  });
});
/* 
io.on('connection', (socket) => {//If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket
  socket.broadcast.emit('hi');
}); */

http.listen(3000, function () {
  //We make the http server listen on port 3000.
  console.log('listening on *:3000');
});