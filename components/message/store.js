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

async function getMessage(){
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add:  addMessage,
    list: getMessage
}