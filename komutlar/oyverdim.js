const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMjcyNjc3MTYzMjMwODIyNSIsImJvdCI6dHJ1ZSwiaWF0IjoxNTc3NTE5MDc4fQ.j2VEPIWg_54Y-j_YVjjWaJUTIm122k7hsq2WPG_yygI', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => {
        if (!voted) {
            message.reply("Bu komutu kullanabilmek için DBL üzerinden oy vermen gerekiyor. (Eğer oy verdiyseniz bi kaç dakika bekleyin) \nOy vermek için: https://turkhisbots.glitch.me/bot/659809412805820436") //botunuzun dbl vote linkini yazın

        } else {
            message.channel.send("Destekçi rolün verildi.");
            message.member.addRole("731143206640812042")//oy verince eklenecek rol id

        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["upvote", "oyverdim"],
  permLevel: 0,
  kategori: "kullanıcı"
};

exports.help = {
  name: 'oyverdim',
  kategori: 'genel',
  description: 'Destekçi rolü alırsın.',
  usage: 'oyverdim'
};