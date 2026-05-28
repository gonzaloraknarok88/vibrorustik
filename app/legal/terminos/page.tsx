import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'Términos y Condiciones | VIBRORUSTIK',
  description: 'Términos y condiciones de uso de los servicios de VIBRORUSTIK.',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Términos y <span className="text-[#800020]">Condiciones</span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Aceptación de los Términos</h2>
              <p>Al acceder y utilizar el sitio web de VIBRORUSTIK, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro sitio.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Servicios</h2>
              <p>VIBRORUSTIK ofrece servicios de instalación de pisos y revestimientos de hormigón decorativo. Los precios, disponibilidad y características de los productos pueden variar sin previo aviso.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Cotizaciones</h2>
              <p>Las cotizaciones proporcionadas son válidas por 30 días desde su emisión y están sujetas a disponibilidad de materiales y condiciones del sitio de trabajo.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Garantías</h2>
              <p>Todos nuestros trabajos incluyen garantía de mano de obra. Las condiciones específicas de garantía se detallan en cada contrato individual.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Propiedad Intelectual</h2>
              <p>Todo el contenido de este sitio web, incluyendo imágenes, textos y diseños, es propiedad de VIBRORUSTIK y está protegido por las leyes de derechos de autor.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contacto</h2>
              <p>Para cualquier consulta sobre estos términos, contáctenos a través de nuestros canales oficiales.</p>
            </section>

            <p className="text-sm text-gray-500 pt-4 border-t">
              Última actualización: Mayo 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
