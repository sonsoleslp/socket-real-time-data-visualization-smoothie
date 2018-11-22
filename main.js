var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(8080, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});


io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
   /* setInterval(function(){
    	io.sockets.emit('messages', {avg: Math.random()});
    },1000)*/
});

app.use(express.static('public'));


app.post("/avg",function(req,res){
	console.log("avg")
	io.sockets.emit('messages', {avg: Math.random()});
	res.send(200)
})