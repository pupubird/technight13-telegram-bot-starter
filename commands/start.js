let bot = global.Bot;
function start(ctx) {
  bot.telegram.sendMessage(ctx.chat.id, "Bot started!");
  bot.telegram.sendMessage(ctx.chat.id, "Pre-defined links", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Go to google",
            url: "https://google.com",
          }, // column 1
          {
            text: "Go to Facebook",
            url: "https://facebook.com",
          }, // column 2
        ], // row 1
      ], // Many many rows
    },
  });
}

module.exports = start;
