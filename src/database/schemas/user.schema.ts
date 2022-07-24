import mongoose from "mongoose";
import { User } from "../../types/user.types";

export const userSchema = new mongoose.Schema<User>({
  userId: { type: Number, required: true, unique: true },
  telegramId: { type: Number, required: true, unique: true },
  nickname: { type: String },
  createdBy: { type: Number, required: true },
  age: { type: Number },
  city: { type: String },
  state: { type: Object },
});
