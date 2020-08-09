const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;;

//Resimli Güvenlik

client.on("guildMemberAdd", async member => {
  let user = client.users.get(member.id);
  let chan = client.channels.get(db.fetch(`guvenlik${member.guild.id}`));
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");

  const resim1 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614151181752860672/yhosgeldirrn.png"
  );
  const resim2 = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164419768877056/yhosgeldirrn.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = require("moment-duration-format");
  var kontrol;
  if (kurulus > 2629800000) kontrol = resim2;
  if (kurulus < 2629800000) kontrol = resim1;

  const background = await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/591299755976425493/614164413318168606/Adsz.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  const attachment = new Discord.Attachment(
    canvas.toBuffer(),
    "STARKs-güvenlik.png"
  );
  chan.send(attachment);
});

//Bot Eklendim-Atıldım
client.on("guildCreate", guild => {
  let codeming1 = client.channels.get("735942130538643476")

 const codeming = new Discord.RichEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("RANDOM")
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
.setFooter("Legends Never Die") 
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/avatars/659809412805820436/bf0ec03eed3a5f6ef13c41996a993391.png?size=2048")
codeming1.send(codeming)
});

client.on("guildDelete", guild => {
  let codeming2 = client.channels.get("735942130538643476")

 const codeming3 = new Discord.RichEmbed()
.setTitle("SUNUCUDAN ATILDIM")
.setColor("RANDOM")
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
.setFooter("Legends Never Die") 
.setTimestamp()
.setThumbnail("https://cdn.discordapp.com/avatars/659809412805820436/bf0ec03eed3a5f6ef13c41996a993391.png?size=2048")
codeming2.send(codeming3)
});
///Son Gelen Üyeyi Kanalda Göster/////
client.on("guildMemberAdd", async member => {
let channel = client.channels.get("732241149246308462"); 
channel.setName('Son Üyemiz: '+member.user.username)


})
///Gifli-Gifsiz PP////
client.on(`userUpdate`, (oldUser, newUser) => {
 
  let kişi = client.users.get(oldUser.id)
  let avatar = kişi.avatarURL.split('?')[0]
  let kanal = client.channels.find(ch => ch.id === '731821410456043578')/// Gifsiz Avatar Kanal İd
  let kanal1 = client.channels.find(ch => ch.id === '731821327215886397')/// Gifli Avatar Kanal İd
if(avatar.endsWith('.png')) {
  const emb = new Discord.RichEmbed()
  .setImage(avatar)
  .setFooter(`${kişi.tag}`)
  .setTimestamp()
  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL})!`)
  kanal.send(emb)
}
if(avatar.endsWith('.gif')) {
  const emb = new Discord.RichEmbed()
  .setImage(avatar)
  .setFooter(`${kişi.tag}`)
  .setTimestamp()
  .setDescription(`Fotoğrafa gitmek için [tıkla](${kişi.avatarURL})!`)
  kanal1.send(emb)
}
})
/////Modlog ayarla///

const botadi = "Legends Never Die"

client.on('messageDelete', message => {
let modlogs =  db.get(`modlogkanaly_${message.guild.id}`)
  const modlogkanal = message.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (message.content.length > 1024) {
      modlogkanal.send({embed: {
    Color: "#080000",
    author: {
      name: `${message.author.tag} tarafından gönderilen bir mesaj silindi`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj 1024 karakterden fazla mesajı gösteremem`,
        value: `\`\`\`Bilinmiyor...\`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    } else {
      modlogkanal.send({embed: {
Color: "#080000",
    author: {
      name: `${message.author.tag} kullanıcısının mesajı silindi\n`,
      icon_url: message.author.DisplayAvatarURL
    },
    fields: [{
        name: `Silinen mesaj:`,
        value: `\`\`\` ${message.content} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: message.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
    }
  }
})



client.on('guildBanAdd', async (guild, user) => {
  let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişi sunucudan yasaklandı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasaklanan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('guildBanRemove', async (guild, user) => {
 let modlogs = db.get(`modlogkanaly_${guild.id}`)
  const modlogkanal = guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    let embed = new Discord.RichEmbed()
    .setColor("#080000")
    .setAuthor("Bir kişinin yasağı kaldırıldı")
    .setThumbnail(user.avatarURL||user.defaultAvatarURL)
    .addField(`Yasağı kaldırılan kişi`, `\`\`\` ${user.tag} \`\`\` `)
    .setFooter(`${botadi} | Mod-Log Sistemi`)
    .setTimestamp()
    modlogkanal.send(embed)
  }
});


