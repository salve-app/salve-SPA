'use client'

import { FormEventHandler } from 'react'
import Button from '../Button'
import { NormalInput as Input } from '../Input'
import ProgressiveDots from './ProgressiveDots'
import { useRouter } from 'next/navigation'

export default function Form() {
  const router = useRouter()


  async function handleSubmit(e: any) {
    e.preventDefault()

    router.push(`/sign-in`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
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
      {/* <ProgressiveDots stage={1} /> */}
      <Button>Inscrever-se</Button>
    </form>
  )
}
