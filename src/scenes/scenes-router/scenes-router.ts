import { CustomContext } from "../../types/custom-context.types";
import { Scenes } from "../../types/scenes.types";
import { UserDocument } from "../../types/user.types";
import { SelectLanguageScene } from "../select-language.scene";
import { StartScene } from "../start.scene";

export const scenesRouter = (
  ctx: CustomContext,
  currentScene: Scenes,
  user: UserDocument
) => {
  switch (currentScene) {
    case Scenes.Start:
      return new StartScene(ctx, user).handler();
    case Scenes.SelectLanguage:
      return new SelectLanguageScene(ctx, user).handler();
  }
};