client.on('channelCreate', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
      Color: "#080000",
      fields: [{
          name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
          value: `\`\`\` ${channel.name} \`\`\``
        },
        {
          name: `Oluşturulan Kanalin Türü`,
          value: `\`\`\` Metin Kanalı \`\`\``
        }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Kanal Oluşturuldu. \nOluşturulan Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Oluşturulan Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('channelDelete', async channel => {
 let modlogs = db.get(`modlogkanaly_${channel.guild.id}`)
  const modlogkanal = channel.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (channel.type === "text") {
      modlogkanal.send({embed: {
     Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
        text: `${botadi} | Mod-Log Sistemi`
      }
     }});
    } else {
      if (channel.type === "voice") {
       modlogkanal.send({embed: {
 Color: "#080000",
    fields: [{
        name: `Bir Kanal Silindi. \nSilinen Kanalin İsmi:`,
        value: `\`\`\` ${channel.name} \`\`\``
      },
      {
        name: `Silinen Kanalin Türü`,
        value: `\`\`\` Ses Kanalı \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
}); 
      }
    }
  }
});

client.on('roleDelete', async role => {
 let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Rol Silindi. \nSilinen Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});

client.on('emojiDelete', async emoji => {
 let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir Emoji Silindi. \nSilinen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  
  }
});


client.on('roleCreate', async role => {
let modlogs =  db.get(`modlogkanaly_${role.guild.id}`)
  const modlogkanal = role.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
     modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Yeni Bir Rol Oluşturuldu. \nOluşturulan Rolun İsmi:`,
        value: `\`\`\` ${role.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    }
  }
});
  }
});


client.on('messageUpdate', async (oldMessage, newMessage) => {
 let modlogs = db.get(`modlogkanaly_${oldMessage.guild.id}`)
  const modlogkanal = oldMessage.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    if (oldMessage.author.bot) {
        return false;
    }

    if (!oldMessage.guild) {
        return false;
    }

    if (oldMessage.content == newMessage.content) {
        return false;
    }
    modlogkanal.send({embed: {
      Color: "#080000",
      author: {
      name: `${oldMessage.author.tag} mesajını düzenledi:\n`,
      icon_url: oldMessage.author.DisplayAvatarURL
      },
      fields: [{
        name: `Eski mesaj:`,
        value: `\`\`\` ${oldMessage.content} \`\`\``
      },
      {
        name: `Yeni Mesaj:`,
        value: `\`\`\` ${newMessage.content} \`\`\``
      }
      ],
      timestamp: new Date(),
      footer: {
      icon_url: oldMessage.author.DisplayAvatarURL,
      text: `${botadi} | Mod-Log Sistemi`
      }
    }
    });
  }
});


client.on('emojiCreate', async emoji => {
 let modlogs = db.get(`modlogkanaly_${emoji.guild.id}`)
  const modlogkanal = emoji.guild.channels.find(kanal => kanal.id === modlogs);
  if(!modlogs) return;
  if(modlogs) {
    modlogkanal.send({embed: {
    Color: "#080000",
    fields: [{
        name: `Bir emoji eklendi. \nEklenen Emojinin İsmi:`,
        value: `\`\`\` ${emoji.name} \`\`\``
      }
    ],
    timestamp: new Date(),
    footer: {
      text: `${botadi} | Mod-Log Sistemi`
    } 
   } 
});
  }
});

////Bot Eklendim Sunucu Sahibine Mesaj////

client.on("guildCreate", guild => {
  const e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      "Hey, ben Legends Never Die. Az önce ben sunucunuza eklendim.\n&yardım yazarak bilgi alabilirsin.\nDaha fazla bilgi için sunucumuza gelip bilgi alabilirsin. Davet Linkimiz : https://discord.gg/EKjSRYn "
    )
    .setFooter("Sunucu kurucusu olduğunuzdan dolayı sadece size gönderildi.");

  guild.owner.send(e);
});

/////Fake Katıl - Ayrıl

client.on('message', async message => {
if (message.content === '&fakekatıl') { // . yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author));
    }
});

client.on('message', async message => {
if (message.content === '&fakeayrıl') { // . yerine prefixi yaz
  client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
});
//Hoşgeldin seninle x kişiyiz
client.on("guildMemberAdd", (member, message) => {
  if (member.guild.id !== "374894897917853707") return; //sunucu id
var msg = message;
var üyesayısı = client.guilds.get("374894897917853707").members.size.toString().replace(/ /g, " ")
var üs = üyesayısı.match(/([0-9])/g)
üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
 
if(üs) {
üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
return {
'0': `<a:sfr:729286531818192956>`,
    '1': `<a:bir:729286555050442822>`,
    '2': `<a:iki:729286572859588660>`,
    '3': `<a:uc:729286583290691605>`,
    '4': `<a:drt:729286597820022804>`,                      
    '5': `<a:be:729286611803570246>`,
    '6': `<a:alt:729286629381898301>`,
    '7': `<a:yedi:729286654753505290>`,
    '8': `<a:sekiz:729286667374166066>`,
    '9': `<a:dokuz:729286681760497674>`}[d];
 })
}
  let aylartoplam = {
    "01": "Ocak",
    "02": "Subat",
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayis",
    "06": "Haziran",
    "07": "Temmuz",
    "08": "Agustos",
    "09": "Eylül",
    "10": "Ekim",
    "11": "Kasim",
    "12": "Aralik"
  };
  let aylar = aylartoplam;
  let user = client.users.get(member.id);
  require("moment-duration-format");
  let eskiNick = member.user.username;
  const id = "728957714780389416"; //kanal id
  const channel = member.guild.channels.get(id);
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (gün < 7) kontrol = "<a:tehlikeli:727665292058296402> Süpheli Kullanici! <a:tehlikeli:727665292058296402>";
  if (gün > 7) kontrol = "<a:guvenli:727665294285209630> Güvenilir Kullanici! <a:guvenli:727665294285209630>";
  channel.send(
`<a:hgg:729628053789081610> **Hosgeldin** **${member} seninle ${üyesayısı} kisiyiz!
 
**<a:galp:729628104007614504> Sunucuya Kayit Olmak için Ses Teyit odasina geçebilirsiniz**
 
**<a:saril:729272950712303628> Hesap Kurulus Zamani: ${moment(user.createdAt).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(user.createdAt).format("YYYY HH:mm:ss")}**
 
**<a:patis:729628087574200360> Bu Kullanici:** **${kontrol}**
 
**<a:tac:729628071417741354> <@&728939330051113050> Rolündeki yetkililer seninle ilgilenecektir.`,
    new Discord.Attachment(
      "https://cdn.discordapp.com/attachments/603560726384214036/603562943577063469/ReliableSickHarpyeagle-max-1mb.gif"
    )
  );
});
////Kanalda Emojili Online////

