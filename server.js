const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

router.get('/message', function(req,res){
    res.send('Lista de mensajes');
    
});

router.post('/message', function(req,res){
    res.send('Mensaje añadido');
    
});


router.delete('/message', function(req,res){
    console.log(req.body);
    console.log(req.query);
    res.send('Mensaje '+ req.body.text + ' eliminado');
    
});



// app.use('/',function(req,res){
//     res.send('Hola');
//     res.end();
// })

app.listen(3000);
console.log('La aplicacion esta escuchando en el puerto 3000');