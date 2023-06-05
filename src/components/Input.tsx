import { InputHTMLAttributes } from 'react'

export function InterativeInput({
  placeholder,
  name,
  type,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative mb-2">
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        className="peer h-12 w-full rounded pl-5 pt-3 placeholder-transparent placeholder-shown:border-none focus:outline-none"
      />
      <label
        htmlFor={name}
        className="absolute left-5 top-1 cursor-text text-xs text-emphasis
        opacity-50 transition-all peer-placeholder-shown:top-3
        peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
      >
        {placeholder}
      </label>
    </div>
  )
}

export function NormalInput({
  placeholder,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative w-[min(100%,_440px)]">
      <input
        id="inpute"
        type="text"
        placeholder={placeholder}
        className="peer h-12 w-full rounded pl-5 pt-3 placeholder-transparent placeholder-shown:border-none focus:outline-none"
      />
      <label
        htmlFor="inpute"
        className="absolute left-5 top-1 cursor-text text-xs text-emphasis
          opacity-50 transition-all peer-placeholder-shown:top-3
          peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs"
      >
        {placeholder}
      </label>
    </div>
  )
}
