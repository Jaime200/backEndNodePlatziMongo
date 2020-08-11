const express = require('express');
const multer = require('multer');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + path.extname(file.originalname))
  }
})


const upload = multer({
  storage
})

router.get('/', function(req,res){
  
  const filterChat = req.query.chat || null;
  
    controller.getMessages(filterChat)
              .then( (messageList) =>{
                response.success(req, res,messageList, 200);
                })
              .catch(
                  err =>{
                response.error(req,res,'Unexpected Error', 500, err);      
                });
});

router.post('/', upload.single('file'), function(req,res){
    let body = req.body;    
    controller.addMessage(body.chat,body.user, body.message,req.file)
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

router.patch('/:id', function(req, res){
  let id = req.params.id;
  let message = req.body.message;
  controller.updateMessage(id, message)
            .then((data)=>{
              response.success(req, res, data, 200);
            } )
            .catch((err)=>{
              response.error(req,res, 'Error interno',500, err);
            });
  // res.send('Ok');

})

router.delete('/:id', function(req, res){
  let id = req.params.id;
  controller.deleteMessage(id)
            .then(
              ()=>{
                response.success(req,res,`Mensaje ${id} eliminado`, 200);
              }
            )
            .catch(
              (err)=>{
                response.error(req,res,'Error interno', 500 , err);
              }
            )
})


module.exports = router