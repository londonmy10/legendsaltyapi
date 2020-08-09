const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Hoşgeldin kanalı silmek için `Yönetici` yetkisine sahip olman gerek.')

    db.delete(`gcc_${message.guild.id}`)

 
  message.channel.send(`Hoşgeldin kanalı silindi.`)   
  message.react('727665294285209630')

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['resim-kanal-sil','gkanal-kapat','gkanal-sil'],
 permLevel: 3
};

exports.help = {
 name: 'gkanal-sil',
 kategori: 'yetkili',
 description: 'Resimli hoşgeldeldin güle güle kanalı ayarlar.',
 usage: 'gkanal'
};