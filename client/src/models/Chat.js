export class Chat{
    constructor(data){
        this.id = data.id
        this.joinCode = data.joinCode
        this.name = data.name
        this.createdAt = data.createdAt
        this.updatedAt = data.updatedAt
    }
}