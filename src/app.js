const path                   = require('path');
const { Collection, Client } = require('discord.js');
const log                    = require('./utils/log.js');
const load                   = require('./utils/loadfiles.js');
const chalk                  = require('chalk');
const Socket                 = require('./socket.js');
const config                 = require('./config.json');
const fs                     = require('fs');
const i18n                   = require('./i18n/i18n.js');
const tempChannel            = require('./utils/tempvoice.js');

// TODO: Load WS!

const client = new Client();
client.commands = new Collection();
client.queue = new Map();

tempChannel.autoCreateChannelPublic(client, {
    userLimit: 12,
    nameStartsWith: "🔊︱",
    nameStartsWithTemp: "⌛︱",
});
tempChannel.autoCreateChannelPrivate(client, {
    userLimit: 10,
    nameStartsWith: "🔉︱",
    nameStartsWithTemp: "⌛︱"
});


load.events(client, 'events', () => {
});


load.commands(client, 'commands', () => {
});

client.login(config.token)