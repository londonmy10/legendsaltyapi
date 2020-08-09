const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');




exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        
        .setTitle(`${client.user.username} - `)
       .addField("Yapımcım ", " <@351695051962843136> ")
        .setDescription(`📥 **Botun Davet Linki** [TIKLA](https://discordapp.com/oauth2/authorize?client_id=659809412805820436&scope=bot&permissions=2146958847) \n🔶 **Destek Sunucusu** [TIKLA](https://discord.gg/EKjSRYn) \n:dart: **DBL** [TIKLA](https://discord.bots.gg/bots/659809412805820436)`) 
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}Davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`GREEN`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  kategori: 'genel',
  description: 'Davet Sistemi',
  usage: 'davet'
}; 