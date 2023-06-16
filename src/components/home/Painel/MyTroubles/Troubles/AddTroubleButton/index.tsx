import {
  ButtonHTMLAttributes,
  HtmlHTMLAttributes,
  PropsWithChildren,
} from 'react'
import TroubleLayout from '../TroubleCard/TroubleLayout'
import { BsPlusCircle } from 'react-icons/bs'

export default function AddTroubleButton({
  onClick: openModalForm,
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <TroubleLayout>
      <button
        onClick={openModalForm}
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-md opacity-20 transition-colors duration-200 hover:bg-zinc-300"
      >
        <span className="text-8xl font-thin">
          <BsPlusCircle />
        </span>
        <span className="text-3xl font-thin">Clique para chamar um Salve!</span>
      </button>
    </TroubleLayout>
  )
}
