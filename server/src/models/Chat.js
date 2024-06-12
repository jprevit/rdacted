import { Schema } from "mongoose";

export const ChatSchema = new Schema(
    {
        joinCode: {type: String, required: true}
    },{
        timestamps: true, toJSON:{ virtuals: true }
    }
)