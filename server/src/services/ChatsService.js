import { dbContext } from "../db/DbContext.js"

class ChatsService{
    async createChat(chatData) {
        const chat = await dbContext.Chat.create(chatData)
        return chat
    }
    
    async getChat(chatId) {
     const chat = await dbContext.Chat.findOne({name: chatId})
     return chat
    }
}

export const chatsService = new ChatsService