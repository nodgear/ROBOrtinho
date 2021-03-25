const config = require('../config.json');
const utils  = require('../utils/util.js');
const { i18n }   = require('../i18n/i18n.js');
const log    = require('../utils/log.js');
const { generateSlug }  = require('random-word-slugs');

let voiceInvites = new Map();


function deleteEmptyChannelAfterDelay(voiceChannel, delayMS = 12000, callback){
	if(!voiceChannel) return;
	if(voiceChannel.members.first()) return;
	if(!voiceChannel.health) voiceChannel.health = 0;
	voiceChannel.health += 1;
	setTimeout(function(){	//queue channel for deletion and wait
		if(!voiceChannel) return;
		if(voiceChannel.members.first()) return;
		voiceChannel.health -= 1;
		if(voiceChannel.health > 0) return;
		voiceChannel.delete()	//delete channel
            .then( callback )
			.catch(error => console.log(error));
	}, delayMS);
}

async function createChannel( client, channel, user ) {
    // Database is not ready or doesn't exist... try again, i guess?
    if (!client.dynamicVC) {
        log.error("Initialized createChannel, but the dynamic voice database is dead!")
        return;
    }

    // This may be harcoded, but this a feature written only for the uni discord. So we are also checking if we are in the right guild.
    if (!channel.guild.id == config.guildID)
        return;

    // Guess what? the hardcode is back, baby!
    const category = client.channels.cache.get('824426616121851964');
    const guild = channel.guild;

    switch (channel.name) {
        case "Criar Público":
            let channel = client.dynamicVC.get(`${user.user.id}`).createdChannel
            if (channel){
                user.send("Hey! Você não pode criar duas salas ao mesmo tempo :(\nExclua o canal que você já criou para criar um novo");
                return
            }

            const pChannel = await guild.channels.create(generateSlug(), { type: 'voice', parent: category });

            deleteEmptyChannelAfterDelay(pChannel, 12000, () => {
                client.dynamicVC.delete(`${user.user.id}`)
            });

            user.voice.setChannel(pChannel);

            client.dynamicVC.set(`${user.user.id}`).createdChannel

            log.debug(`User create voice chat, public ${channel}`)

            break;
        case "Criar Privado":
            break;
        default:
            deleteEmptyChannelAfterDelay(channel, 12000, () => {
                client.dynamicVC.delete(`${user.user.id}`)
            });
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
        createChannel( client, newVC, newState.member )
    } else if (newVC === null) {
        log.voice('STATE', user, oldVC, "Disconnected from");
    } else {
        log.voice('STATE', user, newVC, "Moved to");
        createChannel( client, newVC, newState.member )
    }

    if (!client.dynamicVC)
        return;

    client.dynamicVC.ensure(`${user.id}`, {
        user: user.id,
        createdChannel: false
    });


}

module.exports = event;