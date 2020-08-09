const chalk = require('chalk');
const store = require('./store');

function addMessage(user, message){
console.log(`[ ${chalk.blue('controller Message')} ${chalk.yellow(' addMessage ')}]`    );    
    return new Promise((resolve, reject)=>{
        if(!user || !message)  {
             reject('Los datos son incorrectos')
             return
        }
        
        const fullMessage = {
            user: user,
            message : message,
            date : new Date()
        };
        
        store.add(fullMessage);
        resolve(fullMessage);
    })


    
}

function getMessages(){
    console.log(`[ ${chalk.blue('controller Message')} ${chalk.yellow(' addMessage ')}]`    );    
    return new Promise( (resolve, reject)=>{
        resolve(store.list())
    });
}




module.exports = {
    addMessage,
    getMessages
}