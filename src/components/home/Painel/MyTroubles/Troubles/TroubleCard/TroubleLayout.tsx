import { PropsWithChildren } from 'react'

export default function TroubleLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-72 w-[min(100%,_541px)] rounded-lg border shadow-[0px_0px_6px_rgba(15,80,46,0.25)]">
      {children}
    </div>
  )
}
