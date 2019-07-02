var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')


server.listen(8080, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});


io.on('connection', function(socket) {
	console.log('Un cliente se ha conectado');
});

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.text())
 
// parse application/json
app.use(bodyParser.json())
app.post("/avg",function(req,res){
	io.sockets.emit('messages', {avg: req.body});
	res.send(200)
})