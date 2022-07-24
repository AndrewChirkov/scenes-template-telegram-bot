import { Keyboard } from "telegram-keyboard";
import { useTranslate } from "../hooks/useTranslate";
import { userService } from "../services/user.service";
import { Buttons } from "../types/buttons.types";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { UserDocument } from "../types/user.types";
import { Scene } from "./default.scene";

export class SetNicknameScene extends Scene {
  constructor(public ctx: CustomContext, public user: UserDocument) {
    super(ctx, user);
  }

  async init() {
    this.changeScene(Scenes.Start);
  }

  async enter() {
    const text = "Введите свое имя или Ваш псевдоним";
    const buttons = [
      this.ctx.i18n.t(Buttons.Template),
      this.ctx.i18n.t(Buttons.Template),
    ];
    const keyboard = Keyboard.make(buttons).reply();

    await this.ctx.reply(text, keyboard);
  }

  async handler() {
    if (!this.textPayload) {
      return this.ctx.reply(useTranslate(Texts.ErrorTypeMsg, this.ctx));
    }

    if (this.textPayload) {
      await userService.updateNickName(this.textPayload, this.user);
      // await this.next();
    }
  }
}
