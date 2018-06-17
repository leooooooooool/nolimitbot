const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = "!";


bot.on('ready', function() {
    bot.user.setActivity('rien')
    console.log("I'm Ready !");
});




bot.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "logs").send(` ${member} a reçu le role [Nouveaux]`)
    var role = member.guild.roles.find('name', '[Nouveaux]');
    member.addRole(role)
    
});



bot.login(process.env.TOKEN)
