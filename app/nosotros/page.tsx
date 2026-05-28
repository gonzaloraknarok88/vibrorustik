"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Users, Award, Target, Leaf, CheckCircle2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { TrustBanner } from '@/components/trust-banner'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'

const values = [
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Utilizamos materiales de primera calidad y técnicas artesanales perfeccionadas durante más de 15 años."
  },
  {
    icon: Users,
    title: "Equipo Experto",
    description: "Profesionales certificados con amplia experiencia en proyectos de alto estándar."
  },
  {
    icon: Target,
    title: "Precisión",
    description: "Cada proyecto es ejecutado con atención meticulosa al detalle y cumplimiento de especificaciones."
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    description: "Comprometidos con prácticas responsables y materiales eco-amigables."
  },
]

const timeline = [
  { year: "2009", event: "Fundación de VIBRORUSTIK" },
  { year: "2012", event: "Primer proyecto corporativo de gran escala" },
  { year: "2015", event: "Expansión regional y certificación ISO 9001" },
  { year: "2018", event: "Lanzamiento línea de revestimientos 3D" },
  { year: "2021", event: "500+ proyectos completados" },
  { year: "2024", event: "Innovación en acabados sustentables" },
]

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#800020] to-[#4a1942] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.42.08-l7pseKDdg4meT2IxPEvdTNvxxojxh4.jpeg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-bold tracking-widest rounded-full mb-6">
              NUESTRA HISTORIA
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Sobre <span className="text-gold-gradient">VIBRORUSTIK</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Más de 15 años creando revestimientos y pisos de alta gama que definen el estándar de la industria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-[#800020]/10 text-[#800020] text-sm font-bold tracking-widest rounded-full mb-4">
                NUESTRA MISIÓN
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Transformamos Espacios en <span className="text-[#800020]">Obras Maestras</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                En VIBRORUSTIK nos especializamos en crear revestimientos y pisos de hormigón decorativo 
                que combinan la durabilidad industrial con la elegancia artesanal. Cada proyecto es una 
                oportunidad para demostrar que la funcionalidad y la belleza pueden coexistir perfectamente.
              </p>
              <ul className="space-y-3">
                {["Materiales de primera calidad", "Técnicas artesanales", "Garantía de satisfacción", "Asesoramiento personalizado"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af37]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.42.08-l7pseKDdg4meT2IxPEvdTNvxxojxh4.jpeg"
                alt="Nuestro equipo trabajando"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#800020]/10 text-[#800020] text-sm font-bold tracking-widest rounded-full mb-4">
              NUESTROS VALORES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Lo que nos <span className="text-gold-gradient">Define</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#800020] to-[#4a1942] flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20" id="proceso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#800020]/10 text-[#800020] text-sm font-bold tracking-widest rounded-full mb-4">
              TRAYECTORIA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Nuestra <span className="text-gold-gradient">Historia</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#800020] via-[#d4af37] to-[#4a1942] hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                      <span className="text-3xl font-bold text-gold-gradient">{item.year}</span>
                      <p className="text-gray-700 mt-2">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-[#d4af37] border-4 border-white shadow-lg" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBanner />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
