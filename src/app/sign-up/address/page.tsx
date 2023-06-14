import Form from '@/components/sign-up/address/Form'
import useToken from '@/lib/hooks/useToken'
import useUser from '@/lib/hooks/useUser'
import { redirect } from 'next/navigation'

export default function AddressSignUp() {
  const user = useUser()
  const token = useToken()

  if (!user || !token) redirect('/sign-in')

  return (
    <main className="flex min-h-screen justify-center bg-main px-6 pb-16 pt-20">
      <div className="flex w-[min(100%,_440px)] flex-col items-center">
        <img src="/images/miniLogo.svg" alt="Salve!" className="mb-10" />
        <p className="mb-10 text-center font-alt text-4xl text-alternative">
          Inscreva-se grátis e comece uma nova experiência
        </p>
        <p className="mb-8 text-center text-3xl font-bold text-emphasis">
          Dados de endereço
        </p>
        <Form token={token} />
      </div>
    </main>
  )
}
