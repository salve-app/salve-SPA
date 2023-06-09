'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '../Button'
import { NormalInput as Input } from '../Input'
import ProgressiveDots from './ProgressiveDots'
import { useRouter } from 'next/navigation'
import { createUser } from '@/lib/services/userApi'

export default function Form() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
  })

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    if (formData.password !== formData.confirmedPassword)
      return alert('Senhas não compatíveis')

    const { username, email, password } = formData

    try {
      const { token } = await createUser({ username, email, password })

      const queryString = new URLSearchParams({
        token,
        redirect: '/sign-up/profile',
      })

      router.push(`/auth/cookies/token?${queryString}`)
    } catch (error) {
      console.log(error)
    }
  }

  function handleInputOnChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      <Input
        placeholder={`Digite seu nome de usuário`}
        name={'username'}
        label={'Como gostaria de ser chamado?'}
        onChange={(e) => handleInputOnChange(e)}
        value={formData.username}
        required
      />
      <Input
        placeholder={`Digite seu email`}
        name={'email'}
        label={'Qual é o seu email?'}
        type={'email'}
        onChange={(e) => handleInputOnChange(e)}
        value={formData.email}
        required
      />
      <Input
        placeholder={`Digite sua senha`}
        name={'password'}
        label={'Escolha uma senha'}
        type={'password'}
        onChange={(e) => handleInputOnChange(e)}
        value={formData.password}
        required
      />
      <Input
        placeholder={`Digite sua senha novamente`}
        name={'confirmedPassword'}
        label={'Confirme sua senha'}
        type={'password'}
        onChange={(e) => handleInputOnChange(e)}
        value={formData.confirmedPassword}
        required
      />
      <ProgressiveDots stage={1} />
      <Button>Continuar a inscrição</Button>
    </form>
  )
}
