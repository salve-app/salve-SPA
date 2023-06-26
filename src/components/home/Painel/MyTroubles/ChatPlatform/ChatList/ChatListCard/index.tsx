import { ChatListItem } from '@/lib/utils/protocols/chat'

export default function ChatListCard({ chat }: ChatListCardProps) {
  return (
    <div className="cursor-pointer border-b px-6 py-4 text-emphasis hover:bg-zinc-200 ">
      <p className="text-alt mb-1 text-xl font-bold">
        {chat.provider.fullName}
      </p>
      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs font-thin italic">
        {chat.lastMessage}
      </p>
    </div>
  )
}

interface ChatListCardProps {
  chat: ChatListItem
}
