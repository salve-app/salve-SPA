import { ChatListItem } from '@/lib/utils/protocols/chat'
import ChatListCard from './ChatListCard'

export default function ChatList({ chatList }: ChatListProps) {
  return (

    <ul className="scrollbar h-5/6 overflow-auto">
        {chatList.map(chat=><ChatListCard key={chat.id} chat={chat}/>)}
    </ul>

  )
}

interface ChatListProps {
  chatList: Array<ChatListItem>
}
