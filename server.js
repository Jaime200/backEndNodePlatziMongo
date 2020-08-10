const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const db = require('./db');

const router = require('./network/router');

db('mongodb+srv://jmunozV2:NIUfgdXGxv6mkMzy@notadeventa-mppfw.mongodb.net/chat?retryWrites=true&w=majority')

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
router(app);

app.use('/app',express.static('public'))

// app.use('/',function(req,res){
//     res.send('Hola');
//     res.end();
// })

app.listen(3000);
console.log(chalk.blue('[server.js] La aplicacion esta escuchando en el puerto 3000'));