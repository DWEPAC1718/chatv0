var express = require('express');

var app = express();

// path usado para obter o caminho absoluto de 'content' 
// onde __dirname representa o caminho corrente
// porque os caminhos são sempre relativos ao caminho
// onde se inicia o processo do node 

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


app.listen(3000);
