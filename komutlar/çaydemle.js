const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  let çay = args.slice(0).join(' ');
        if (çay.length < 1) {
        return msg.reply('Peki kime çay demlemek istersin çocuk adam?');
            } else {
              msg.channel.send('Çayı koydun!')
              .then(nmsg => nmsg.edit('Çayı Koydun!'))
.then(nmsg => nmsg.edit('Çayı Koydun!'))
              .then(nmsg => nmsg.edit('Çayı Koydun'))
.then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
              .then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
.then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
              .then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
.then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
              .then(nmsg => nmsg.edit('🔥 Çayın Demleniyor! 🔥'))
.then(nmsg => nmsg.edit(`Müthiş! ${çay}, çayın demlendi, güzelce iç!`));

       
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['caydemle'],
  permLevel: 0
};

exports.help = {
  name: 'çaydemle',
  kategori: 'eğlence',
  description: 'İstediğiniz kişiye çay demlersiniz.',
  usage: 'çaydemle'
}; 