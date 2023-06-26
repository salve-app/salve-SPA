import { Save } from '@/lib/utils/protocols/saves'
import { useEffect, useState } from 'react'
import Header from '../../../Chat/Header'
import MessagesBox from '../../../Chat/MessagesBox'
import InputBox from '../../../Chat/InputBox'
import { Chat } from '@/lib/utils/protocols/chat'
import { toast } from 'react-toastify'
import { acceptProvider, getMessagesByChatId } from '@/lib/services/chatApi'

export default function Chat({
  chatId,
  save,
  token,
  updateChatMessages,
  submitted,
}: ChatProps) {
  const [chat, setChat] = useState<Chat>()

  useEffect(() => {
    async function fetchChatData() {
      try {
        const { chat } = await getMessagesByChatId(chatId, token)

        setChat(chat)
      } catch (error) {
        console.log(error)
      }
    }

    fetchChatData()
  }, [submitted, chatId])

  async function handleAcceptProviderClick() {
    try {
      await acceptProvider(chatId, token)

      toast.success('lagalaga')
    } catch (error) {
      toast.error('Não foi possível aceitar o salve!')
    }
  }

  return (
    <>
      <Header
        profileName={chat?.provider.fullName || ''}
        isChatRequester={true}
        handleAcceptProviderClick={handleAcceptProviderClick}
      />
      <MessagesBox messages={chat?.messages || []} />
      <InputBox
        chatId={chatId}
        saveId={save.id}
        token={token}
        updateChatMessages={updateChatMessages}
      />
    </>
  )
}

interface ChatProps {
  chatId: number
  save: Save
  token: string
  updateChatMessages: () => void
  submitted: boolean
}
