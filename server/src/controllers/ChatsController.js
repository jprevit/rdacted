import { chatsService } from "../services/ChatsService.js";
import BaseController from "../utils/BaseController.js";

export class ChatsController extends BaseController{
    constructor(){
        super('api/chats')
        this.router
            .post('', this.createChat)
    }
    async createChat(req, res, next) {
        try {
            const chatData = req.body
            const chat = await chatsService.createChat(chatData)
            res.send(chat)
        } catch (error) {
            next(error)
        }
    }
}