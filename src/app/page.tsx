import NavBar from '@/components/Navbar'
import useUser from '@/lib/hooks/useUser'
import { redirect } from 'next/navigation'

export default function Home() {
  // const user = useUser()

  // if (!user) redirect('/sign-in')

  return (
    <main className="flex min-h-screen justify-center bg-main">
      <NavBar />
    </main>
  )
}
