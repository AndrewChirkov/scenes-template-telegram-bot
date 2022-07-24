import mongoose from "mongoose";
import { User } from "../../types/user.types";
import { userSchema } from "../schemas/user.schema";

export default mongoose.model<User>("users", userSchema);
