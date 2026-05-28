import type { Metadata, Viewport } from 'next'
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
  title: 'VIBRORUSTIK | Cierros Prefabricados y Revestimientos Premium Chile',
  description: 'Fabricantes de cierros prefabricados de hormigon H-30 y revestimientos rusticos de alta resistencia. Pisos estampados, durmientes y baldosas para construccion y paisajismo en Santiago, Chile.',
  keywords: 'cierros prefabricados, hormigon H-30, pisos estampados, revestimientos rusticos, durmientes, baldosas, hormigon vibrado, Santiago, Chile',
  authors: [{ name: 'VIBRORUSTIK' }],
  openGraph: {
    title: 'VIBRORUSTIK | Cierros Prefabricados y Revestimientos Premium Chile',
    description: 'Fabricacion de alta resistencia H-30. Cierros prefabricados, pisos estampados y revestimientos para contratistas y constructoras.',
    type: 'website',
    locale: 'es_CL',
  },
}

export const viewport: Viewport = {
  themeColor: '#e53e3e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} bg-white`}>
      <body className="font-sans antialiased bg-white text-[#2d3748]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
