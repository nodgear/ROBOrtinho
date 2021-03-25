const config  = require('../config.json');
const utils   = require('../utils/util.js');
const i18n    = require('../i18n/i18n.js');
const log     = require('../utils/log.js');

async function event(client, member) {
    log.debug("Evento rodou", "GUILD MEMBER ADD")
    member.send("Your message here.");

}

module.exports = event;