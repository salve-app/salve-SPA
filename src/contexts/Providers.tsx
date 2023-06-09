'use client'

import { ReactNode } from 'react'

import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="watermelon">
      {children}
      <ToastContainer />
    </ThemeProvider>
  )
}
