import { Schema } from "mongoose";

export const MessageSchema = new Schema(
    {
        chatId: {type: String, required: true},
        alias: {type: String, required: true},
        creatorId: {type: String, required: true},
        content: {type: String, required: true}
    },
    {timestamps:true, toJSON: {virtuals:true}}
)