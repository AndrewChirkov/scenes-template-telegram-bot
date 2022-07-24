import { scenesRouter } from "../scenes/scenes-router/scenesRouter";
import { StartScene } from "../scenes/start.scene";
import { CustomContext } from "../types/custom-context.types";
import userService from "./user.service";

class StartService {
  async start(ctx: CustomContext) {
    try {
      const user = await userService.getUser(ctx.from.id);

      if (user) {
        return scenesRouter(ctx, user.state.scene, user);
      }

      const scene = new StartScene(ctx, user);
      scene.enter();
    } catch (e) {
      console.log(e);
    }
  }
}

export default new StartService();
