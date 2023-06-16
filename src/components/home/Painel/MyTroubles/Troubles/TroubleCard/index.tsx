import { PropsWithChildren } from 'react'

export default function TroubleCard({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="flex text-2xl font-bold text-emphasis items-center gap-2">{children}</h2>
      <div className="flex flex-col gap-2 w-full">qwe</div>
    </div>
  )
}
