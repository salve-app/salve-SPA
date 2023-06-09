import Form from '@/components/sign-up/address/Form'

export default function AddressSignUp() {
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
        <Form />
      </div>
    </main>
  )
}
