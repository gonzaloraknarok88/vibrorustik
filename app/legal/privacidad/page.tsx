import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'Política de Privacidad | VIBRORUSTIK',
  description: 'Política de privacidad y protección de datos de VIBRORUSTIK.',
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Política de <span className="text-[#800020]">Privacidad</span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Información que Recopilamos</h2>
              <p>Recopilamos información que usted nos proporciona directamente, como nombre, email, teléfono y detalles de su proyecto cuando utiliza nuestro formulario de contacto.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Uso de la Información</h2>
              <p>Utilizamos su información para responder a sus consultas, proporcionar cotizaciones, mejorar nuestros servicios y mantenerlo informado sobre novedades relevantes.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Protección de Datos</h2>
              <p>Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración o destrucción.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Compartir Información</h2>
              <p>No vendemos ni compartimos su información personal con terceros, excepto cuando sea necesario para proporcionar nuestros servicios o cuando la ley lo requiera.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Sus Derechos</h2>
              <p>Usted tiene derecho a acceder, corregir o eliminar su información personal. Puede ejercer estos derechos contactándonos directamente.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Cookies</h2>
              <p>Nuestro sitio puede utilizar cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies si lo prefiere.</p>
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
