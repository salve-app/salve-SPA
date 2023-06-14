import useUser from '@/lib/hooks/useUser'
import { redirect } from 'next/navigation'

export default function Home() {
  const user = useUser()

  if (!user) redirect('/sign-in')

  return (
    <main className="flex min-h-screen justify-center bg-main px-6 pb-16 pt-20">
      <div className="flex w-[min(100%,_440px)] flex-col items-center">
        <img src="images/miniLogo.svg" alt="Salve!" className="mb-10" />
        <p className="mb-10 text-center font-alt text-4xl text-alternative">
          Sobre construção :P
        </p>
      </div>
    </main>
  )
}
