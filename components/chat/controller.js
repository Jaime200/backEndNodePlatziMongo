const chalk = require('chalk');
const store = require('./store');

function addChat(users  ){
    console.log(`[ ${chalk.blue('controller chat')} ${chalk.yellow(' chat ')}]`    );    
    
        console.log(users);
        if(!users || !Array.isArray(users)) return Promise.reject('Invalid users list')

        const chat = {
            "users": users
        }
    return store.add(chat);
    
}

function getChat(userId){
    console.log(`[ ${chalk.blue('controller chat')} ${chalk.yellow(' chat ')}]`    );    
    return store.list(userId);
}



module.exports = {
     addChat,
     getChat
}