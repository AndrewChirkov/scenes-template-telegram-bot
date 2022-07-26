import { Keyboard } from "telegram-keyboard";
import { userService } from "../services/user.service";
import { Buttons } from "../types/buttons.types";
import { CustomContext } from "../types/custom-context.types";
import { Languages } from "../types/languages.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { UserDocument } from "../types/user.types";
import { Scene } from "./default.scene";
import { SetNicknameScene } from "./set-nickname.scene";

export class SelectLanguageScene extends Scene {
  constructor(public ctx: CustomContext, public user: UserDocument) {
    super(ctx, user);
  }

  async enter() {
    const text = "🌐 Select your language";
    const buttons = [Buttons.RuLang];
    const keyboard = Keyboard.make(buttons).reply();

    await this.ctx.reply(text, keyboard);
  }

  async init() {
    await this.changeScene(Scenes.SelectLanguage);
  }

  async handler() {
    const BTN_LANGUAGE_RU = "🇷🇺";

    switch (this.textPayload) {
      case BTN_LANGUAGE_RU:
        this.ctx.i18n.locale("RU");
        await userService.updateLanguage(Languages.RU, this.user);
        await this.next(SetNicknameScene);
        break;
    }
  }
}
