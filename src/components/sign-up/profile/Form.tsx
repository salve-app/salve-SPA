'use client'

import { useRouter } from 'next/navigation'
import ProgressiveDots from '../ProgressiveDots'
import Button from '@/components/Button'
import { NormalInput as Input } from '@/components/Input'
import GenderOptions from './GenderOptions'

export default function Form() {
  const router = useRouter()

  async function handleSubmit(e: any) {
    e.preventDefault()

    router.push(`/sign-up/address/${'12312312312'}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      <Input
        placeholder={`Digite seu nome completo`}
        name={'profileName'}
        label={'Qual é o seu nome?'}
        required
      />
      <Input
        placeholder={`Digite seu CPF`}
        name={'cpf'}
        label={'Informe o seu CPF'}
        required
      />
      <div className="flex gap-2">
        <Input
          placeholder={`Ex.: 12/01/1992`}
          name={'birthday'}
          label={'Quando você nasceu?'}
          required
        />
        <Input
          placeholder={`(99) 99999 - 9999`}
          name={'phoneNumber'}
          label={'Digite seu telefone'}
          required
        />
      </div>
      <GenderOptions/>
      <ProgressiveDots stage={2} />
      <Button>Continuar a inscrição</Button>
    </form>
  )
}
