import { Keyboard } from "telegram-keyboard";
import { Buttons } from "../types/buttons.types";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { UserDocument } from "../types/user.types";
import { Scene } from "./default.scene";

export class SelectDiaryScene extends Scene {
  constructor(public ctx: CustomContext, public user: UserDocument) {
    super(ctx, user);
  }

  async init() {
    this.changeScene(Scenes.Start);
  }

  async enter() {
    const text = "Выберите тип дневника. Общий - пользователи обмениваются событиями, произошедшими за сегодняшний день.\n Личный - ваш личный, приватный дневник.";
    const buttons = ["Общий дневник"];
    const keyboard = Keyboard.make(buttons).reply();

    await this.ctx.reply(text, keyboard);
  }

  async handler() {
    const BTN_GENERAL_DIARY = "Общий дневник";

    if (!this.textPayload) {
      return this.ctx.reply("нет такого варианта");
    }

    switch (this.textPayload) {
      case BTN_GENERAL_DIARY:
        // this.next()
        return;
    }
  }
}
