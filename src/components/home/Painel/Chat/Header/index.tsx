const saveCategoriesColors = {
  Suave: 'text-green-500',
  'Da pra aguentar': 'text-yellow-500',
  Urgente: 'text-red-600',
}

export default function Header({
  profileName,
  saveDescription,
  saveCategory,
}: ChatHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b px-6 py-3">
      <div className="flex flex-col gap-1">
        <span className="font-alt text-xl text-emphasis">{profileName}</span>
        <span className="text-sm font-thin text-emphasis">
          Está precisando de {saveDescription}
        </span>
      </div>
      <span
        className={`font-bold ${saveCategoriesColors[saveCategory]}`}
      >
        {saveCategory}
      </span>
    </header>
  )
}

interface ChatHeaderProps {
  profileName: string
  saveDescription: string
  saveCategory: string
}
