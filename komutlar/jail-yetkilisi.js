const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, args) => {
  
   var başarılı = ['**İŞTE BU!**', '**SÜPER!** <a:guvenli:727665294285209630>', '**NASIL YAPTIN BUNU?!** <a:guvenli:727665294285209630>', '**MÜKEMMEL!** <a:guvenli:727665294285209630>', '**SEVDİM BUNU!** <a:guvenli:727665294285209630>', '**ŞİMDİ OLDU!** <a:guvenli:727665294285209630>'];
   var x = başarılı[Math.floor(Math.random() * başarılı.length)];

   var başarısız = ['**TÜH!** <a:tehlikeli:727665292058296402>', '**OLMADI BU!** <a:tehlikeli:727665292058296402>', '**HAY AKSİ!** <a:tehlikeli:727665292058296402>', '**HADİ ORADAN!** <a:tehlikeli:727665292058296402>', '**OLMADI YA!** <a:tehlikeli:727665292058296402>', '**BÖYLE OLMAZ?!** <a:tehlikeli:727665292058296402>', '**HADİ YA!** <a:tehlikeli:727665292058296402>'];
   var x2 = başarısız[Math.floor(Math.random() * başarısız.length)];
  
  
if (!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`**${ayarlar.prefix}jail-yetkilisi ayarla/sıfırla** isimli komutu kullanabilmek için \`SUNUCUYU YÖNET\` yetkisine sahip olman gerekiyor.`)
if (!args[0]) return message.reply(`Sistemi kullanabilmek için, &jail-yetkilisi ayarla/sıfırla @rol yazmalısın.`)
   
  
  if (args[0] == 'ayarla') {
  
  let yetkilirol = message.mentions.roles.first() || message.guild.roles.find(c => c.name === args[1].join(' '))
  if (!yetkilirol) return message.channel.send(x2 + ` Bir rol etiketle.`)
  
  db.set(`jailyetkilisi_${message.guild.id}`, yetkilirol.id)
  message.channel.send(x + ` Jail yetkilisi ${yetkilirol} olarak ayarlandı.`)
  } 
  

  if (args[0] == 'sıfırla') {
    db.delete(`jailyetkilisi_${message.guild.id}`)
    message.channel.send(x + ` Jail yetkilisi başarıyla sıfırlandı.`)
  }
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['jailyetkilisi'],
 permLevel: 0
};

exports.help = {
 name: 'jail-yetkilisi',
 description: 'Hangi role sahip kişilerin jaile atabileceğini ayarlarsınız.',
 usage: 'jail-yetkilisi ayarla/sıfırla @rol',
 kategori: 'yetkili',
 permLvl: '**SUNUCUYU YÖNET**'
};