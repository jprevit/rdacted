import { dbContext } from "../db/DbContext.js"

class ChatsService{
    async createChat(chatData) {
        const chat = await dbContext.Chat.create(chatData)
        return chat
    }
    
    async getChatById(chatId) {
        const chat = await dbContext.Chat.findById(chatId)
        return chat
    }
    async getChatbyJoinCode(joinCodeData) {
        const chat = await dbContext.Chat.findOne({joinCode: joinCodeData})
        return chat
    }
}

export const chatsService = new ChatsService