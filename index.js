var express = require('express');


// usar um servidor http
var http = require('http');
var socketio = require("socket.io");



var app = express();

// path usado para obter o caminho absoluto de 'content' 
// onde __dirname representa o caminho corrente
// porque os caminhos são sempre relativos ao caminho
// onde se inicia o processo do node 

var server = http.createServer(app);
var io = socketio.listen(server);

var path = require('path');
app.use(express.static(path.resolve(__dirname, 'content')));

// ou uma forma mais simples usando o caminho relativos
// app.use(express.static('content'));


// routes
app.get("/", function (req,res) {
	res.send("<h1>Olá Ricardo Poder da Mente Abreu</h1>")
});

app.get("/ola", function (req,res) {
	res.send("<h1>Olá Domingos Escuteiro Gomes</h1>")
});

server.listen(3000);
