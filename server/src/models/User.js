import mongoose from "mongoose";

const Schema = mongoose.Schema

export const UserSchema = new Schema(
    {
        alias:{type: String, required:true},
        chatId: { type: String, required: true}
    }
)