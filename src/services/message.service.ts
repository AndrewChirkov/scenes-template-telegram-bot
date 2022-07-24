import { scenesRouter } from "../scenes/scenes-router/scenes-router";
import { CustomContext } from "../types/custom-context.types";
import userService from "./user.service";

class MessageService {
  async start(ctx: CustomContext) {
    try {
      const user = await userService.getUser(ctx.from.id);

      if (user) {
        return scenesRouter(ctx, user.state.scene, user);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export default new MessageService();
