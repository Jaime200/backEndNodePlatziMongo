const express = require('express');
const router = express.Router();
const response = require('../../network/response')

router.get('/', function(req,res){
    console.log(res.header);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    //res.send('Lista de mensajes');
    response.success(req, res,'Lista de mensajes');
    
});

router.post('/', function(req,res){
    console.log(req.body);
    console.log(req.query);   
    if(req.query.error == "ok"){
        response.error(req, res,'Error inesperado',500,'Es solo una simulacion de los errores');
    }else{
    // res.status(201).send({error:'', body: 'Creado correctamente' });
    response.success(req, res,'Creado correctamente',201);
    }
    
});

router.delete('/', function(req,res){
    console.log(req.body);
    console.log(req.query)
    res.status(201).send('Mensaje '+ req.body.text + ' eliminado');
    
});

module.exports = router