import { scrollToBottom } from '@/lib/utils/helpers/scrolling'
import { RefObject, useEffect, useRef } from 'react'

export default function Message({
  message,
  isCurrentUser,
  lastMessage,
  createdAt,
}: MessageProps) {
  const lastMessageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom(lastMessageRef.current)
  }, [])

  return (
    <div
      className={`relative w-[min(60%,_520px)] break-words bg-dark-main px-4 py-2 text-alternative ${
        isCurrentUser ? 'self-end rounded-b-2xl rounded-s-2xl' : 'self-start'
      }`}
      ref={lastMessage ? lastMessageRef : undefined}
    >
      {message}
      <div
        className={`absolute top-0 h-0 w-0 ${
          isCurrentUser
            ? '-right-2 border-b-[10px] border-l-8 border-b-transparent border-l-dark-main'
            : '-left-2 border-b-[10px] border-r-8 border-b-transparent border-r-dark-main'
        }`}
      ></div>
    </div>
  )
}

interface MessageProps {
  message: string
  isCurrentUser: boolean
  createdAt: Date
  lastMessage: boolean
}
