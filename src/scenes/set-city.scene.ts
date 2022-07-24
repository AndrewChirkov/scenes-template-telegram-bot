import { useTranslate } from "../hooks/useTranslate";
import { userService } from "../services/user.service";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { UserDocument } from "../types/user.types";
import { Scene } from "./default.scene";

export class SetCityScene extends Scene {
  constructor(public ctx: CustomContext, public user: UserDocument) {
    super(ctx, user);
  }

  async init() {
    this.changeScene(Scenes.Start);
  }

  async enter() {
    const text = "Укажите Ваш город";
    await this.ctx.reply(text);
  }

  async handler() {
    if (!this.textPayload) {
      return this.ctx.reply(useTranslate(Texts.ErrorTypeMsg, this.ctx));
    }

    if (this.textPayload) {
      await userService.updateCity(this.textPayload, this.user);
      // await this.next();
    }
  }
}
