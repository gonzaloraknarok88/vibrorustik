import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VIBRORUSTIK | Pisos y Revestimientos Premium',
  description: 'Empresa líder en pisos y revestimientos de alta gama. Soluciones elegantes y duraderas para arquitectos, constructoras y proyectos de alto estándar.',
  keywords: 'pisos, revestimientos, hormigón estampado, piedra, concreto decorativo, pisos premium, Argentina',
  authors: [{ name: 'VIBRORUSTIK' }],
  openGraph: {
    title: 'VIBRORUSTIK | Pisos y Revestimientos Premium',
    description: 'Revestimientos que definen el lujo. Soluciones corporativas de alta durabilidad.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
