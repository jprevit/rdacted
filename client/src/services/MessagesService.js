import { AppState } from "../AppState.js"
import { Message } from "../models/Message.js"
import { api } from "./AxiosService.js"

class MessagesService{
    async getMessages(chatId) {
        const messages = await api.get(`api/messages/${chatId}`)
        AppState.messages = messages.data.map(message => new Message(message))
    }
    async sendMessage(chatId, messageData) {
        const message = await api.post(`api/messages/${chatId}`, messageData)
        AppState.messages.push(message.data)
    }

}

export const messagesService = new MessagesService