let bot = global.Bot;
function start(ctx) {
  bot.telegram.sendMessage(ctx.chat.id, "Bot started!");
}

module.exports = start;
