export class User {
    constructor(data){
        this.id = data.id
        this.alias = data.alias
        this.chatId = data.chatId
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}