const Discord = require("discord.js")
const Client = new Discord.Client()
const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

Client.on('ready', () => {
    const memberCount = Client.guilds.cache.get('805558658325807134').members.cache.size;

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity : {
            details : "Dexter Roleplay",
                assets : {
                    large_image : "dexterlogo",
                    large_text : "Test",
                    small_image : "discord_logo",
                    small_text: memberCount.toLocaleString()
                },
            buttons : [{label : "Join Now" , url : "no"}]
        }
    })
})


client.login({ clientId : "830161361899749386" }).catch(console.error);