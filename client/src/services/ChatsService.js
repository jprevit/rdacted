/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { User } from "../models/User.js";
import { api } from "./AxiosService.js"
import { usersService } from "./UsersService.js"

class ChatsService{
    async createChat(chatData) {
        const chat = await api.post('api/chats', chatData)
        // console.log('created', chat.data);
        const ownerResponse = await usersService.createUser(chatData)
        const owner = new User(ownerResponse.data)
        // console.log('created owner', owner);
        AppState.activeUser = owner
        AppState.activeChat = chat.data
        return chat
    }
    
    async joinChat(joinData) {
        const chat = await api.get(`api/chats/join/${joinData.joinCode}`)
        console.log('chat', chat.data||'nothing');
        joinData.name = chat.data.name
        // console.log('joindata', joinData);
        const user = await usersService.createUser(joinData)
        console.log('user?', user.data);
        AppState.activeUser = new User(user.data)
        AppState.activeChat = chat.data
    }

}

export const chatsService = new ChatsService