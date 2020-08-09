const db = require("quick.db");
const Discord = require("discord.js");

exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.RichEmbed()
  .setColor('#FF0000')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Hata!')
  .setDescription(`<a:hgg:729628053789081610>AFK olmak için bir sebep belirtin.<a:hgg:729628053789081610>`)
  .setFooter('Legends Never Die AFK Sistemi')
  if(!REASON) return message.channel.send(embed).then(msg => msg.delete(5000))
 
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  const afk = new Discord.RichEmbed()
  .setColor('#006400')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTitle('Başarılı!')
  .setDescription(`<a:tac:729628071417741354>Başarıyla afk moduna girdiniz.<a:tac:729628071417741354>`)
  .setFooter('Legends Never Die AFK Sistemi')
  message.channel.send(afk).then(msg => msg.delete(5000));
 
}; 

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'afk',
  kategori: 'genel',
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};