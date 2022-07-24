import userService from "../services/user.service";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { Texts } from "../types/texts.types";
import { User } from "../types/user.types";
import { Scene } from "./default.scene";
import { SelectLanguageScene } from "./select-language.scene";

export class StartScene extends Scene {
  constructor(public ctx: CustomContext, public user: User) {
    super(ctx, user);
  }

  async init() {
    await this.changeScene(Scenes.Start);
  }

  async enter() {
    const user = await userService.register(this.ctx);

    if (user) {
      await this.enterMessage();
      await this.next(SelectLanguageScene);
    }
  }

  async handler() {}

  private async enterMessage() {
    const text = this.ctx.i18n.t(Texts.Start);

    await this.ctx.reply(text);
  }
}
