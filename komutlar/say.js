const Discord = require("discord.js");
 
const mapping = {
  " ": "   ",
  "0": "<a:sfr:729286531818192956>",
  "1": "<a:bir:729286555050442822>",
  "2": "<a:iki:729286572859588660>",
  "3": "<a:uc:729286583290691605>",
  "4": "<a:drt:729286597820022804>",                      
  "5": "<a:be:729286611803570246>",
  "6": "<a:alt:729286629381898301>",
  "7": "<a:yedi:729286654753505290>",
  "8": "<a:sekiz:729286667374166066>",
  "9": "<a:dokuz:729286681760497674>",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};
 
"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});
 
exports.run = function(client, message, args) {
  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size;
  let offline = '**Çevrimdışı Kişi Sayısı:** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi Sayısı**: ' +
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.filter(
    only => only.presence.status != "offline"
  ).size;
  let online = '**Çevrimiçi Kişi Sayısı:** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")
const embed = new Discord.RichEmbed()
.setTitle('<a:mavikalp:737955019160289361> __Sunucu İstatistikleri__ <a:mavikalp:737955019160289361>')
.setColor('BLACK')
//.addField("Sunucudaki üye sayısı", message.guild.memberCount)
.setDescription('' + sunucu + '\n \n' + online + '\n \n' + offline + '')
.setFooter('Legends Never Die')
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.setImage("https://cdn.discordapp.com/attachments/603560726384214036/603562943577063469/ReliableSickHarpyeagle-max-1mb.gif")
//.(online)
  message.channel.send(embed)
  /*message.channel.send('Online sayısı: ' +
    `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  );*/
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};
 
exports.help = {
  name: "say",
  kategori: 'genel',
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "s.say"
};
 