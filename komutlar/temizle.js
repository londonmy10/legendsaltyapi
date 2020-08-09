const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(":no_entry_sign: Lütfen Silinicek Mesaj Miktarını Yazın.! :no_entry_sign:");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`${message.member}, ${args[0]} Adet Mesaj Başarıyla Uzaya Fırlatıldı! 🚀`).then(msg => msg.delete(5000));
})
}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['sil'],
permLevel: 2
};

exports.help = {
name: 'sil',
kategori: 'yetkili',
description: 'Belirlenen miktarda mesajı siler.',
usage: 'sil'
};