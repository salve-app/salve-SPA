import { PropsWithChildren, ReactNode } from 'react'
import TroubleCard from './TroubleCard'
import AddTroubleButton from './AddTroubleButton'

export default function Troubles({
  children,
  title,
}: PropsWithChildren<TroublesProps>) {
  return (
    <div className="flex w-full flex-col items-center">
      <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-emphasis">
        {title}
      </h2>
      <div className="flex w-full flex-col items-center gap-2">{children}</div>
    </div>
  )
}

interface TroublesProps {
  title: ReactNode
}
