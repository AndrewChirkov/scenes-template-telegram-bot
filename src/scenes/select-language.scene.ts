import { Keyboard } from "telegram-keyboard";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { User } from "../types/user.types";
import { Scene } from "./default.scene";

export class SelectLanguageScene extends Scene {
  constructor(public ctx: CustomContext, public user: User) {
    super(ctx, user);
  }

  async init() {
    await this.changeScene(Scenes.SelectLanguage);
  }

  async handler() {
    const BTN_LANGUAGE_RU = "🇷🇺";

    switch (this.textPayload) {
      case BTN_LANGUAGE_RU:
        // scene go to main bot
    }
  }
}
