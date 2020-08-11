const express = require('express');
const app = express();
const server = require('http').Server(app);
// const socketIO = require('socket.io')(server);

const cors = require('cors');
const bodyParser = require('body-parser');
const socket = require('./socket');
const chalk = require('chalk');
const db = require('./db');
const router = require('./network/router');
const config = require('./config') //Rename [config.example.js] To [config.js]
db(config.dbURL)

socket.connect(server);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
router(app);

app.use(`${config.publicRoute}`,express.static('public'))



// socketIO.on('connection', function(socket){
//     console.log('Nuevo cliente conectado');
//     socket.emit('mensaje','Bienvenido enviado con sockets');
// })

//app.listen(3000);
server.listen(3000,function(){
    console.log(chalk.blue(`[server.js] La aplicacion esta escuchando en el puerto ${config.serverPort}`));
    console.log(`Servidor iniciado en ${config.serverHost}:${config.serverPort}`);
})
