const Model = require('./model');
const chalk = require('chalk');


function addChat (users){
    const myChat = new Model(users);
    return myChat.save();
    
}


function getChat(userId){
    return new Promise((resolve, reject)=>{
        let filter = {}
        if(userId){
            filter ={
                users: userId
            }
        }

        Model.find(filter)
             .populate({
                        path : 'users',
                        model: 'user'
                })
             .exec((err,populateData)=>{
                if(err) reject(err);
                else resolve(populateData);
            })
    })
    return 
}


module.exports = {
    add : addChat,
    list: getChat
}