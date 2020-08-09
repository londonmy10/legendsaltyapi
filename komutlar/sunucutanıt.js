﻿const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
exports.run = async (client, message, args) => {

  let cooldown = 8.64e7,
    amount = Math.floor(Math.random() * 1000) + 4000;

  let lastDaily = await db.fetch(`gunluk_${message.guild.id}`);
  if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastDaily));

    const yagiz = new Discord.RichEmbed()
      .setDescription(
        `**${message.author.username} **Bu Komutu Sadece **24** Saatte Bir Kullanabilirsin `
      )
      .setColor(0x00ffff);
    message.channel.send(yagiz);
  } else {
    const chypercode = new Discord.RichEmbed()
      .setTitle("Başarılı")
      .setDescription(
        "**Sunucunuz Başarıyla** [Burada](https://discord.gg/EKjSRYn) **Tanıtıldı.**\n**24 Saat Sonra Sunucunuzu Tekrar Tanıtabilirsiniz**"
      )
      .setColor("RED");
    message.channel.sendEmbed(chypercode);
    message.channel.createInvite({ maxAge: 0 }).then(invite => {
      
      const chyper = new Discord.RichEmbed()
        .addField(`Tanıtılan Sunucunun Sahibi`, message.author.tag, true)
        .addField(`Tanıtılan Sunucunun İsmi`, message.guild.name, true)
        .addField(`Tanıtılan Sunucudaki Kişi Sayısı`, message.guild.members.size,
          true
        )
        .addField(`Tanıtılan Sunucu Davet Linki`, invite.url, true)
        .setColor("RANDOM")

      client.channels.get('727784226778513408').send(chyper);

      db.set(`gunluk_${message.guild.id}`, Date.now());
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-tanıt"],
  permLevel: 0
};

exports.help = {
  name: "sunucutanıt",
  kategori:'yetkili',
  description: "Sunucunuzu Botun destek sunucusunda tanıtır",
  usage: "sunucutanıt"
};