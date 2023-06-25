import { sendMessage } from '@/lib/services/saveApi'
import { IoMdSend } from '@react-icons/all-files/io/IoMdSend'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

export default function InputBox({
  chatId,
  saveId,
  token,
  updateChatMessages,
}: InputBoxProps) {
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const body = {
      chatId,
      message,
    }

    try {
      await sendMessage(saveId, body, token)

      setMessage('')
      updateChatMessages()
    } catch (error) {
      toast.error('Não foi possível enviar a mensagem!')
    }
  }

  return (
    <footer className="py-2">
      <form onSubmit={handleSubmit} className="flex items-center gap-4 px-6">
        <input
          type="text"
          className="scrollbar h-8 flex-1
          resize-none
          font-bold
          text-emphasis
          outline-none
          placeholder:font-thin placeholder:italic placeholder:text-emphasis placeholder:opacity-60"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Envie uma mensagem..."
          required
        />
        <button className="flex h-10 items-center justify-center rounded-full text-2xl text-emphasis hover:text-dark-main">
          <IoMdSend />
        </button>
      </form>
    </footer>
  )
}

interface InputBoxProps {
  chatId: number
  saveId: number
  token: string
  updateChatMessages: () => void
}
