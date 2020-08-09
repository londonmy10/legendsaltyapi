const Discord = require('discord.js')
const data = require('quick.db')

exports.run = async (client, message, args) => {
let prefix = '&'// botunuzun prefixi
  
 let kategoriler = ['genel', 'yetkili', 'eğlence', 'nsfw', 'sunucu', 'yapımcı']
 if(!args[0]) {
 const kategori = new Discord.RichEmbed()
 .setTitle('Legends Never Die | Yardım Menüsü', client.user.avatarURL)
 .setThumbnail(client.user.avatarURL)
 .setColor('GOLD')
 .addField("Linkler", `**Destek Sunucusu :** [Tıkla](https://discord.gg/EKjSRYn)\n**Bot Davet :** [Tıkla](https://discordapp.com/oauth2/authorize?client_id=659809412805820436&scope=bot&permissions=2146958847)\n**DBL :** [Tıkla](https://discord.bots.gg/bots/659809412805820436)`)
 .setDescription(`Örn. Kullanım : **&yardım genel**\nÇalışmayan Komutları **&bug-bildir** yaparak bize bildirin. \n\n Aşağıda ki kategorilerden birini yazmalısın:\n\n${kategoriler.join(', ')}`)
 .addField("» Sponsor", `Botumuza Sponsor Aranmaktadır.`)
 .setImage("https://cdn.discordapp.com/attachments/659811865341329459/738808800248856747/LegendsNeverDie.png")
message.channel.send(kategori)}
else{
 
 if(!kategoriler.includes(args[0])) return message.channel.send(`**${args[0]}**, isminde bir kategorim yok.`)
 
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setTimestamp()
  .setColor('GOLD')
  .setFooter(`${client.user.username}: ${client.commands.filter(c => c.help.kategori === args[0]).size} komut bulunuyor.`)
  .setDescription(`**${args[0]}** komutları:\n\n${prefix}${client.commands.filter(c => c.help.kategori === args[0]).map(c => c.help.name).join(', '+ prefix).replace(`${prefix}yardım`, '')}`)
message.channel.send({embed})
}
} 
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0,
}

exports.help = {
name: 'yardım'
};