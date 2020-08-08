const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router);

router.get('/message', function(req,res){
    console.log(res.header);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    res.send('Lista de mensajes');
    
});

router.post('/message', function(req,res){
    console.log(req.body);
    console.log(req.query);   
    res.status(201).send({
        error:'',
        body: 'Creado correctamente'
    });
    
});


router.delete('/message', function(req,res){
    console.log(req.body);
    console.log(req.query)
    res.status(201).send('Mensaje '+ req.body.text + ' eliminado');
    
});



// app.use('/',function(req,res){
//     res.send('Hola');
//     res.end();
// })

app.listen(3000);
console.log('La aplicacion esta escuchando en el puerto 3000');