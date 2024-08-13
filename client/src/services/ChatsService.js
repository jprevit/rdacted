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
        debugger
        chatFormData.chatId = createdChat.data.id
        // console.log('created', createdChat.data);
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
        joinData.id = chat.data.id
        // console.log('joindata', joinData);
        // debugger
        const user = await usersService.createUser(joinData, chat)
        console.log('user?', user.data);
        AppState.activeUser = new User(user.data)
        AppState.activeChat = chat.data
        return chat
    }

}

export const chatsService = new ChatsService