const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.setNickname(`${isim}`);
  member.removeRole('603580899111731232')
  member.addRole('609133255819526344')
const embed = new Discord.RichEmbed()
 
 
      .addField(`**🏷 Legends Never Die Erkek Kayıt 🏷**`,
      `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\``)
client.channels.get('728968298108158043').send(embed)
 
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
 
let kanal = client.channels.get('702624607072682054')
const hgmsj = new Discord.RichEmbed()
.setAuthor(member.user, member.user.avatarURL)
.setTitle(`@${member.user.tag} Aramıza Katıldı! ${üyesayısı} kişi olduk!`)
.setDescription('Aramıza hoşgeldin <a:sonsuz:729780899201155082> \n\n Rollerini bu kanallardan alabilirsin <a:sonsuz:729780899201155082> \n <#543782959321186334> <#729476239659761765>')
kanal.send(`${member.user} Aramıza Katıldı! ${üyesayısı} kişi olduk!\n\nAramıza hoşgeldin <a:sonsuz:729780899201155082> \n\n Rollerini bu kanallardan alabilirsin <a:sonsuz:729780899201155082> \n <#543782959321186334> <#729476239659761765>`).then(msg => msg.delete(100000));
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick", "isim"],
  permLevel: 0
};
exports.help = {
  name: "e",
  kategori: 'lndözel',
  description: "Erkek Kayıt Sistemi",
  usage: "erkek"
};