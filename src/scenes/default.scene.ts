import userModel from "../database/models/user.model";
import { CustomContext } from "../types/custom-context.types";
import { Scenes } from "../types/scenes.types";
import { UserDocument } from "../types/user.types";

export class Scene {
  protected textPayload: string;
  protected queryPayload: string;
  protected telegramId: number;

  constructor(public ctx: CustomContext, public user: UserDocument) {
    this.textPayload = ctx.message?.text;
    this.queryPayload = ctx.callbackQuery?.data;
    this.telegramId = ctx.from?.id;
    this.user = user;
  }

  async getActualUser() {
    return userModel.findOne({ telegramId: this.telegramId });
  }

  async next(NextScene: any) {
    try {
      const user = await this.getActualUser();
      const newScene = new NextScene(this.ctx, user);

      newScene.init();
      newScene.enter();
    } catch (e) {
      console.log(e);
    }
  }

  async changeScene(scene: Scenes) {
    await userModel.updateOne(
      { telegramId: this.telegramId },
      {
        "state.scene": scene,
      }
    );
  }

  async init(): Promise<any> {}

  async enter(): Promise<any> {}

  async handler(): Promise<any> {}
}
