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

function getMessages(filterUser){
    console.log(`[ ${chalk.blue('controller Message')} ${chalk.yellow(' addMessage ')}]`    );    
    return new Promise( (resolve, reject)=>{

        resolve(store.list(filterUser))
    });
}


function updateMessage(id, message){
    return new Promise(async (resolve, reject)=>{
        

        if(!id || !message){ 
            reject('Invalid data')
            return false
        }
        const result = await store.updateText(id, message);
        resolve(result);
    })
}

function deleteMessage(id){
    return new Promise( (resolve, reject)=>{
        if(!id){
            reject('Invalid Id');
            return false;
        }

        store.remove(id)
                    .then((result) => {
                        resolve();
                    })
                    .catch((err) =>{
                        reject(err)
                    });

    })
}


module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}