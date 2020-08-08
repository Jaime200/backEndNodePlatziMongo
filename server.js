const express = require('express');
let app = express();

app.use('/',function(req,res){
    res.send('Hola');

    res.end();
})


app.listen(3000);
console.log('La aplicacion esta escuchando en el puerto 3000');