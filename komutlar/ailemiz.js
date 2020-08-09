const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.id != 351695051962843136) { return message.channel.send("Bu komut sahibime özdür.")}
  const guildArray = bot.guilds.array()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,25);
    for (const guild of guilds) {
      embed.addField(`**${guild.name}** - ÜYE SAYISI : **${guild.memberCount}**`, guild.id);
      embed.setColor('#D97634')
      embed.setTitle('Ailemiz')
      embed.setDescription(`Teşekkürler Botumuz **${bot.guilds.size}** Sunucuda Ekli`)
    }
    message.channel.send({embed: embed});
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s', 'konum', 'sohbet', 'ask'],
  permLevel: 4
};

exports.help = {
  name: "ailemiz",
  kategori: 'yapımcı',
  description: "Shows all the servers the bot is in.",
  usage: "ailemiz"
};