import { api } from "./AxiosService.js"
import { usersService } from "./UsersService.js"

class ChatsService{
    async createChat(chatData) {
        const chat = await api.post(`${chatData.name}`, chatData)
        const owner = usersService.createUser(chatData)
        return chat
    }


}

export const chatsService = new ChatsService