const config  = require('../config.json');
const utils   = require('../utils/util.js');
const i18n    = require('../i18n/i18n.js');
const log     = require('../utils/log.js');

async function event(client, member) {
    member.send("Bem vindo ao grupo de sistemas, por favor registre-se nas materias que você esta matriculado(a) no canal registro, sempre que precisar consulte as regras"); 
    member.roles.add("824432846693335070");
}

module.exports = event;