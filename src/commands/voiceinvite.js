const { i18n } = require("../i18n/i18n.js");

module.exports = {
    run : async (client, message, args, utils) => {
        const state = message.member.voice;
        const channel = state.channel;

        if (!channel){
            const err = await message.channel.send( i18n("command.voiceInvite.notInChannel") )
            await message.delete({timeout: 500})
            await err.delete({timeout: 1500})
            return
        }

        if (!channel.name.startsWith('⌛')) {
            message.channel.send( i18n("command.voiceInvite.notInPrivate") )
            return
        }

        let allowList = new Array();

        const mentions = message.mentions.users;

        mentions.forEach(user => {
            allowList.push({
                id: user.id,
                allow: ['CONNECT']
            })
        });

        await channel.overwritePermissions(allowList);
        const doneMsg = await message.channel.send( `Hey! ${message.author.userName} adicionei os citados a sua lista de convidados`) // TODO: i18n
        await message.delete({timeout: 500})
        await doneMsg.delete({timeout: 2000})
    },



    name: i18n("command.voiceInvite.name"),
    description: i18n("command.voiceInvite.description"),
    aliases: i18n("command.voiceInvite.aliases"),
    usage: i18n("command.voiceInvite.usage"),
    devOnly: true,
    permission: '',
    cooldown: 0,
    args: false
}