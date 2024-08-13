/* eslint-disable no-console */
import { AppState } from "../AppState.js"
import { Chat } from "../models/Chat.js";
import { User } from "../models/User.js";
import { api } from "./AxiosService.js"
import { usersService } from "./UsersService.js"

class ChatsService{
    async getChatById(chatId) {
        const res = await api.get(`api/chats/${chatId}`)
        console.log('getting by Id', res);
        AppState.activeChat = new Chat(res.data)
    }
    async createChat(chatFormData) {
        const createdChat = await api.post('api/chats', chatFormData)
        console.log('created', createdChat.data);
        chatFormData.chatId = createdChat.data.id
        const ownerResponse = await usersService.createUser(chatFormData, createdChat)
        const owner = new User(ownerResponse.data)
        // console.log('created owner', owner);
        AppState.activeUser = owner
        AppState.activeChat = createdChat.data
        return createdChat
    }
    
    async joinChat(joinData) {
        const chat = await api.get(`api/chats/join/${joinData.joinCode}`)
        // console.log('chat', chat.data||'nothing');
        joinData.name = chat.data.name
        // console.log('joindata', joinData);
        const user = await usersService.createUser(joinData)
        console.log('user?', user.data);
        AppState.activeUser = new User(user.data)
        AppState.activeChat = chat.data
        return chat
    }

}

export const chatsService = new ChatsService