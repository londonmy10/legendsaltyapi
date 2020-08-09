const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
    "https://media1.tenor.com/images/2e6d884809b1632ac7f2fa178667a7ab/tenor.gif?itemid=15732301",
    "https://media1.tenor.com/images/6a59659cf8047d3e5e9c7a441b7777bf/tenor.gif?itemid=4753287",
    "https://media1.tenor.com/images/6a288821409733bb848f14b9443f8b73/tenor.gif?itemid=4079563",
    "https://media1.tenor.com/images/204dc002cab486541636f163a73c796f/tenor.gif?itemid=10570690",
    "https://media1.tenor.com/images/579d7e4e6e57826f407d1fe6f1744bdd/tenor.gif?itemid=10362110",
    "https://media1.tenor.com/images/bc858e69d5022807b84554b2d4583c10/tenor.gif?itemid=5013065",
    "https://media1.tenor.com/images/49796f431821592cafbdd97092347a00/tenor.gif?itemid=3468578",
    "https://media1.tenor.com/images/4ec47d7b87a9ce093642fc8a3c2969e7/tenor.gif?itemid=12667518",
    "https://media1.tenor.com/images/b980428d9ab96cc24e690ec9b00a783f/tenor.gif?itemid=7205678"
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
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` ***seni*** \`${message.author.username}#${message.author.discriminator}\` ***tokatladı.*** `
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.RichEmbed()
      .setTitle(`Kendini tokatlayacak kadar ne yaşadın? :flushed:`)
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
  name: "tokat",
  kategori: 'eğlence',
  description: "istediğiniz kişiyi öper!.",
  usage: "tokat [isim]"
};