client.on("message", async message => {
const brave = client.channels.get("702624607072682054")
let man = "TAG"

  const voiceChannels = message.guild.channels.filter(c => c.type === "voice");
  let count = 0;
  for (const [id, voiceChannel] of voiceChannels)
    count += voiceChannel.members.size;

  var sessayı = count.toString().replace(/ /g, "    ");
  var üs2 = sessayı.match(/([0-9])/g);
  sessayı = sessayı.replace(/([a-zA-Z])/g, "YOK").toLowerCase();
  if (üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
        "0": "<a:sfr:729286531818192956>",
        "1": "<a:bir:729286555050442822>",
        "2": "<a:iki:729286572859588660>",
        "3": "<a:uc:729286583290691605>",
        "4": "️<a:drt:729286597820022804>",
        "5": "<a:be:729286611803570246>",
        "6": "️<a:alt:729286629381898301>", 
        "7": "️<a:yedi:729286654753505290>",
        "8": "<a:sekiz:729286667374166066>",
        "9": "️<a:dokuz:729286681760497674>"
      }[d];
    });
  }

  var tags = message.guild.members
    .filter(member => member.user.username.includes(man))
    .size.toString();
  if (tags) {
    tags = tags.replace(/([0-9])/g, d => {
      return {
        "0": "<a:sfr:729286531818192956>",
        "1": "<a:bir:729286555050442822>",
        "2": "<a:iki:729286572859588660>",
        "3": "<a:uc:729286583290691605>",
        "4": "️<a:drt:729286597820022804>",
        "5": "<a:be:729286611803570246>",
        "6": "️<a:alt:729286629381898301>", 
        "7": "️<a:yedi:729286654753505290>",
        "8": "<a:sekiz:729286667374166066>",
        "9": "️<a:dokuz:729286681760497674>"
      }[d];
    });
  }

  var onlayn = message.guild.members
    .filter(m => m.presence.status !== "offline")
    .size.toString()
    .replace(/ /g, "    ");
  var üs4 = onlayn.match(/([0-9])/g);
  onlayn = onlayn.replace(/([a-zA-Z])/g, "YOK").toLowerCase();
  if (üs4) {
    onlayn = onlayn.replace(/([0-9])/g, d => {
      return {
        "0": "<a:sfr:729286531818192956>",
        "1": "<a:bir:729286555050442822>",
        "2": "<a:iki:729286572859588660>",
        "3": "<a:uc:729286583290691605>",
        "4": "️<a:drt:729286597820022804>",
        "5": "<a:be:729286611803570246>",
        "6": "️<a:alt:729286629381898301>", 
        "7": "️<a:yedi:729286654753505290>",
        "8": "<a:sekiz:729286667374166066>",
        "9": "️<a:dokuz:729286681760497674>"
      }[d];
    });
  }

  var üyesayısı = message.guild.memberCount.toString().replace(/ /g, "");
  var üs = üyesayısı.match(/([0-9])/g);
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "YOK").toLowerCase();
  if (üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
        "0": "<a:sfr:729286531818192956>",
        "1": "<a:bir:729286555050442822>",
        "2": "<a:iki:729286572859588660>",
        "3": "<a:uc:729286583290691605>",
        "4": "️<a:drt:729286597820022804>",
        "5": "<a:be:729286611803570246>",
        "6": "️<a:alt:729286629381898301>", 
        "7": "️<a:yedi:729286654753505290>",
        "8": "<a:sekiz:729286667374166066>",
        "9": "️<a:dokuz:729286681760497674>"
      }[d];
    });
  }

