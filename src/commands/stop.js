
const { i18n } = require("../i18n/i18n.js");



module.exports = {
  run : async (client, message, args, utils) =>  {
    const queue = message.client.queue.get(message.guild.id);

    if (!queue) return message.reply(i18n("command.stop.errorNotQueue")).catch(console.error);
    if (!utils.canModifyQueue(message.member)) return i18n("error.NotChannel");

    queue.songs = [];
    queue.connection.dispatcher.end();
    queue.textChannel.send(i18n("command.stop.result", { author: message.author })).catch(console.error);
  },

  name: i18n("command.stop.name"),
  description: i18n("command.stop.description"),
  aliases: i18n("command.stop.aliases"),
  usage: i18n("command.stop.usage"),
};
