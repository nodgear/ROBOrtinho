const i18n = require("../i18n/i18n.js").i18n;

module.exports = {
    run : async (client, message, args, utils) => {
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        await message.channel.send(`Vivo a exatamente ${days}d ${hours}h ${minutes}m ${seconds}s`)
    },



    name: i18n("command.uptime.name"),
    description: i18n("command.uptime.description"),
    aliases: i18n("command.uptime.aliases"),
    usage: '',
    devOnly: true,
    permission: '',
    cooldown: 0,
    args: false
}