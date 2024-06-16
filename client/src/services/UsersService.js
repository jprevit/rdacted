import { api } from "./AxiosService.js"

class UsersService{
    async createUser(data) {
       const user = await api.post(`${data.name}`, data)
       return user
    }

}

export const  usersService = new UsersService