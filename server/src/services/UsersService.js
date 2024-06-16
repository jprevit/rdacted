import { dbContext } from "../db/DbContext.js"

class UsersService{
    async createUser(userData) {
        const user = await dbContext.User.create(userData)
        return user
    }

}

export const usersService = new UsersService