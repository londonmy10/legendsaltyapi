const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Ototag Komutları')
.setTimestamp()
.addField('&ototag','Sunucuya yeni katılan kişinin otomatik tagını ayarlarsınız.')
.addField('&ototagkanal','Otomatik tag log kanalını ayarlarsınız.')
.setFooter('LND Bot | Ototag Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'ototag-sistemi',
  kategori: 'sunucu',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
