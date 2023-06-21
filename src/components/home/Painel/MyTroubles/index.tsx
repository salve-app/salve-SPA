import Troubles from '../Troubles'
import { GiHealthNormal } from '@react-icons/all-files/gi/GiHealthNormal'
import { GiSpiderMask } from '@react-icons/all-files/gi/GiSpiderMask'
import AddTroubleButton from '../Troubles/AddTroubleButton'
import { useEffect, useState } from 'react'
import TroubleForm from './TroubleForm'
import { getCookie } from 'cookies-next'
import { getOfferingSaves, getRequestedSaves } from '@/lib/services/saveApi'
import { SaveFetchData } from '@/lib/utils/protocols/saves'

export default function MyTroubles() {
  const token = getCookie('token')?.toString() || ''

  const [showModalForm, setShowModalForm] = useState(false)

  const [saves, setSaves] = useState<SaveFetchData>()

  const toggleModalForm = () => setShowModalForm(!showModalForm)

  useEffect(() => {
    const fetchMySaves = async () => {
      try {
        const [requested, offering] = await Promise.all([
          getRequestedSaves(token),
          getOfferingSaves(token),
        ])

        setSaves({
          requested: requested.requestedSaves,
          offering: offering.offeringSaves,
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchMySaves()
  }, [])

  if (!saves) return null

  return (
    <div className="grid grid-cols-2 h-[calc(100%-40px)] gap-x-4">
      <Troubles
        title={
          <>
            <GiHealthNormal /> Solicitados
          </>
        }
        saves={saves.requested}
      >
        <AddTroubleButton onClick={toggleModalForm} />
      </Troubles>
      <Troubles
        title={
          <>
            <GiSpiderMask /> Atendendo
          </>
        }
        saves={saves.offering}
      ></Troubles>
      {showModalForm && <TroubleForm closeModalForm={toggleModalForm} />}
    </div>
  )
}
