const Discord = require('discord.js')
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');

exports.run = async (client, message, args) => {
  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        ping: await client.shard.fetchClientValues('ping'),
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let darkcode = new Discord.RichEmbed()
    .setTitle(client.user.username + " shard bilgisi")
    .setFooter(`Bu Sunucunun Shardı: ${client.shard.id+1} `)
    .setColor('RED')
    for(i=0;i<client.shard.count;i++) {
        shardembed.addField(`Shard ${i+1} | Ping: ${Math.round(shardinfo.ping[i])}ms `, ` ${shardinfo.server_count[i]} Sunucu ve ${shardinfo.user_count[i]} Kullanıcı\nUptime ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} `)
    }

  
    message.channel.send(darkcode)

  }
//DarkCode

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "Info",
};

exports.help = {
  kategori: 'yapımcı',
  name: 'shard-bilgi',
enname: 'shard-info'

}; 