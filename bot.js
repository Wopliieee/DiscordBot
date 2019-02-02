const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    
    if(message.content == 'Siema') {
        message.channel.sendMessage('Elko na rejonie');
    }
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
