import { CustomContext } from "../types/custom-context.types";

export const useTranslate = (key: string, ctx: CustomContext, data?: any) => {
  return ctx.i18n.t(key, data);
};
