"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Eye, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredProducts = [
  {
    id: 1,
    name: "Textura 3D Cuadrada",
    category: "Revestimientos de Muro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40-sAWYJhZ8JMpPBCcuu1JrwAubRvv4J9.jpeg",
    description: "Revestimiento 3D con acabado madera natural",
    specs: ["Uso interior", "40x40 cm", "Alta resistencia"]
  },
  {
    id: 2,
    name: "Hormigón Estampado Ladrillo",
    category: "Pisos Exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41%20%281%29-vBFes0nnqGmGfLrnitfjnl8KTduuHt.jpeg",
    description: "Patrón ladrillo terracota para exteriores elegantes",
    specs: ["Uso exterior", "Antideslizante", "UV resistente"]
  },
  {
    id: 3,
    name: "Ondas Decorativas",
    category: "Revestimientos Premium",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%282%29-suympREralqFWXJNfoIvEzeMnefKid.jpeg",
    description: "Diseño ondulado 3D para interiores modernos",
    specs: ["Uso interior", "Efecto único", "Fácil instalación"]
  },
  {
    id: 4,
    name: "Textura Mosaico Gris",
    category: "Revestimientos de Muro",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.39-Svq9DgwrlZLNUzNN47Y0Lnz1hHAfPC.jpeg",
    description: "Mosaico texturizado en tonos grises elegantes",
    specs: ["Interior/Exterior", "Moderno", "Bajo mantenimiento"]
  },
  {
    id: 5,
    name: "Durmientes Rústicos",
    category: "Caminos de Jardín",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42%20%282%29-edwjECql7tQOKYh0wzHRnM69UOojpY.jpeg",
    description: "Durmientes tipo madera para senderos elegantes",
    specs: ["Uso exterior", "Resistente", "Natural look"]
  },
  {
    id: 6,
    name: "Estampado Adoquín",
    category: "Pisos Premium",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41-Ua0UCsdowHlZKgAW99waRkDq0UFSDT.jpeg",
    description: "Patrón adoquín clásico en tonos neutros",
    specs: ["Alta durabilidad", "Tráfico pesado", "Elegante"]
  },
]

export function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#800020]/10 text-[#800020] text-sm font-bold tracking-widest rounded-full mb-4">
            COLECCIÓN PREMIUM
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Productos <span className="text-gold-gradient">Destacados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nuestra selección exclusiva de revestimientos y pisos de alta gama para proyectos arquitectónicos distinguidos
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              style={{
                transform: hoveredId === product.id ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredId === product.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <Button
                    className="w-full bg-[#800020] hover:bg-[#5c0017] text-white font-semibold"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Ver Especificaciones Técnicas
                  </Button>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#d4af37] to-[#f0d77a] text-[#800020] text-xs font-bold rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#800020] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                
                {/* Specs Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800020] via-[#d4af37] to-[#4a1942] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white px-8 py-6 text-lg font-semibold group"
          >
            Ver Catálogo Completo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
