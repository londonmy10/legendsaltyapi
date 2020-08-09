const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.RichEmbed()
       .setTitle(`<a:banned:679718784524746848> Banlanan Kullanıcı Bulunamadı <a:banned:679718784524746848>`)
       .setColor("BLUE");
  message.channel.send({embed}).then(msg => msg.delete(5000));
     }
     else
     {
       const embed = new Discord.RichEmbed()
       .setTitle("<a:banned:679718784524746848> Ban Listesi: Sunucudan Banlananlar.")
       .setColor("RED");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
    message.channel.send({embed}).then(msg => msg.delete(5000));
     }
   });
 }
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlılar","banliste","ban liste"],
  permLevel: 0
};
module.exports.help = {
  name: 'banlist',
  kategori: 'yetkili',
  description: 'Sunucundan Banlanan üyeleri gösterir.',
  usage: 'banlananlar'
};
