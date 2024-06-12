import { Schema } from "mongoose";

export const MessageSchema = new Schema(
    {
        chatId: {type: String, required: true},
        creatorId: {type: Schema.ObjectId, required: true},
        content: {type: String, required: true}
    },
    {timestamps:true, toJSON: {virtuals:true}}
)