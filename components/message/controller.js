const chalk = require('chalk');
const store = require('./store');

function addMessage(chat,user, message){
console.log(`[ ${chalk.blue('controller Message')} ${chalk.yellow(' addMessage ')}]`    );    
    return new Promise((resolve, reject)=>{
        if(!chat || !user || !message)  {
             reject('Los datos son incorrectos')
             return
        }
        
        const fullMessage = {
            chat: chat,
            user: user,
            message : message,
            date : new Date()
        };
        
        store.add(fullMessage);
        resolve(fullMessage);
    })


    
}

function getMessages(filterChat){
    console.log(`[ ${chalk.blue('controller Message')} ${chalk.yellow(' addMessage ')}]`    );    
    return new Promise( (resolve, reject)=>{

        resolve(store.list(filterChat))
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