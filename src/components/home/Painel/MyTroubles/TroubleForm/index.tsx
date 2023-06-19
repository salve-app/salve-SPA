import Button from '@/components/Button'
import { NormalInput as Input } from '@/components/Input'
import { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { BsCoin } from 'react-icons/bs'
import Select from './Select'
import Map from './Map'
import { AddressForm, SaveForm } from '@/lib/utils/protocols/inputs'
import masks from '@/lib/utils/masks'
import getAddressByCoordinates from '@/lib/utils/geolocation/getAddressByCoordinates'
import { LocationCoordinates } from '@/lib/utils/protocols/geolocation'
import { getCookie } from 'cookies-next'
import decode from 'jwt-decode'
import { UserJwtPayload } from '@/lib/utils/protocols/resources'
import formValidation from '@/lib/utils/validations/formValidation'
import { createSave } from '@/lib/services/saveApi'

export default function TroubleForm({
  closeModalForm,
}: {
  closeModalForm: () => void
}) {
  const token = getCookie('token')?.toString()

  const user = decode(token) as UserJwtPayload

  const [formData, setFormData] = useState<SaveForm>({
    description: '',
    categoryId: 0,
    cost: 0,
    address: {
      number: '',
      street: '',
      neighborhood: '',
      city: '',
      state: '',
      complement: '',
      cep: '',
    },
  })

  const [showLocationMap, setShowLocationMap] = useState(false)

  const [markerIsChange, setMarkerIsChange] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    try {
      formValidation['save'](formData, user.coins)

      await createSave(formData, token)

      toast.success('Seja bem-vindo!')

      closeModalForm()
    } catch (error: any) {
      toast.error(error.message)
    }
  }

  function handleInputOnChange(
    e: ChangeEvent<HTMLInputElement>,
    key: string = '',
  ) {
    if (isAddressAttribute(e.target.name))
      return setFormData({
        ...formData,
        address: {
          ...formData.address,
          [e.target.name]: key ? masks[key](e.target.value) : e.target.value,
        },
      })

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSelectChange(cost: number, categoryId: number) {
    setFormData({ ...formData, cost, categoryId })
  }

  async function handleMapAddressChange(currentLocation: LocationCoordinates) {
    setMarkerIsChange(true)

    try {
      const address = await getAddressByCoordinates(currentLocation)

      setFormData({ ...formData, address: { ...formData.address, ...address } })
    } catch (error) {
      toast.error('Não foi possivel obter o endereaço')
    } finally {
      setMarkerIsChange(false)
    }
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
            <BsCoin /> {user.coins}
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

        {showLocationMap ? (
          <div className="flex w-full flex-col gap-2">
            <h3 className="text-sm font-bold text-emphasis">
              Você está por onde?
            </h3>
            <Map
              handleMapAddressChange={handleMapAddressChange}
              disabled={markerIsChange}
            />
            <Input
              placeholder={`Digite o nome da rua`}
              name={'street'}
              label={'Rua'}
              onChange={(e) => handleInputOnChange(e)}
              value={formData.address.street}
              disabled={markerIsChange}
              required
            />
            <div className="grid grid-cols-2 gap-x-1">
              <Input
                placeholder={`Digite o numero`}
                name={'number'}
                label={'Número'}
                onChange={(e) => handleInputOnChange(e, 'number')}
                value={formData.address.number}
                disabled={markerIsChange}
                required
              />
              <Input
                placeholder={`Digite o complemento`}
                name={'complement'}
                label={'Complemento'}
                onChange={(e) => handleInputOnChange(e)}
                value={formData.address.complement}
                disabled={markerIsChange}
              />
            </div>
          </div>
        ) : (
          <Button type="button" onClick={() => setShowLocationMap(true)}>
            Mostrar localização atual
          </Button>
        )}
        <Button>Chamar salve!</Button>
      </form>
    </div>
  )
}

function isAddressAttribute(key: string) {
  return key === 'complement' || key === 'street' || key === 'number'
}
