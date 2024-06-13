import mongoose from "mongoose";

const Schema = mongoose.Schema

export const UserSchema = new Schema(
    {
        alias:{type: String, required:true},
        chatId: { type: String, required: true}
    },{timestamps:true, toJSON:{virtuals:true}});

    UserSchema.index({alias:1, chatId:1},{unique: true})