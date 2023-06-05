import { InputHTMLAttributes } from 'react'

export function InterativeInput({
  placeholder,
  name,
  type = 'text',
  required,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="relative mb-2">
      <input
        id={name}
        placeholder={placeholder}
        type={type}
        name={name}
        className="peer h-12 w-full rounded pl-5 pt-3 placeholder-transparent placeholder-shown:border-none focus:outline-none"
        required={required}
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
  label,
  name,
  type = 'text',
  required,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-bold text-emphasis">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-12 w-full rounded pl-5 focus:outline-none"
        required={required}
      />
    </div>
  )
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}
