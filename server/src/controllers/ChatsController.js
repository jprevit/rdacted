import { chatsService } from "../services/ChatsService.js";
import BaseController from "../utils/BaseController.js";

export class ChatsController extends BaseController{
    constructor(){
        super('api/chats')
        this.router
            .post('', this.createChat)
            .get('/join/:joinCode', this.getChatByJoinCode)
            .get('/:chatId', this.getChatByName)
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

    async getChatByName(req, res, next) {
        try {
            const chatId = req.params.chatId
            const chat = await chatsService.getChatByName(chatId)
            res.send(chat)
        } catch (error) {
            next(error)
        }
    }

    async getChatByJoinCode(req, res, next){
        try {
            const joinCode = req.params.joinCode
            const chat = await chatsService.getChatbyJoinCode(joinCode)
            res.send(chat)
        } catch (error) {
            next(error)
        }
    }
}