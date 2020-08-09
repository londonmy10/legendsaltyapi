const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send("Komutu Kullanmak İçin Kick Members Yetkisine Sahip Olmalısın.")
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!user) return message.channel.send(`Kullanıcıyı Bulamıyorum`)
    let reason = message.content.split(" ").slice(2).join(" ");
    let muterole = message.guild.roles.find(`name`, "Muted");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor('Eylem: Susturma')
            .addField('Kullanıcı', `<@${user.id}>`)
            .addField('Yetkili', `${mod}`)
            .setColor('RANDOM')
            .setFooter('Legends Never Die Sustur Sistemi')
  message.channel.send(muteembed).then(msg => msg.delete(5000));


}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "sustur",
    kategori: 'yetkili',
    description: "Etiketlenen Kişiye Mute Atar",
    usage: "sustur [kullanıcı]"
}
