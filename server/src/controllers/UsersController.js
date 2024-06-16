import { usersService } from "../services/UsersService.js";
import BaseController from "../utils/BaseController.js";

export class UsersController extends BaseController{
    constructor(){
        super('api/users')
        this.router
            .post('/:chatId', this.createUser)
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
}