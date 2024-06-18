/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { User } from "../models/User.js";
import { api } from "./AxiosService.js"
import { usersService } from "./UsersService.js"

class ChatsService{
    async createChat(chatData) {
        const chat = await api.post('api/chats', chatData)
        console.log('created', chat);
        const ownerResponse = await usersService.createUser(chatData)
        const owner = new User(ownerResponse.data)
        console.log('created owner', owner);
        AppState.activeuser = owner
        return chat
    }


}

export const chatsService = new ChatsService