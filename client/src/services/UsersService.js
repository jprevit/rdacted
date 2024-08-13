import { AppState } from "../AppState.js"
import { User } from "../models/User.js"
import { api } from "./AxiosService.js"

class UsersService{
    async getUsersByChatId(chatId) {
        const res = await api.get(`api/users/${chatId}`)
        const users = res.data.map(user => new User(user))
        AppState.chatUsers = users
    }
    async createUser(chatFormData, createdChat) {
       const user = await api.post(`api/users/${createdChat.data.id}`, chatFormData)
       return user
    }

}

export const  usersService = new UsersService