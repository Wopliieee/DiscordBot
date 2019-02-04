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
        message.channel.send("Po nazwisku to po pysku! Ale jak coś tak wygląda Gracjanek :)", {files: ["gracjan.jpg"]});
    }
    if(msg.startsWith ("romanek")) {
        message.channel.send("Bardzo miły chłopak i tak On wygląda :)", {files: ["Roman.PNG"]});
    }
    if(msg.startsWith ("fabianek")) {
        message.channel.send("Fabian zawsze chętnie z tobą porozmawia :)", {files: ["fabian.jpg"]});
    }
    if(msg.startsWith ("julcia")) {
        message.channel.send("Jedyna kobita na naszym Discordzie! Miła i ładna. :)", {files: ["julcia.PNG"]});
    }
    if(msg.startsWith ("kamilek")) {
        message.channel.send("Kozak i chociaż nikogo nie zna to kogoś tam sobie pozna. :)", {files: ["kamilek.PNG"]});
    }
    if(msg.startsWith ("konradzik")) {
        message.channel.send("Konradzik lubi wszystkich i bardzo przyjemny chłopak. :)", {files: ["konrad.PNG"]});
    }
    if(msg.startsWith ("kubuś")) {
        message.channel.send("Kubuś może i powyzywa enemy i mówi że są rudymi kurwami, ale jest miły. :)", {files: ["kuba.PNG"]});
    }
    if(msg.startsWith ("mateuszek")) {
        message.channel.send("Kto to?", {files: ["mateusz.png"]});
    }
    if(msg.startsWith ("oskarek")) {
        message.channel.send("Stary i już na emeryturze ale jest spoko ziomkiem. :)", {files: ["oskar.PNG"]});
    }
    if(msg.startsWith ("szyszka")) {
        message.channel.send("Czasem wbije na discorda. :)", {files: ["szyszka.PNG"]});
    }
    if(msg.startsWith ("wiktorek")) {
        message.channel.send("Prezes naszego klub. :)", {files: ["wiktor.PNG"]});
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
        message.channel.send("Umiem dużo rzeczy ;) Np.: co umiesz, siema, jak wyglądasz, napisz[zdanie], lutka, romanek, fabianek, julcia, kamilek, konradzik, kubuś, mateuszek, oskarek, szyszka, wiktorek");
    }
    
});

// THIS  MUST  BE  THIS  WAY
bot.login(process.env.BOT_TOKEN);
