import userModel from "../database/models/user.model";
import { CustomContext } from "../types/custom-context.types";
import { UserDocument } from "../types/user.types";
import { Languages } from "./../types/languages.types";

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
    return userModel.findOne({ telegramId });
  }

  async updateLanguage(languageCode: Languages, userDoc: UserDocument) {
    return userModel.updateOne({ userId: userDoc.userId }, { "state.language": languageCode });
  }

  async updateNickName(nickname: string, userDoc: UserDocument) {
    return userModel.updateOne({ userId: userDoc.userId }, { nickname });
  }

  async updateAge(age: number, userDoc: UserDocument) {
    return userModel.updateOne({ userId: userDoc.userId }, { age });
  }

  async updateCity(city: string, userDoc: UserDocument) {
    return userModel.updateOne({ userId: userDoc.userId }, { city });
  }
}

export const userService = new UserService();
