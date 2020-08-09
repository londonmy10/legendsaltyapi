const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
    const data = await db.fetch(`snipe.id.${message.guild.id}`)
    if(!data) {
    const snipe2 = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription(`Hi� mesaj silinmemis.`)
.setColor(`#f3c7e1`)
    message.channel.send({embed: snipe2});
          } else {
  let kullanici = client.users.get(data);
  const data2 = await db.fetch(`snipe.mesaj.${message.guild.id}`)
  const snipe = new Discord.RichEmbed()
  .setAuthor(kullanici.username, kullanici.avatarURL)
  .setDescription(`En son silinen mesaj: ` + data2)
.setColor(`#f3c7e1`)
  message.channel.send(snipe) }
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0
}

exports.help = {
 name: 'snipe',
 description: `Son silinen mesaji size g�sterir.`,
 usage: 'snipe',
 kategori: 'eglence',
 permLvl: '**HERKES KULLANABILIR**'
};