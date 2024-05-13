const TelegramApi = require("node-telegram-bot-api");

const token = "6557883645:AAEWOZuJRzIms5e56MnSxPCNX0oCLRRgOaA";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  console.log(msg);
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "hi");
});
