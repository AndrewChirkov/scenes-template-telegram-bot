import userModel from "../database/models/user.model";
import { CustomContext } from "../types/custom-context.types";

class UserService {
  async register(ctx: CustomContext) {
    const isExist = await this.checkExist(ctx);

    if (!isExist) {
      return userModel.create({
        userId: (await userModel.count()) + 1,
        telegramId: ctx.from.id,
        createdBy: Date.now(),
        state: {},
      });
    } else {
      return null;
    }
  }

  async checkExist(ctx: CustomContext) {
    const telegramId = ctx.from.id;
    const user = await userModel.findOne({ telegramId });

    if (user) {
      return true;
    } else {
      return false;
    }
  }

  async getUser(telegramId: number) {
    return await userModel.findOne({ telegramId });
  }
}

export default new UserService();
