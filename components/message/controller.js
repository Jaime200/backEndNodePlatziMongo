const chalk = require('chalk');

function addMessage(user, message){
console.log(
    `[ ${chalk.blue('controller Message')} ${chalk.yellow(' addMessage ')}]`    );    
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
        
        console.log(fullMessage);
        resolve(fullMessage);
    })

    
}




module.exports = {
    addMessage
}