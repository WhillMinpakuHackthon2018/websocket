var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(express.static('public'));
app.use(express.static('sample'));
app.get('/change1', function(req, res){
  io.sockets.emit('server_to_client', {value : 1});
  res.send('1');
});
app.get('/change2', function(req, res){
  io.sockets.emit('server_to_client', {value : 2});
  res.send('1');
});
app.get('/change3', function(req, res){
  io.sockets.emit('server_to_client', {value : 3});
  res.send('1');
});


io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
