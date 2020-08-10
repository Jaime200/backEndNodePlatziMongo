const db = require('mongoose');
const chalk = require('chalk');
const Model = require('./model');
db.Promise = global.Promise;
db.connect('mongodb+srv://jmunozV2:NIUfgdXGxv6mkMzy@notadeventa-mppfw.mongodb.net/chat?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})

console.log(chalk.blue('Base de datos conectada'));


function addMessage(message){
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage(filterUser){
    let filter = {}
    if(filterUser !== null)
    filter = { user : filterUser }
    
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message){
    
    const foundMessage = await Model.findOne({_id: id});
    foundMessage.message = message
    const newMessage = await foundMessage.save();

    return newMessage
}


module.exports = {
    add:  addMessage,
    list: getMessage,
    updateText: updateText
}