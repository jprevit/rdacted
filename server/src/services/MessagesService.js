import { dbContext } from "../db/DbContext.js"

class MessagesService {
    async createMessage(messageData) {
        const message = await dbContext.Message.create(messageData)
        return message
    }
    
    async getMessagesByChat(chatId) {
        const messages = await dbContext.Message.find({chatId})
        return messages
    }
}

export const messagesService = new MessagesService