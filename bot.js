const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    if(message.content == 'Siema') {
        message.channel.sendMessage('Elko na rejonie');
    }
    
    if(message.content.startsWith ("Lutka", "lutka")) {
        message.channel.send("No i mamy Gracjanka :)", {files: ["13925220_1745458395705484_7856054610386525895_n.jpg"]});
    }
    
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
