import { api } from "./AxiosService.js"

class UsersService{
    async createUser(chatData) {
       const user = await api.post(`${chatData.name}`, chatData)
       return user
    }

}

export const  usersService = new UsersService