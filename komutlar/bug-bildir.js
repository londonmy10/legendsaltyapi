const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("734379468340068392")//bug repot kanal id
let embed = new Discord.RichEmbed()
.setTitle("Bug Report")
.setThumbnail("https://cdn.discordapp.com/avatars/659809412805820436/bf0ec03eed3a5f6ef13c41996a993391.png?size=2048")
.addField("Bug", bug)
.addField("Report Eden", user, true)
.addField("Sunucu", guild, true)
.addField("Sunucu ID", guildid, true)
.addField("Kanal", kanal, true)
.setColor("#f49542")

message.channel.send("✅  **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'bug-bildir'
}