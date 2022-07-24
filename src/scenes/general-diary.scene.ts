import { Keyboard } from "telegram-keyboard";
import { Buttons } from "../types/buttons.types";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { UserDocument } from "../types/user.types";
import { Scene } from "./default.scene";

export class GeneralDiaryScene extends Scene {
  constructor(public ctx: CustomContext, public user: UserDocument) {
    super(ctx, user);
  }

  async init() {
    this.changeScene(Scenes.Start);
  }

  async enter() {
    const text = this.ctx.i18n.t(Texts.Template);
    const buttons = [["Следующая запись"], ["Добавить", "Назад"]];
    const keyboard = Keyboard.make(buttons).reply();

    await this.ctx.reply(text, keyboard);
  }

  async handler() {
    const BTN_NEXT_NOTE = "Следующая запись";
    const BTN_ADD_NOTE = "Добавить";
    const BTN_BACK = "Назад";

    if (!this.textPayload) {
      return this.ctx.reply("нет такого варианта");
    }

    switch (this.textPayload) {
      case BTN_ADD_NOTE:
        return;
    }
  }
}
