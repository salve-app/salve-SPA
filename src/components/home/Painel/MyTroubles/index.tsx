import Troubles from './Troubles'
import { MdOutlineHealthAndSafety } from 'react-icons/md'
import { GiSpiderMask } from 'react-icons/gi'
import AddTroubleButton from './Troubles/AddTroubleButton'
import { useState } from 'react'
import TroubleForm from './TroubleForm'

export default function MyTroubles() {
  const [showModalForm, setShowModalForm] = useState(false)

  const toggleModalForm = () => setShowModalForm(!showModalForm)

  return (
    <div className="grid grid-cols-2 gap-x-4">
      <Troubles
        title={
          <>
            <MdOutlineHealthAndSafety /> Solicitados
          </>
        }
      >
        <AddTroubleButton onClick={toggleModalForm} />
      </Troubles>
      <Troubles
        title={
          <>
            <GiSpiderMask /> Atendendo
          </>
        }
      ></Troubles>
      {showModalForm && <TroubleForm closeModalForm={toggleModalForm}/>}
    </div>
  )
}
