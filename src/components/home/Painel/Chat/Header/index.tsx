import { AiOutlineLike } from '@react-icons/all-files/ai/AiOutlineLike'
import { AiOutlineClockCircle } from '@react-icons/all-files/ai/AiOutlineClockCircle'

const saveCategoriesColors = {
  Suave: 'text-green-500',
  'Da pra aguentar': 'text-yellow-500',
  Urgente: 'text-red-600',
}

export default function Header({
  profileName,
  saveDescription,
  saveCategory,
  isChatRequester,
  handleAcceptSaveClick,
  isAccepted,
}: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b px-6 py-3">
      <div
        className={`flex w-full ${
          !isChatRequester ? 'flex-col gap-1' : 'items-center justify-between'
        }`}
      >
        <span className="font-alt text-xl text-emphasis">{profileName}</span>
        {isChatRequester && (
          <button
            onClick={() => handleAcceptSaveClick()}
            className={`flex items-center gap-2 rounded-3xl bg-emphasis px-4 py-2 font-alt font-bold text-alternative ${
              isAccepted ? 'opacity-50' : 'cursor-pointer hover:opacity-80'
            }`}
            disabled={isAccepted}
          >
            {isAccepted ? 'Aguardando resposta' : 'Aceitar salvador'}
            <div className="rounded-full bg-alternative p-1 text-xl text-emphasis">
              {isAccepted ? <AiOutlineClockCircle /> : <AiOutlineLike />}
            </div>
          </button>
        )}
        {saveDescription && (
          <span className="text-sm font-thin text-emphasis">
            Está precisando de {saveDescription}
          </span>
        )}
      </div>
      {saveCategory && (
        <span className={`font-bold ${saveCategoriesColors[saveCategory]}`}>
          {saveCategory}
        </span>
      )}
    </header>
  )
}

interface ChatHeaderProps {
  profileName: string
  handleAcceptSaveClick: () => void
  isAccepted: boolean
  saveDescription?: string
  saveCategory?: string
  isChatRequester?: boolean
}
