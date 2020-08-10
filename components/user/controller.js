const chalk = require('chalk');
const store = require('./store');


function addUser(name){
    console.log(`[ ${chalk.blue('controller User')} ${chalk.yellow(' addUser ')}]`    );    
    if(!name){
        return Promise.reject('Invalid name')
    }

    let user = {
        name
    }

    return store.add(user);

    // return new Promise((resolve,reject)=>{
    //     store.add(user)
    // })
    

}

function getUser(){
    console.log(`[ ${chalk.blue('controller User')} ${chalk.yellow(' getUser ')}]`    );    
    return store.list();
}



module.exports = {
    addUser,
    getUser
}