brave.setTopic(`**Toplam Üye: __${üyesayısı}__**\n **Toplam Online: __${onlayn}__**\n **Sesteki Üye: __${sessayı}__**\n **Taglı Üye: __${tags}__**`)

})
   
/////// Jail //////

client.on('guildMemberAdd', async member => {
const data = require('quick.db')
const asd = data.fetch(`${member.guild.id}.jail.${member.user.id}`)
if(asd) {
let data2 = await data.fetch(`jailrol_${member.guild.id}`)
let rol = member.guild.roles.get(data2)
if(!rol) return;
let kişi = member.guild.members.get(member.user.id)
kişi.roles.forEach(r => {
kişi.removeRole(r.id)
data.set(`${member.guild.id}.jail.${kişi.id}.roles.${r.id}`, r.id )})
    data.set(`${member.guild.id}.jail.${kişi.id}`, 'codare')
kişi.addRole(rol.id);
  const wasted = new Discord.RichEmbed()
  .setAuthor(member.user.tag, member.user.avatarURL)
  .setColor(`#f3c7e1`)
  .setDescription(`Aa, beni kandıramazsın!`)
  .setTimestamp()
    member.send(wasted)
} 
  
  
})

/////Resim Kanalında Mesaj Engel////

client.on("message", m => {
  if (m.channel.id !== "728927050701996113") { //buraya o kanalın ID'si yazılacak.
    return;
  }
  if (m.author.id === m.guild.ownerID) return;
  if (m.attachments.size < 1) {
    m.delete();
  }
});

