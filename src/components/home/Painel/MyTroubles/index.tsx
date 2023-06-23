import Troubles from '../Troubles'
import { GiHealthNormal } from '@react-icons/all-files/gi/GiHealthNormal'
import { GiSpiderMask } from '@react-icons/all-files/gi/GiSpiderMask'
import AddTroubleButton from '../Troubles/AddTroubleButton'
import { useEffect, useRef, useState } from 'react'
import TroubleForm from './TroubleForm'
import { getCookie } from 'cookies-next'
import { getOfferingSaves, getRequestedSaves } from '@/lib/services/saveApi'
import { SaveFetchData } from '@/lib/utils/protocols/saves'
import { scrollToTop } from '@/lib/utils/helpers/scrollToTop'

export default function MyTroubles() {
  const token = getCookie('token')?.toString() || ''

  const [showModalForm, setShowModalForm] = useState(false)

  const [saves, setSaves] = useState<SaveFetchData>()

  const [submitted, setSubmitted] = useState(false)

  const troubleRef = useRef<HTMLUListElement>(null)

  const toggleModalForm = (key: string = '') => {
    if (key === 'submitted') {
      setSubmitted(!submitted)
      scrollToTop(troubleRef.current)
    }

    setShowModalForm(!showModalForm)
  }

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
  }, [submitted])

  if (!saves) return null

  return (
    <div className="grid h-[calc(100%-40px)] grid-cols-2 gap-x-4">
      <Troubles
        title={
          <>
            <GiHealthNormal /> Solicitados
          </>
        }
        saves={saves.requested}
        troubleRef={troubleRef}
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
      >
        {!saves.offering.length && (
          <div className="flex h-[550px] items-center justify-center opacity-40">
            <p className="w-10/12 text-center text-2xl font-thin text-emphasis">
              Nenhum perrengue está sendo atendtido por você no momento
            </p>
          </div>
        )}
      </Troubles>
      {showModalForm && <TroubleForm closeModalForm={toggleModalForm} />}
    </div>
  )
}
