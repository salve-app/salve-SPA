import Button from '../Button'
import { NormalInput as Input } from '../Input'
import ProgressiveDots from './ProgressiveDots'

export default function Form() {
  return (
    <form className="flex w-full flex-col gap-5">
      <Input
        placeholder={`Digite seu nome de usuário`}
        name={'username'}
        label={'Como gostaria de ser chamado?'}
        required
      />
      <Input
        placeholder={`Digite seu email`}
        name={'email'}
        label={'Qual é o seu email?'}
        type={'email'}
        required
      />
      <Input
        placeholder={`Digite sua senha`}
        name={'password'}
        label={'Escolha uma senha'}
        type={'password'}
        required
      />
      <Input
        placeholder={`Digite sua senha novamente`}
        name={'confirmedPassword'}
        label={'Confirme sua senha'}
        type={'password'}
        required
      />
      <ProgressiveDots stage={1} />
      <Button>Continuar a inscrição</Button>
    </form>
  )
}
