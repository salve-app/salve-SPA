export interface Chat {
    id: number,
    messages: Array<Message>
}

export interface Message{
    id: number,
    ownerId: number,
    message: string,
    createdAt: Date
}