"use client"

import { motion } from 'framer-motion'
import { Shield, Clock, Award, Truck } from 'lucide-react'

const stats = [
  { number: "500+", label: "Proyectos Completados", icon: Award },
  { number: "15+", label: "Anos de Experiencia", icon: Clock },
  { number: "H-30", label: "Resistencia Certificada", icon: Shield },
  { number: "RM", label: "Despacho Santiago", icon: Truck },
]

export function TrustBanner() {
  return (
    <section className="py-20 bg-[#2d3748]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#e53e3e]/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-[#e53e3e]" />
              </div>
              <span className="text-4xl sm:text-5xl font-bold text-white block mb-2">
                {stat.number}
              </span>
              <p className="text-gray-300 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#e53e3e] to-transparent mb-12" />

        {/* Trust Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 font-serif">
            Fabricacion <span className="text-vibro-gradient">Propia</span> en Chile
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Produccion directa de fabrica con control de calidad H-30 certificado. 
            Despacho a toda la Region Metropolitana de Santiago.
          </p>
          
          {/* CTA */}
          <motion.a
            href="https://wa.me/c/192427470114948"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 btn-vibro-primary rounded-lg font-semibold text-lg"
          >
            Solicitar Cotizacion
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
