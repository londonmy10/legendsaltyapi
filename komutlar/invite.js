const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
    if (message.author.id !== "351695051962843136") return;
    let sv = client.guilds.get(args[0])
    if (!sv) return message.channel.send(`374894897917853707`)
    sv.channels.random().createInvite().then(a => message.author.send(a.toString()))

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: 'yapımcı',
  permLevel: 5
};

exports.help = {
  name: 'invites',
  kategori: 'yapımcı',
  description: 'It is secret bro .p',
  usage: 'invite'
};