import { useTranslate } from "../hooks/useTranslate";
import { userService } from "../services/user.service";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { UserDocument } from "../types/user.types";
import { Scene } from "./default.scene";

export class SetAgeScene extends Scene {
  constructor(public ctx: CustomContext, public user: UserDocument) {
    super(ctx, user);
  }

  async init() {
    this.changeScene(Scenes.Start);
  }

  async enter() {
    const text = "Укажите свой возраст";
    await this.ctx.reply(text);
  }

  async handler() {
    if (!this.textPayload) {
      return this.ctx.reply(useTranslate(Texts.ErrorTypeMsg, this.ctx));
    }

    if (this.textPayload) {
      const age = Number(this.textPayload);

      if (isNaN(age)) {
        return this.ctx.reply(useTranslate(Texts.ErrorTypeMsg, this.ctx));
      }

      await userService.updateAge(age, this.user);
      // await this.next();
    }
  }
}
