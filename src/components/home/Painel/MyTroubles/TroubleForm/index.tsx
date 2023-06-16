import { useRouter } from 'next/navigation'
import Button from '@/components/Button'
import { NormalInput as Input } from '@/components/Input'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { BsCoin } from 'react-icons/bs'
import Select from './Select'
import Map from './Map'

export default function TroubleForm({
  closeModalForm,
}: {
  closeModalForm: () => void
}) {
  const router = useRouter()

  const [formData, setFormData] = useState({
    description: '',
    categoryId: 0,
    cost: 0,
  })
  const [showLocationMap, setShowLocationMap] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      const { token } = await signIn(formData)

      const queryString = new URLSearchParams({
        token,
        redirect: '/',
      })

      toast.success('Seja bem-vindo!')

      router.push(`/auth/cookies/token?${queryString}`)
    } catch (error: any) {
      console.log(error)
      toast.error('Email ou senha inválidos!')
    }
  }

  function handleInputOnChange(e: ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSelectChange(cost: number, categoryId: number) {
    setFormData({ ...formData, cost, categoryId })
  }

  return (
    <div className="fixed left-0 top-0 z-50 flex h-screen w-full items-center justify-center">
      <div
        onClick={closeModalForm}
        className="fixed left-0 top-0 h-screen w-full bg-black opacity-40"
      ></div>
      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex w-[min(100%,_520px)] flex-col gap-5 rounded-2xl bg-main px-4 pb-4 pt-5"
      >
        <div className="flex w-full items-center justify-between">
          <h3 className="font-alt text-3xl font-bold text-alternative">
            Vamos te ajudar!
          </h3>
          <div className="flex items-center gap-1 text-2xl font-bold text-alternative">
            <BsCoin /> 10
          </div>
        </div>
        <Input
          placeholder={`Diga o seu imprevisto`}
          name={'description'}
          label={'O que aconteceu?'}
          onChange={(e) => handleInputOnChange(e)}
          value={formData.description}
          required
        />
        <Select handleSelectChange={handleSelectChange} />

        {showLocationMap ? <Map/>:  <Button type="button" onClick={() => setShowLocationMap(true)}>Mostrar localização atual</Button>}
        <Button>Chamar salve!</Button>
      </form>
    </div>
  )
}
