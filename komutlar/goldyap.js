const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();


exports.run = (client, message, args) => {
 if(message.author.id != 351695051962843136) { return message.channel.send("Bu komut sahibime özdür.")}

  let şahıs = message.mentions.users.first();

  if (!şahıs) return message.channel.send('Verilecek şahsı taglayınız.')



  message.channel.send(`${şahıs} Artık Gold Üye!`)
db.set(`gold_${şahıs.id}`, 'acik')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4,
  kategori: 'yapımcı'
};
exports.help = {
  name: 'goldyap',
  kategori: 'yapımcı',
  description: 'Napcan?',
  usage: 'goldyap'
};
