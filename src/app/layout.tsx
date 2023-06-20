import './globals.css'
import { Open_Sans, Oswald } from 'next/font/google'
import { ServerThemeProvider } from '@wits/next-themes'
import Providers from '@/contexts/Providers'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-open',
})

const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-oswald',
})

export const metadata = {
  title: 'Salve! - Os imprevistos não serão mais uma dor de cabeça',
  description:
    'Quando imprevistos ocorrerem, tudo o que você precisa é de um Salve!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider>
      <html lang="pt">
        <body
          className={`${openSans.variable} ${oswald.variable} font-sans`}
          suppressHydrationWarning={true}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
