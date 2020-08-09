const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let darkcodee = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Kara listeye almak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: darkcodee})
    return;
  };
  
  if (db.has(`karalist_${user.id}`) === true) return message.reply("Bu kullanıcı zaten kara listede!");
  
  db.set(`karalist_${user.id}`, "aktif")
  
  let darkcode = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${user.tag} adlı kullanıcı başarıyla kara listeye alındı!`)
    message.channel.send({embed: darkcode})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 5,
    kategori: "yapımcı"
};

exports.help = {
  name: "karaliste",
  kategori: 'yapımcı',
  description: "Belirtilen kullancıyı kara listeye alır!",
  usage: "karaliste <kullanıcı ID>"
};