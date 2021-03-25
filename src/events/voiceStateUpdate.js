const config = require('../config.json');
const utils  = require('../utils/util.js');
const i18n   = require('../i18n/i18n.js');
const log    = require('../utils/log.js');
const slug   = require('random-word-slugs');

async function createChannel( channel ) {
    // Database is not ready or doesn't exist... try again, i guess?
    if (!client.dynamicVC) {
        log.error("Initialized createChannel, but the dynamic voice database is dead!")
        return;
    }

    // This may be harcoded, but this a feature written only for the uni discord. So we are also checking if we are in the right guild.
    if (!channel.guild.id == config.guildID)
        return;

    switch (channel.name) {
        case "Criar Público":
        	enmap.set("")
            break;
        case "Criar Privado":
            break;
        default:
            return;
    }
}

async function event(client, oldState, newState) {
    const user = newState.member.user
    const username = user.username;
    const oldVC = oldState.channel;
    const newVC = newState.channel;

    const oldChannelName = (oldVC === undefined || oldVC === null) ? "None" : oldVC.name;
    const newChannelName = (newVC === undefined || newVC === null) ? "None" : newVC.name;

    if (oldVC === null) {
        log.voice('STATE', user, newVC, "Joined");

    } else if (newVC === null) {
        log.voice('STATE', user, oldVC, "Disconnected from");

    } else {
        log.voice('STATE', user, newVC, "Moved to");
    }

    if (!client.dynamicVC)
        return;

    client.voiceRecord.ensure(`${user.id}`, {
        user: user.id,
        createdChannels: [],
        invitedChannels: []
    });


}

module.exports = event;