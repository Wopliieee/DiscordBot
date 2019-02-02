const Discord = require('discord.js');
const bot = new Discord.Client();


const fs = require("fs");
bot.msgs = require ("./msgs.json");

const prefix = "tb!";
bot.on('message', (message) => {
    
    msg = message.content.toLowerCase();
    
    if(msg.startsWith ("siema")) {
        message.channel.sendMessage('Elko na rejonie');
    }
    
    if(msg.startsWith ("lutka")) {
        message.channel.send("No i mamy Gracjanka :)", {files: ["13925220_1745458395705484_7856054610386525895_n.jpg"]});
    }
        
    if(msg.startsWith ("napisz")) {
        editedmessage = message.content.slice (7);
            
        bot.msgs [message.author.username] = {
                message: message.content
        }
        fs.writeFile ("./msgs.json", JSON.stringify (bot.msgs, null, 4), err => {
                if (err) throw err;
        });
        
        let _message = bot.msgs[message.author.username].message;
        message.channel.send("Nie wiem po co ale... " + _message)
            
    }
    
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
