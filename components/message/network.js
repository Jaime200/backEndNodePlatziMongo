const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');
router.get('/', function(req,res){
   
    controller.getMessages()
              .then( (messageList) =>{
                response.success(req, res,messageList, 200);
                })
              .catch(
                  err =>{
                response.error(req,res,'Unexpected Error', 500, e);      
                });
    
    
});

router.post('/', function(req,res){
    let body = req.body;    
    controller.addMessage(body.user, body.message)
              .then((fullMessage)=>{
                response.success(req, res,fullMessage,201);                
              })
              .catch( err =>{
                response.error(req, res,'Informacion invalida',400,err);
              });

    
});

router.delete('/', function(req,res){
    console.log(req.body);
    console.log(req.query)
    res.status(201).send('Mensaje '+ req.body.text + ' eliminado');
    
});

module.exports = router