////Sa-As////////

client.on("message", async msg => {


  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm') {
          try {

                  return msg.reply('<a:sevgi:729692496359194624> __***Aleyküm Selam, Hoşgeldin***__ <a:yanak:729692486401785906>^^')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
    
    }
    if (!i) return;

    });


/// LEVEL ///

client.on("message", async message => {
let prefix = ayarlar.prefix;

var id = message.author.id;
var gid = message.guild.id;

let hm = await db.fetch(`seviyeacik_${gid}`);
let kanal = await db.fetch(`svlog_${gid}`);
let xps = await db.fetch(`verilecekxp_${gid}`);
let seviyerol = await db.fetch(`svrol_${gid}`);
let rollvl = await db.fetch(`rollevel_${gid}`);

if (!hm) return;
if (message.content.startsWith(prefix)) return;
if (message.author.bot) return;

var xp = await db.fetch(`xp_${id}_${gid}`);
var lvl = await db.fetch(`lvl_${id}_${gid}`);
var xpToLvl = await db.fetch(`xpToLvl_${id}_${gid}`);

if (!lvl) {
//LND Bot...
if (xps) {
db.set(`xp_${id}_${gid}`, xps);
}
db.set(`xp_${id}_${gid}`, 4);
db.set(`lvl_${id}_${gid}`, 1);
db.set(`xpToLvl_${id}_${gid}`, 100);
} else {
if (xps) {
db.add(`xp_${id}_${gid}`, xps);
}
db.add(`xp_${id}_${gid}`, 4);

if (xp > xpToLvl) {
db.add(`lvl_${id}_${gid}`, 1);
db.add(
`xpToLvl_${id}_${gid}`,
(await db.fetch(`lvl_${id}_${gid}`)) * 100
);
if (kanal) {
client.channels
.get(kanal.id)
.send(
message.member.user.username +
"** Seviye Atladı! Yeni seviyesi; `" +
lvl +
"` Tebrikler! :tada: **"
);

//zepo
}
//zepo
}

if (seviyerol) {
if (lvl >= rollvl) {
message.guild.member(message.author.id).addRole(seviyerol);
if (kanal) {
client.channels
.get(kanal.id)
.send(
message.member.user.username +
"** Yeni Seviyesi **" +
rollvl +
"** seviyeye ulaştı ve " +
seviyerol +
" Rolünü kazandı! :tada: **"
);
}
}
}
}

//ZEPST
});


//////HG-BB&Sayaç/////

client.on("message", async message => {
let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
if(sayac[message.guild.id]) {
if(sayac[message.guild.id].sayi <= message.guild.members.size) {
const embed = new Discord.RichEmbed()
.setDescription(`Tebrikler, başarılı bir şekilde ${sayac[message.guild.id].sayi} kullanıcıya ulaştık!`)
.setColor("0x808080")
.setTimestamp()
message.channel.send({embed})
delete sayac[message.guild.id].sayi;
delete sayac[message.guild.id];
fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
console.log(err)
})
}
}
})
client.on("guildMemberRemove", async member => {
let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8")); 
let embed = new Discord.RichEmbed()
.setTitle('')
.setDescription(``)
.setColor("RED")
.setFooter("", client.user.avatarURL);

if (!giriscikis[member.guild.id].kanal) {
return;
}

try {
let giriscikiskanalID = giriscikis[member.guild.id].kanal;
let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
giriscikiskanali.send(`📤 ${member.user.tag}, aramızdan ayrıldı, \**${sayac[member.guild.id].sayi}\** kişi olmamıza \**${sayac[member.guild.id].sayi - member.guild.memberCount}\** kişi kaldı!`);
} catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
return console.log(e)
}

});
client.on("guildMemberAdd", async member => {
let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
let giriscikis = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8")); 
let embed = new Discord.RichEmbed()
.setTitle('')
.setDescription(``)
.setColor("GREEN")
.setFooter("", client.user.avatarURL);

if (!giriscikis[member.guild.id].kanal) {
return;
}

try {
let giriscikiskanalID = giriscikis[member.guild.id].kanal;
let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
giriscikiskanali.send(`📥 ${member.user.tag}, aramıza katıldı **${sayac[member.guild.id].sayi}** kişi olmamıza **${sayac[member.guild.id].sayi - member.guild.memberCount}** kişi kaldı!` );
} catch (e) { // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
return console.log(e)
}

});

