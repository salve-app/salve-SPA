import LocalTroubles from './LocalTroubles'
import MyTroubles from './MyTroubles'

export default function Painel({ myTroubles }: { myTroubles: boolean }) {
  return (
    <div className="w-full flex-1 rounded-3xl bg-alternative px-10 py-10">
      {myTroubles ? <MyTroubles/> : <LocalTroubles />}
    </div>
  )
}
