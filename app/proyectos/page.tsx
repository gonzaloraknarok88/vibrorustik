import { Navbar } from '@/components/navbar'
import { ProjectsGallery } from '@/components/projects-gallery'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'Nuestros Proyectos | VIBRORUSTIK',
  description: 'Galería de proyectos realizados: residencias de lujo, hoteles, comercios, corporativos y más. Más de 500 proyectos completados.',
}

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#800020] to-[#4a1942]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-bold tracking-widest rounded-full mb-6">
            PORTAFOLIO
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-gold-gradient">Proyectos</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Más de 15 años transformando espacios para las constructoras y arquitectos más exigentes de la región.
          </p>
        </div>
      </section>

      <ProjectsGallery />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
