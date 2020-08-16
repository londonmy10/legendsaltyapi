const { ShardingManager } = require ('discord.js')
const ayarlar = require ('./ayarlar.json')
const Discord = require ('discord.js')
const shards = new ShardingManager ('./bot.js', {//BURASI ANA DOSYANIZ DEGİİŞİR

token : ayarlar.token,

totalShards : 1 //fireofeternity <3             

});

    const webhook = new Discord.WebhookClient("742315341333397504","NOzl2n8n8rD1p92OBJQ3b9DbEPSWOtWcqjRtS8YT25f07iv_gh0fNJRIxLSvccRoJ39w")

shards.on('launch', shard => {
    webhook.send(`<a:baglaniyor:742313028933910591> **[Başlatılıyor]**${shard.id +1}. Shard Discorda yeniden bağlanmaya çalışıyor!`)
    setTimeout(() => {
  webhook.send(`<a:baglandi:742312990069751809> **[Başlatıldı]** ${shard.id +1}. Shard Discorda yeniden bağlandı!`)
  }, 3000)
})
shards.on('message', (shard, msg) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] #${shard.id} | ${msg._eval} | ${msg._result}`);
});

shards.spawn()
 
