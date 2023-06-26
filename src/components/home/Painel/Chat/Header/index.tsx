import { AiOutlineLike } from '@react-icons/all-files/ai/AiOutlineLike'
import { toast } from 'react-toastify'

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
  handleAcceptProviderClick,
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
            onClick={() => handleAcceptProviderClick()}
            className="flex cursor-pointer items-center gap-2 rounded-3xl bg-emphasis px-4 py-2 font-alt font-bold text-alternative hover:opacity-80"
          >
            Aceitar salvador
            <div className="rounded-full bg-alternative p-1 text-xl text-emphasis">
              <AiOutlineLike />
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
  handleAcceptProviderClick: () => void
  saveDescription?: string
  saveCategory?: string
  isChatRequester?: boolean
}
