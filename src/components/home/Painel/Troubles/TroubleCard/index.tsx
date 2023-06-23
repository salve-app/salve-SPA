import { PropsWithChildren } from 'react'
import TroubleLayout from '../TroubleLayout'
import { Save } from '@/lib/utils/protocols/saves'
import {
  formatAddressToString,
  getOfferingName,
  getRequesterName,
  getSaveStatus,
} from '@/lib/utils/helpers/saves'

export default function TroubleCard({
  children,
  save,
}: PropsWithChildren<TroubleProps>) {
  const saveCategoriesColors = {
    Suave: 'text-green-500',
    'Da pra aguentar': 'text-yellow-500',
    Urgente: 'text-red-600',
  }

  return (
    <TroubleLayout>
      <div className="relative flex h-full w-full flex-col items-start justify-between rounded-lg p-5">
        <h3 className="font-alt text-2xl font-bold text-emphasis">
          {save.description}
        </h3>
        <span
          className={`absolute right-2 top-2 font-bold ${
            saveCategoriesColors[save.category.name]
          }`}
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

interface TroubleProps {
  save: Save
  ref?: any
}
