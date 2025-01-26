import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'TechDrop | Encuentra Productos Tecnológicos Ganadores',
  description: 'Descubre productos tecnológicos rentables para tu negocio de dropshipping',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <NavBar />
        <main className="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
