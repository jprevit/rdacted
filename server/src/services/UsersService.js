import { dbContext } from "../db/DbContext.js"

class UsersService{
    
    async createUser(userData) {
        const user = await dbContext.User.create(userData)
        return user
    }

    async getUsersByChat(chatId) {
        const users = await dbContext.User.find({chatId})
        return users
    }
}

export const usersService = new UsersService