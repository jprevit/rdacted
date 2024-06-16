import { dbContext } from "../db/DbContext.js"

class MessagesService {
    async createMessage(messageData) {
        const message = await dbContext.Message.create(messageData)
        return message
    }

}

export const messagesService = new MessagesService