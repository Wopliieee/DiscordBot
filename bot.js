const Discord = require('discord.js');
const bot = new Discord.Client();
        

bot.on('message', (message) => {
    
    msg = message.content.toLowerCase();
    
    if(msg.startsWith ("siema")) {
        message.channel.sendMessage('Elko na rejonie');
    }
    
    if(msg.startsWith ("lutka")) {
        message.channel.send("No i mamy Gracjanka :)", {files: ["13925220_1745458395705484_7856054610386525895_n.jpg"]});
    }
        
    if(msg.startsWith ("napisz za mnie" + zdanie)) {
        message.channel.send("Nie wiem po co ale... " + zdanie);
    }
    
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
