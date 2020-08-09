const Discord = require('discord.js');
 
exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "723827133947838504"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapip "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(":warning: Zaten bu role sahipsin.")
  message.member.addRole(role);
  message.channel.send(`:white_check_mark: NSFW rolu basariyla verildi`);
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['discord.js','javascript'],
  permLevel: 0
};
 
exports.help = {
  name: 'nsfw',
  kategori: 'lndözel',
  description: 'NSFW kanallarina erisim saglar.',
  usage: 'nsfw'
};
//codare