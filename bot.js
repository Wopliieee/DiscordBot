const Discord = require('discord.js');
const bot = new Discord.Client();

x = 0

bot.on('message', (message) => {
    
    if(x == 0)
        message.channel.sendMessage('Obecny!');
        x = 1
    
    msg = message.content.toLowerCase();
    
    if(msg.startsWith ("siema")) {
        message.channel.sendMessage('Elko na rejonie');
    }
    
    if(msg.startsWith ("lutka")) {
        message.channel.send("No i mamy Gracjanka :)", {files: ["13925220_1745458395705484_7856054610386525895_n.jpg"]});
    }
    
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
