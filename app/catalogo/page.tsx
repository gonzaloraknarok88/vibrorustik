import { Navbar } from '@/components/navbar'
import { CatalogGrid } from '@/components/catalog-grid'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'Catalogo de Productos | VIBRORUSTIK',
  description: 'Catalogo completo de pisos estampados H-30, revestimientos 3D, durmientes rusticos y baldosas de hormigon vibrado. Despacho a Santiago.',
}

export default function CatalogoPage() {
  return (
    <main className="min-h-screen bg-[#f7fafc]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#2d3748]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-[#e53e3e] text-white text-sm font-bold tracking-widest rounded-full mb-6">
            CATALOGO PROFESIONAL
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif">
            Productos <span className="text-vibro-gradient">Premium</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hormigon vibrado de alta resistencia H-30 para contratistas y constructoras. 
            Fabricacion propia con despacho a toda la Region Metropolitana.
          </p>
        </div>
      </section>

      <CatalogGrid />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
