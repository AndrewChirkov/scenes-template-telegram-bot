import mongoose from "mongoose";

export const connectToDatabase = (MONGO_URL: string) => {
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("[MongoDB] Connected!");
    })
    .catch((e) => {
      console.log("[MongoDB] Error connect");
      console.log(e);
    });
};
