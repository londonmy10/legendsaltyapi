const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('Blue')
.setTitle('Seviye Komutları')
.setTimestamp()
.addField('&jail','Jaile atar.')
.addField('&jail-kanal ayarla #kanal','Jail kanalını ayarlar.')
.addField('&jail-rol ayarla @rol','Jail rolünü ayarlar.')
.addField('&jail-yetkilisi ayarla @rol','Jail yetkilisini ayarlar.')
.setFooter('LND Bot | Jail Sistemi.')
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
  name: 'jail-sistemi',
  kategori: 'sunucu',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
