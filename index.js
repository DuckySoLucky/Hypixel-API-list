const SkyHelperAPI = require('./API/SkyHelperAPI')
const skyShiiyuAPI = require('./API/SkyShiiyuAPI')
const playerDBAPI = require('./API/PlayerDBAPI')
const hypixelAPI = require('./API/HypixelAPI')
const hypixelAPIReborn = require('./API/HypixelRebornAPI')

SkyHelperAPI.getFetchur().then(response => {
    console.log(`Fetchur Requests: ${response.data.text}`) // 1x Flint and Steel
});

skyShiiyuAPI.getCoins('DeathStreeks').then(response => {
    console.log(`DeathStreeks' purse:`, response.purse) // 144572377.9210022
})

playerDBAPI.getPlayerData('DeathStreeks').then(response => {
    console.log(`DeathStreeks' UUID:`, response) // fb3d96498a5b4d5b91b763db14b195ad
})

hypixelAPI.getGuildData('WristSpasm').then(response => {
        console.log(`WristSpasm's Guild Tag:`, response.guild.tag) // SPASM
    }
)

// https://hypixel.stavzdev.me/
hypixelAPIReborn.getGuild('name', 'The Foundation').then(response => {
    console.log('The Foundation\'s Guild Level:', response.level) // 168
})