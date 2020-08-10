const chalk = require('chalk');
const db = require('mongoose');

db.Promise = global.Promise;
async function connect(url){
    await db.connect(url,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true 
    })
    
    console.log(chalk.blue('[db.js] Base de datos conectada'));
}


module.exports =  connect;