import Button from '../Button'
import { InterativeInput as Input } from '../Input'

export default function Form() {
  return (
    <form className="flex w-[min(100%,_440px)] flex-col items-center gap-6">
      <div className="w-full">
        <Input placeholder={`E-mail ou nome de usuário`} name={'email'} required/>
        <Input placeholder={`Senha`} type={'password'} name={'senha'} required/>
        <p className=" flex items-center gap-1 ">
          <input
            type="checkbox"
            className="border-1 h-3 w-3 cursor-pointer rounded accent-emphasis"
            id="remind"
          />
          <label
            className="cursor-pointer text-xs text-emphasis"
            htmlFor="remind"
          >
            Lembrar-me
          </label>
        </p>
      </div>
      <Button>Entrar</Button>
    </form>
  )
}
