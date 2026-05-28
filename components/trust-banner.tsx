"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const clients = [
  { name: "Constructora Alpha", logo: "/clients/client1.svg" },
  { name: "Arquitectos Premium", logo: "/clients/client2.svg" },
  { name: "Desarrollo Urbano", logo: "/clients/client3.svg" },
  { name: "Inmobiliaria Elite", logo: "/clients/client4.svg" },
  { name: "Proyectos VIP", logo: "/clients/client5.svg" },
  { name: "Corporación Build", logo: "/clients/client6.svg" },
]

const stats = [
  { number: "500+", label: "Proyectos Completados" },
  { number: "15+", label: "Años de Experiencia" },
  { number: "98%", label: "Clientes Satisfechos" },
  { number: "50+", label: "Diseños Exclusivos" },
]

export function TrustBanner() {
  return (
    <section className="py-20 bg-[#800020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="text-4xl sm:text-5xl font-bold text-gold-gradient">
                {stat.number}
              </span>
              <p className="text-white/80 mt-2 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-16" />

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-8">
            Empresas que <span className="text-gold-gradient">Confían</span> en Nosotros
          </h3>
          
          {/* Client Logos Placeholder */}
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center justify-center w-32 h-16 bg-white/10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all"
              >
                <span className="text-white/70 text-sm font-medium text-center px-2">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
