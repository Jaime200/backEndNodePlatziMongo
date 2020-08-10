const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/',(req,res)=>{
    let name = req.body.name;

    controller.addUser(name)
    .then((data) => {
        response.success(req,res,data,201)
    }).catch((err) => {
        response.error(req,res,'Internal error',500,err);
    });

})

router.get('/', (req,res)=>{

    controller.getUser()
    .then((result) => {
        response.success(req,res,result,200)
    }).catch((err) => {
        response.error(req,res,'Internal error',500, err);
    });
})


module.exports = router;