//Gelen Giden

client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let joinRole = guild.roles.find("name", "Kayıt"); // 'Kayıt' yazılan yeri otomatik rol vereceği rolü yapabilirsiniz.//Otorol Komudu :)
  member.addRole(joinRole);

  const channel = member.guild.channels.find("name", "「🖐」gelen-giden"); // 'gelen-giden' log ismidir. değiştirebilirsiniz. belirttiğiniz isme giriş çıkış gösterecektir.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setColor("0x00cc44")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`:inbox_tray: ${member.user.username} Sunucuya katıldı.`)
    .setTimestamp();
  channel.sendEmbed(embed);
});

client.on("guildMemberRemove", member => {
  const channel = member.guild.channels.find("name", "「🖐」gelen-giden"); // 'gelen-giden' log ismidir. değiştirebilirsiniz. belirttiğiniz isme giriş çıkış gösterecektir.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
    .setColor("0xff1a1a")
    .setAuthor(client.user.username, client.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`:outbox_tray: ${member.user.username} Sunucudan ayrıldı.`)
    .setTimestamp();
  channel.sendEmbed(embed);
});


///////Kanal Koruma/////

client.on("channelCreate", async (kanl, member, guild) => {
  let kanal = await db.fetch(`kanalk_${kanl.guild.id}`);
  if (kanal == "acik") {
    kanl.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir kanal oluşturuludu! fakat geri silindi! (Kanal Koruma Sistemi)"
      )
      .setColor("BLACK");
    kanl.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});

///////Rol Koruma///////

client.on("roleCreate", async (rolee, member, guild) => {
  let rolkoruma = await db.fetch(`rolk_${rolee.guild.id}`);
  if (rolkoruma == "acik") {
    rolee.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir rol oluşturuludu! fakat geri silindi! (Rol Koruma Sistemi)"
      )
      .setColor("BLACK");
    rolee.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});

//// AFK Sistemi/////

const ms = require("parse-ms");
const db = require("quick.db");
const { DiscordAPIError } = require("discord.js");
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`${prefix}afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);
    const embed = new Discord.RichEmbed()
    .setColor('#006400')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle('Başarılı!')
    .setDescription(`<a:tac:729628071417741354>Başarıyla afk modundan çıktınız.<a:tac:729628071417741354>`)
    .setFooter('Legends Never Die AFK Sistemi')
    message.channel.send(embed).then(msg => msg.delete(5000));
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);
    const afk = new Discord.RichEmbed()
    .setColor('#FF0000')
    .setTitle('Hata!')
    .setDescription(`${USER.tag} kullanıcısı AFK<a:tac:729628071417741354>\n <a:tac:729628071417741354>AFK süresi: ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s\n Sebep:\n<a:hgg:729628053789081610> **${REASON}** <a:hgg:729628053789081610>`)
    .setFooter('Legends Never Die AFK Sistemi')
    message.channel.send(afk).then(msg => msg.delete(5000));
  }
});

//////// Otorol v2/////////

client.on("guildMemberAdd", async member => {
  let sayac = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
  let otorole = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
  let arole = otorole[member.guild.id].sayi;
  let giriscikis = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
  let embed = new Discord.RichEmbed()
    .setTitle("Otorol Sistemi")
    .setDescription(
      `:loudspeaker: :inbox_tray: @${member.user.tag}'a Otorol Verildi `
    )
    .setColor("GREEN")
    .setFooter("LND", client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  try {
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds
      .get(member.guild.id)
      .channels.get(giriscikiskanalID);
    giriscikiskanali.send(
      `:loudspeaker: :white_check_mark: Hoşgeldin **${member.user.tag}** Rolün Başarıyla Verildi.`
    );
  } catch (e) {
    // eğer hata olursa bu hatayı öğrenmek için hatayı konsola gönderelim.
    return console.log(e);
  }
});

