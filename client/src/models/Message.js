export class Message{
    constructor(data){
        this.id = data.id
        this.chatId = data.chatId
        this.creatorId = data.creatorId
        this.content = data.content
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}