import { bot } from "../..";
import messageService from "../services/message.service";
import startService from "../services/start.service";

export const botHandlers = () => {
  bot.start(startService.start);
  bot.on("message", messageService.start);
  bot.on("callback_query", messageService.start);
};
