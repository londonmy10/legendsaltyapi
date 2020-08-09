const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media.giphy.com/media/3VEFW2uWzO3kY/giphy.gif",
    "https://media1.tenor.com/images/77eb2d5e86e552f0b938e3766fcbefb2/tenor.gif?itemid=5483542",
    "https://media1.tenor.com/images/23547c466df7d691ae28f0df5e25be2e/tenor.gif?itemid=16018766",
    "https://media1.tenor.com/images/003d574dd755a0ece76c329ed36fe81e/tenor.gif?itemid=5385189",
    "https://media1.tenor.com/images/11b756289eec236b3cd8522986bc23dd/tenor.gif?itemid=10592083",
    "https://media1.tenor.com/images/f34834227e8027f375517c8e15bd45a4/tenor.gif?itemid=13037689",
    "https://media.tenor.com/images/032a72627f5009b15fa38427a1e9d158/tenor.gif",
    "https://media.tenor.com/images/bb309d9635a763e5a4fa02ef1030399a/tenor.gif",
    "https://media1.tenor.com/images/ce23a2deaa4b5e34278dff1217372f60/tenor.gif?itemid=17855091"
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  if (!kullanıcı) {
    const buyEmb = new Discord.RichEmbed()
      .setDescription(`\`${message.author.username}#${message.author.discriminator}\` birini etiketlemelisin.`);
    message.channel.send({ embed: buyEmb });
    return;
  }
  if (
    !message.mentions.members.first().user.username ===
    message.isMentioned(message.author)
  ) {
    const candyEmb = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` ***sana*** \`${message.author.username}#${message.author.discriminator}\` ***sarıldı.*** `
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.RichEmbed()
      .setTitle(`Kendine sarılacak kadar yalnız mısın? 😟`)
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "sarıl",
  kategori: 'eğlence',
  description: "istediğiniz kişiyi öper!.",
  usage: "sarıl [isim]"
};