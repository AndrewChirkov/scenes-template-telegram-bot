import { config } from "dotenv";
import Telegraf, { session } from "telegraf";
import I18n from "telegraf-i18n";
import { connectToDatabase } from "./src/database/connect.database";
import path from "path";
import { CustomContext } from "./src/types/custom-context.types";
import { botHandlers } from "./src/handlers/bot.handlers";

config();

connectToDatabase(process.env.MONGO_URL);

export const bot = new Telegraf<CustomContext>(process.env.BOT_TOKEN);

export const i18n = new I18n({
  useSession: true,
  defaultLanguageOnMissing: true,
  directory: path.resolve(__dirname, "locales"),
});

bot.use(session());
bot.use(i18n.middleware());

bot.catch((err: any) => console.log(err));

bot
  .launch()
  .then(() => console.log("[Bot] Bot started"))
  .catch((e) => {
    console.log("[Bot] Error starting");
    console.log(e);
  });

botHandlers();
