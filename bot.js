const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require("fs");
bot.msgs = require ("./msgs.json");

bot.on('message', (message) => {
    
    msg = message.content.toLowerCase();
    
    if(msg.startsWith ("siema")) {
        message.reply ('Siemanko!');
    }
    
    if(msg.startsWith ("jak wyglądasz")) {
        message.channel.send ('A tak wyglądam :) https://github.com/Wopliieee/DiscordBot/blob/master/bot.js');
    }
    
    if(msg.startsWith ("lutka")) {
        message.channel.send("Po nazwisku to po pysku! Ale jak coś tak wygląda Gracjanek :)", {files: ["13925220_1745458395705484_7856054610386525895_n.jpg"]});
    }
    if(msg.startsWith ("debil")) {
        message.channel.send("Po nazwisku to po pysku! Ale jak coś tak wygląda Gracjanek :)", {files: ["13925220_1745458395705484_7856054610386525895_n.jpg"]});
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
        message.channel.send("Nie wiem po co ale... " + _message);
            
    }
    
    if(msg.startsWith ("co umiesz")){
        message.channel.send("Umiem dużo rzeczy ;) Np.: co umiesz, siema, jak wyglądasz, lutka, napisz[zdanie]");
    }
    
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
