const TelegramApi = require("node-telegram-bot-api");

const token = process.env.API_KEY;

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "hi");
});
