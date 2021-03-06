const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');
const exec = require('child_process').exec;

app.get('/course.html', (req, res) => {
  fs.readFile("public/course.html", (err, buffer) => {
    if(err) {
      throw err;
    }
    exec('python /Users/hirokazu/Documents/workspace/whill_controller_py/src/course1.py');
    res.end(buffer.toString());
  });
});

app.use(express.static('public'));
app.use(express.static('sample'));

app.get('/change1', function(req, res){
  io.sockets.emit('server_to_client', {value : 1});
  res.send('1');
});

app.get('/change2', function(req, res){
  io.sockets.emit('server_to_client', {value : 2});
  res.send('2');
});
app.get('/change3', function(req, res){
  io.sockets.emit('server_to_client', {value : 3});
  res.send('3');
});
app.get('/change4', function(req, res){
  io.sockets.emit('server_to_client', {value : 4});
  res.send('4');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
