import { PropsWithChildren, ReactNode } from 'react'
import TroubleCard from './TroubleCard'
import { OfferingSaves, RequestedSaves } from '@/lib/utils/protocols/saves'

export default function Troubles({
  children,
  title,
  saves,
}: PropsWithChildren<TroublesProps>) {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-emphasis">
        {title}
      </h2>
      <div className="flex w-full justify-center">
        <ul className="h-[calc(550px)] w-[min(100%,_541px)] overflow-auto scrollbar">
          {saves.map((s) => (
            <TroubleCard key={s.id} save={s} />
          ))}
          {children}
        </ul>
      </div>
    </div>
  )
}

interface TroublesProps {
  title: ReactNode
  saves: Array<OfferingSaves | RequestedSaves>
}
