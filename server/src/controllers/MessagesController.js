import { messagesService } from "../services/MessagesService.js";
import BaseController from "../utils/BaseController.js";

export class MessagesController extends BaseController{
    constructor(){
        super('api/messages')
        this.router
            .post('/:chatId', this.createMessage)
            .get('/:chatId', this.getMessagesByChat)
    }
    
    async createMessage(req, res, next) {
        try {
            const chatId = req.params.chatId
            const messageData = req.body
            messageData.chatId = chatId
            const message = await messagesService.createMessage(messageData)
            res.send(message) 
        } catch (error) {
            next(error)
        }
    }

    async getMessagesByChat(req, res, next) {
        try {
            const chatId = req.params.chatId
            const messages = await messagesService.getMessagesByChat(chatId)
            res.send(messages)
        } catch (error) {
            next(error)
        }
    }
}