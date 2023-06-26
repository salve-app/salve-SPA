export interface Chat {
  id: number
  messages: Array<Message>
}
export interface ChatListItem {
  id: number
  provider: {
    id: number
    fullName: string
  }
  lastMessage: string
}

export interface Message {
  id: number
  ownerId: number
  message: string
  createdAt: Date
}
