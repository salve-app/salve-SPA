import { ButtonHTMLAttributes } from 'react'

export default function Button({
  children,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="h-12 w-full bg-emphasis text-alternative rounded font-alt text-xl hover:opacity-90 transition-all">
      {children}
    </button>
  )
}
