const i18n      = require('../i18n/i18n.js').i8n;
const loader    = require('../utils/loadfiles.js');
const log       = require('../utils/log.js');
const moment    = require('moment');
const Enmap     = require("enmap");

module.exports = async (client, callback) => {

    loader.jobs(client, 'events/cronjobs', () => {
        log.success('CORE', `🌱 Autenticated as: ${client.user.tag} @ ${moment(new Date()).locale('pt-br').format('ll')}`)

        client.dynamicVC = new Enmap({
            name: "dynamicVC",
            autoFetch: true,
            dataDir: './src/database'
        });

        log.success('CORE', `💽 Initialized local DB: dynamic voice channels`);
    })


};