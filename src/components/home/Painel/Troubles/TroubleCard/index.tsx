import { PropsWithChildren } from 'react'
import TroubleLayout from '../TroubleLayout'
import { Save } from '@/lib/utils/protocols/saves'

export default function TroubleCard({
  children,
  save,
}: PropsWithChildren<TroubleProps>) {
  return (
    <TroubleLayout>
      <div className="relative flex h-full w-full flex-col items-start justify-between rounded-lg p-5">
        <h3 className="font-sans text-2xl font-bold text-emphasis">
          {save.description}
        </h3>
        <span
          className={`absolute right-2 top-2 font-bold ${getCategoryTextColor(
            save.category.name,
          )}`}
        >
          {save.category.name}
        </span>
        <div className="flex w-full flex-wrap justify-between gap-2">
          <span className="font-sans text-base text-emphasis">
            <span className="font-bold">Solicitante: </span>
            <span className="font-light">{getRequesterName(save)}</span>
          </span>
          <span className="font-sans text-base text-emphasis">
            <span className="font-bold">Salvador: </span>
            <span className="font-light">{getOfferingName(save)}</span>
          </span>
        </div>
        <div className="w-full">
          <span className="font-sans text-base text-emphasis">
            <span className="font-bold">Endereço: </span>
            <span className="font-light">{formatAddressToString(save)}</span>
          </span>
        </div>
        <div className="w-full">
          <span className="font-sans text-base text-emphasis">
            <span className="font-bold">Status: </span>
            <span className="font-light">{getSaveStatus(save)}</span>
          </span>
        </div>
      </div>
    </TroubleLayout>
  )
}
function getRequesterName(save: Save) {
  return save.requester ? save.requester.fullName : 'Você'
}

function getOfferingName(save: Save) {
  if (save.provider) return save.provider.fullName

  return save.status === 'CREATED' ? 'Pendente' : 'Você'
}

function formatAddressToString(save: Save) {
  const { cep, city, complement, neighborhood, street, state, number } =
    save.address

  return `Rua ${street}, ${number} - ${neighborhood}, ${city} - ${state}, ${cep}${
    complement ? `( ${complement} )` : ''
  }`
}

function getSaveStatus(save: Save) {
  switch (save.status) {
    case 'CREATED':
      return 'Aguardando o salve...'

    case 'IN_PROGRESS':
      return 'Em andamento'

    case 'COMPLETED':
      return 'Fechada'
  }
}

function getCategoryTextColor(category: string) {
  switch (category) {
    case 'Suave':
      return 'text-green-500'

    case 'Da pra aguentar':
      return 'text-yellow-500'

    case 'Urgente':
      return 'text-red-600'
  }
}

interface TroubleProps {
  save: Save
}
