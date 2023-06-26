import { UserJwtPayload } from '@/lib/utils/protocols/resources'
import { getCookie } from 'cookies-next'
import decode from 'jwt-decode'
import Message from './Message'
import { RefObject } from 'react'
import { Message as singleMessage } from '@/lib/utils/protocols/chat'

export default function MessagesBox({ messages }: MessagesProps) {
  const token = getCookie('token')?.toString() || ''

  const { profileId } = decode(token) as UserJwtPayload

  const lastMessageIndex = messages.length - 1

  return (
    <main className="scrollbar flex flex-1 flex-col gap-2 overflow-auto px-6 py-1">
      {!messages.length ? (
        <p className="flex h-full w-full items-center justify-center text-xl font-thin text-emphasis opacity-40">
          Inicie uma conversa agora mesmo :)
        </p>
      ) : (
        messages.map(({ id, message, ownerId, createdAt }, index) => (
          <Message
            key={id}
            message={message}
            isCurrentUser={profileId === ownerId}
            createdAt={createdAt}
            lastMessage={lastMessageIndex === index}
          />
        ))
      )}
    </main>
  )
}

interface MessagesProps {
  messages: Array<singleMessage>
}
