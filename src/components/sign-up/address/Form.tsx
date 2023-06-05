'use client'

import { useRouter } from 'next/navigation'
import ProgressiveDots from '../ProgressiveDots'
import Button from '@/components/Button'
import { NormalInput as Input } from '@/components/Input'

export default function Form() {
  const router = useRouter()

  async function handleSubmit(e: any) {
    e.preventDefault()

    router.push(`/sign-up/address/${'12312312312'}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-5">
      <div className="flex gap-2">
        <Input placeholder={`99999-99`} name={'cep'} label={'CEP'} required />
        <Input
          placeholder={`(99) 99999 - 9999`}
          name={'state'}
          label={'Estado'}
          required
        />
      </div>
      <Input
        placeholder={`Informe sua cidade`}
        name={'city'}
        label={'Cidade'}
        required
      />
      <Input
        placeholder={`Informe sua rua`}
        name={'street'}
        label={'Rua'}
        required
      />
      <div className="flex gap-2">
        <Input
          placeholder={`Digite o bairro`}
          name={'neighborhood'}
          label={'Bairro'}
          required
        />
        <Input placeholder={`999`} name={'number'} label={'Número'} required />
      </div>
      <Input
        placeholder={`(opicional)`}
        name={'complement'}
        label={'Complemento'}
      />
      <Input
        placeholder={`(99) 99999 - 9999`}
        name={'state'}
        label={'Estado'}
        required
      />
      <Input
        placeholder={`(99) 99999 - 9999`}
        name={'state'}
        label={'Estado'}
        required
      />
      <ProgressiveDots stage={3} />
      <Button>Inscrever-se</Button>
    </form>
  )
}
