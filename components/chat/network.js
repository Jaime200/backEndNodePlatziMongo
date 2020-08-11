const express = require('express');
const router = express.Router();
const response = require('../../network/response')
const controller = require('./controller');


router.get('/:userId',(req,res)=>{
    const userId = req.params.userId;

    controller.getChat(userId)
                .then((result) => {
                    response.success(req,res,result,200)
                })
                .catch((err) => {
                    response.error(req,res,'Internal error',500,err)
                });
})


router.post('/',(req,res)=>{
    
    const users = req.body.users;
    controller.addChat(users)
                .then((result) => {
                    response.success(req,res,result,200)
                })
                .catch((err) => {
                    response.error(req,res,'Internal error',500,err)
                });
})






module.exports = router;