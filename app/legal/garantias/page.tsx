import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

export const metadata = {
  title: 'Garantías | VIBRORUSTIK',
  description: 'Información sobre garantías de productos y servicios de VIBRORUSTIK.',
}

export default function GarantiasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Nuestras <span className="text-[#800020]">Garantías</span>
          </h1>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6 text-gray-700">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Garantía de Calidad VIBRORUSTIK</h2>
              <p>En VIBRORUSTIK nos comprometemos con la excelencia. Cada proyecto que realizamos está respaldado por nuestra garantía de satisfacción.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Cobertura de Garantía</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Mano de obra:</strong> 2 años de garantía contra defectos de instalación</li>
                <li><strong>Materiales prefabricados:</strong> 5 años contra defectos de fabricación</li>
                <li><strong>Hormigón estampado:</strong> 3 años de garantía estructural</li>
                <li><strong>Selladores y acabados:</strong> 1 año de garantía de aplicación</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Condiciones de Garantía</h2>
              <p>La garantía aplica bajo condiciones normales de uso y mantenimiento adecuado según las instrucciones proporcionadas. No cubre daños por:</p>
              <ul className="list-disc pl-5 space-y-2 mt-3">
                <li>Uso inadecuado o abuso</li>
                <li>Modificaciones no autorizadas</li>
                <li>Falta de mantenimiento</li>
                <li>Desastres naturales</li>
                <li>Desgaste normal por el uso</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Cómo Hacer Válida la Garantía</h2>
              <p>Para hacer válida su garantía, contáctenos con su número de proyecto y descripción del problema. Nuestro equipo técnico evaluará el caso y procederá según corresponda.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Compromiso de Satisfacción</h2>
              <p>Su satisfacción es nuestra prioridad. Si por alguna razón no está completamente satisfecho con nuestro trabajo, trabajaremos hasta resolverlo.</p>
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