client.on("guildMemberAdd", async member => {
  let autorole = JSON.parse(fs.readFileSync("./jsonlar/otorol.json", "utf8"));
  let role = autorole[member.guild.id].sayi;

  member.addRole(role);
});

/////////Gold Üye///////////

client.on("message", async message => {
  const db = require("quick.db");
  const request = require("node-superfetch");
  let gold = await db.fetch(`gold_${message.member.id}`);
  let dakdest = await db.fetch(`goldsure_${message.member.id}`);
  let timeout = 10000000; //1000 = 1 saniye
  const ms = require("parse-ms");
  if (gold == "acik") {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (message.member.bot) return;
      if (message.content.length > 1) {
        db.set(`goldsure_${message.author.id}`, Date.now());
        const embed = new Discord.RichEmbed()
          .setColor("BLUE")
          .setTitle("Legends Never Die")
          .setDescription(
            "<a:golduye:729966557119381559> Hizaya Geçin! Burada Bir Gold Üye Belirdi!"
           );

         message.channel.send(embed).then(msg => msg.delete(60 *100));
      }
    }
  } else if (gold == undefined) {
  }
  if (!gold) return;
});
////// Reklam Kick //////

client.on("message", async message => {
  const db = require("quick.db");
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`);
  let kullanici = message.member;
  if (reklamkick == "kapali") return;
  if (reklamkick == "acik") {
    const reklam = [
      "discord.app",
      "discord.gg",
      "invite",
      "discordapp",
      "discordgg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".rf.gd",
      ".az"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam kick sistemi`
          });
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacakç`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.ban({
            reason: `Reklam ban sistemi`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter("Reklam kick sistemi", client.user.avatarURL)
            .setDescription(
              `<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`
            )
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});

///////////////////////

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

////Snipe

client.on('messageDelete', message => {
  db.set(`snipe.mesaj.${message.guild.id}`, message.content)
  db.set(`snipe.id.${message.guild.id}`, message.author.id)
})

/////////////////

///////////
client.on("message", msg => {
  if (msg.content.toLowerCase() === "dc") {
    msg.reply(
      "Sunucumuza bu linkten katil - https://discord.gg/EKjSRYn"
    );
  }

  if (msg.content.toLowerCase() === "<@351695051962843136>") {
    msg.channel.send("Yapımcım").then(msg => msg.delete(5000));
  }
  
  if (msg.content.toLowerCase() === "günaydın") {
      msg.channel.send("<a:saril:729272950712303628> __***Günaydın Güzellik***__ <a:galp:727665292976586895>^^").then(msg => msg.delete(5000));
  }

    if (msg.content.toLowerCase() === "iyi geceler") {
      msg.channel.send("<a:saril:729272950712303628> __***Iyi Geceler Güzellik***__ <a:galp:727665292976586895>^^").then(msg => msg.delete(5000));
  }
  
  if (msg.content.toLowerCase() === "görüşürüz") {
    msg.channel.send("<a:saril:729272950712303628> __***Görüşürüz Güzellik***__ <a:galp:727665292976586895>^^").then(msg => msg.delete(5000));
  }
});

///Büyük Harf Engel////

    client.on("message", async msg => {
    if (msg.channel.type === "dm") return;
      if(msg.author.bot) return;  
        if (msg.content.length > 4) {
         if (db.fetch(`capslock_${msg.guild.id}`)) {
           let caps = msg.content.toUpperCase()
           if (msg.content == caps) {
             if (!msg.member.hasPermission("ADMINISTRATOR")) {
               if (!msg.mentions.users.first()) {
                 msg.delete()
                 return msg.channel.send(`✋ ${msg.author}, Bu sunucuda, büyük harf kullanımı engellenmekte!`).then(m => m.delete(5000))

	

     }
       }

     }

   }
  }
});
 
client.on('message', msg => {
  client.emit('checkMessage', msg); 
})
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);
