import { Navbar } from '@/components/navbar'
import { CatalogGrid } from '@/components/catalog-grid'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'Catálogo de Revestimientos | VIBRORUSTIK',
  description: 'Explore nuestra colección completa de pisos estampados, revestimientos 3D, caminos de jardín y muros decorativos de alta gama.',
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#800020] to-[#4a1942]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-bold tracking-widest rounded-full mb-6">
            CATÁLOGO PROFESIONAL
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Colección de <span className="text-gold-gradient">Revestimientos</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Descubra nuestra línea completa de productos premium para transformar cualquier espacio en una obra maestra arquitectónica.
          </p>
        </div>
      </section>

      <CatalogGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
