import mongoose from "mongoose";
import { Languages } from "./languages.types";
import { Scenes } from "./scenes.types";

export interface User {
  userId: number;
  telegramId: number;
  nickname: string;
  createdBy: number;
  age: number;
  city: string;
  state: {
    language: Languages;
    scene: Scenes;
  };
}

export type UserProfile = Partial<Omit<User, "state">>;

export type UserDocument = User & mongoose.Document;
