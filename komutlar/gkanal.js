const Discord = require('discord.js');
const db = require('quick.db');


exports.run = async (client, message, params, args) => {
   
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Hoşgeldin kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send('Hoşgeldin kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `&gkanal #kanal`')
    db.set(`gcc_${message.guild.id}`, message.mentions.channels.first().id)
  let i = await db.fetch(`gcc_${message.guild.id}`)
 
  message.channel.send(`Hoşgeldin kanalı, <#${i}> olarak ayarlandı.\nKapatmak &gkanal-kapat demeniz gerekir.`)   
  message.react('727665294285209630')

};

exports.conf = {
  kategori: 'ayarlar',
 aliases: ['resim-kanal','hg-bb','rgk','rgç','resimli-hoşgeldin-kanal','hoşgeldin-ayarla', 'welcome-set','gelen-giden','resim'],
 permLevel: 3
};

exports.help = {
 name: 'gkanal',
 kategori: 'yetkili',
 description: 'Resimli hoşgeldeldin güle güle kanalı ayarlar.',
 usage: 'gkanal'
};