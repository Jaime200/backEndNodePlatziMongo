const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const db = require('./db');

const router = require('./network/router');
db('mongodb+srv://jmunozV2:NIUfgdXGxv6mkMzy@notadeventa-mppfw.mongodb.net/chat?retryWrites=true&w=majority')
let app = express();
const server = require('http').Server(app);
const socketIO = require('socket.io')(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
router(app);

app.use('/app',express.static('public'))



socketIO.on('connection', function(socket){
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje','Bienvenido enviado con sockets');
})

//app.listen(3000);
server.listen(3000,function(){
    console.log(chalk.blue('[server.js] La aplicacion esta escuchando en el puerto 3000'));
    console.log('Servidor iniciado en http://localhost:3000');
})
