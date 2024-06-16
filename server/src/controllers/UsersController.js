import { usersService } from "../services/UsersService.js";
import BaseController from "../utils/BaseController.js";

export class UsersController extends BaseController{
    constructor(){
        super('api/users')
        this.router
            .post('/:chatId', this.createUser)
            .get('/:chatId', this.getUsers)
    }
    async createUser(req, res, next) {
        try {
            const chatId = req.params.chatId
            const userData = req.body
            userData.chatId = chatId
            const user = await usersService.createUser(userData)
            res.send(user)
        } catch (error) {
            next(error)
        }
    }
    async getUsers(req, res, next) {
        try {
            const chatId = req.params.chatId
            const users = await usersService.getUsers(chatId)
            res.send(users)
        } catch (error) {
            next(error)
        }
    }
}