const express = require('express');
const bodyParser = require('body-parser');


const router = require('./network/router');
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
console.log('La aplicacion esta escuchando en el puerto 3000');