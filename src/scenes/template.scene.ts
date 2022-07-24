import { Keyboard } from "telegram-keyboard";
import { Buttons } from "../types/buttons.types";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { User } from "../types/user.types";
import { Scene } from "./default.scene";

export class TemplateScene extends Scene {
  constructor(public ctx: CustomContext, public user: User) {
    super(ctx, user);
  }

  async init() {
    this.changeScene(Scenes.Start);
  }

  async enter() {
    const text = this.ctx.i18n.t(Texts.Template);
    const buttons = [
      this.ctx.i18n.t(Buttons.Template),
      this.ctx.i18n.t(Buttons.Template),
    ];
    const keyboard = Keyboard.make(buttons).reply();

    await this.ctx.reply(text, keyboard);
  }

  async handler() {
    const BTN_NEW_ITEM = this.ctx.i18n.t(Buttons.Template);

    if (!this.textPayload) {
    }

    switch (this.textPayload) {
      case BTN_NEW_ITEM:
        return;
    }
  }
}
