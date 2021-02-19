require("dotenv").config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOKEN);

global.Bot = bot;

// Required, you will need to let the user know he/she had started the bot
bot.command(`/start`, require("./commands/start"));

// a test command, will not shown in the directory
bot.command("/test", (ctx) => {
  ctx.reply("Test command");
});

bot.on("text", (ctx) => {
  console.log(ctx.message);
  // All your logic here, you can have a machine learning model to listen on this message and reply
  let message = ctx.message.text;
  if (message.includes("images")) {
    ctx.replyWithPhoto({
      source: "./photos/smartmockups_klbs5ebo.jpg",
      filename: "random.jpg",
    });
    ctx.reply("Here is a random image!");
    return;
  }
  ctx.reply("Echoing your message:" + ctx.message.text);
});
console.log("Bot listening commands");
bot.launch();
