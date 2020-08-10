const { ShardingManager } = require ('discord.js')
const ayarlar = require ('./ayarlar.json')
const Discord = require ('discord.js')
const shards = new ShardingManager ('./bot.js', {//BURASI ANA DOSYANIZ DEGİİŞİR

token : ayarlar.token,

totalShards : 2 //fireofeternity <3             

});

    const webhook = new Discord.WebhookClient("webhook id","webhook token")

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
 
