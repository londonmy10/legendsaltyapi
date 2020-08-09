const Discord = require('discord.js');

exports.run = function (client, message, args) {
    let roman = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Lütfen Birisini Etiketle')
    let yazi = args[1]
    if (!yazi) return message.reply('Lütfen Yazini Yaz')
    message.delete()
    message.channel.createWebhook(roman.username, roman.avatarURL)
    .then(webhook => webhook.edit(roman.username, roman.avatarURL)
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(yazi)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'fakemesaj',
    kategori: 'genel',
    description: 'fakemesaj',
    usage: 'fakemesaj'
};