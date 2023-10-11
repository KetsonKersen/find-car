'use client'
import Footer from './componetns/Footer/Footer'
import Header from './componetns/Header/Header'
import Hero from './componetns/Hero/Hero'
import Location from './componetns/Location/Location'
import WeDo from './componetns/WeDo/WeDo'
import './globals.css'
import './MediaScreen.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main className="w-full mt-20">
          <Header/>
          <Hero/>
          {children}
          <WeDo/>
          <Location/>
          <Footer/>
        </main>
      </body>
    </html>
  )
}
