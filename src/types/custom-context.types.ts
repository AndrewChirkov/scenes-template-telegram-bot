import I18n from "telegraf-i18n";
import { TelegrafContext } from "telegraf/typings/context";

export interface CustomContext extends TelegrafContext {
  i18n: I18n;
}
