import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { usersService } from "./UsersService.js"

class ChatsService{
    async createChat(chatData) {
        const chat = await api.post(`${chatData.name}`, chatData)
        const owner = await usersService.createUser(chatData)
        AppState.activeuser = owner
        return chat
    }


}

export const chatsService = new ChatsService