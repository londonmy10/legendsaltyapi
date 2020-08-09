const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');


const db = require('quick.db')

exports.run = async (client, message, args, ayarlar) => {
          moment.locale("tr")

    let user = message.mentions.users.first() || client.users.get(args[0]) || (args.length > 0 ? client.users.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) ||  message.author;
    
  const Durum = user.presence.status;
            const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
            const durm = (Durum == "online" ? (client.emojis.get('716299276770213898') + "Çevrimiçi") : (Durum == "offline" ? (client.emojis.get('716299275805524099') + "Çevrimdışı") : (Durum == "idle" ? (client.emojis.get('716299276929466449') + "Boşta") : (Durum == "dnd" ? (client.emojis.get('716299276413829160') + "Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const botemoji = client.emojis.get('724219372281004112')
      let tarih = moment(user.createdAt).format("LLL")
  
let katılma = moment(message.guild.member(user).joinedAt).format("LLL")
  

let mesaj =  db.fetch(`msayar_${user.id}`)
let karakter =  db.fetch(`karakter_${user.id}`)
let sure = db.get(`ayril.${user.id}`) - db.get(`katil.${user.id}`)
moment(new Date(db.get(`sure.${user.id}`))).format("LLL")

var ses_suresi = db.get(`${user.id}_sesdedur`) || 0
var ses_suresi = Math.round(ses_suresi/60)+" dakika"




  
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
        .setColor(message.guild.members.get(user.id).displayHexColor)
        .setThumbnail(user.avatarURL)
        .addField("» Tag:", `${user.tag}`)
        .addField("» ID:", `${user.id}`)
        .addField("» Sunucudaki Kullanıcı Adı:", `${member.nickname !== null ? `${member.nickname}` : 'Sunucuda kullanıcı adı bulunmuyor.'}`)
        .addField("» Hesap Kuruluş Tarihi:", `${tarih}`)
        .addField('» Sunucuya katılma tarihi',`${katılma}`)
        .addField("» Sunucuya Katılma Sırası",`${message.guild.memberCount >= 1000 ? message.guild.members.sort((a, b) => a.joinedTimestamp - b.joinedTimestamp).map(e => e.id).indexOf(message.author.id) :  message.guild.members.sort((a, b) => a.joinedTimestamp - b.joinedTimestamp).map(e => e.id).indexOf(message.author.id)}/${message.guild.memberCount}`,)
        .addField("» Bot mu?:", `${user.bot ? `${botemoji}`  : "Hayır."}`)
        .addField("» Durum:", `${durm}`)
        .addField("» Şu anda Oynadığı Oyun:", `${user.presence.game ? user.presence.game.name : 'Şuanda hiç bir oyun oynamıyor.'}`)
        .addField("» Rolleri:", `${member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') ? member.roles.filter(r => r.name !== "@everyone").map(r => r).join(' **|** ') : 'Bu kullanıcının bu sunucuda hiç rolü bulunmuyor.'}`)
        .addField("» Mesaj:", `${user} Bu sunucuda toplam **${karakter}** karakter  **${mesaj}** mesaj atmış.`)
        .addField("» Ses:",`${user} Bu sunucuda toplam **${ses_suresi}** dakika seslide kalmış.`)
    message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı','i'],
  permLevel: `Yetki gerekmiyor. (${0})`
};

exports.help = {
  name: 'kullanıcı-bilgi',
  kategori: 'genel',
  description: 'İstediğiniz kullanıcı hakkında bilgi verir.',
  usage: 'kullanıcı-bilgi <@kişi-etiket>'
};