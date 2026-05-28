"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredProducts = [
  {
    id: 1,
    name: "Baldosa Ladrillo Terracota",
    category: "Pisos Estampados",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47%20%281%29-gMYJGxp73VvT9qRrKWziVmeGNJQpQp.jpeg",
    description: "Hormigon estampado patron ladrillo para exteriores",
    specs: ["40x40 cm", "H-30", "Antideslizante"]
  },
  {
    id: 2,
    name: "Revestimiento 3D Ondas",
    category: "Revestimientos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42-mrOXQOrnYXftXWYp4EHNK1AyqVFNbn.jpeg",
    description: "Textura ondulada 3D para interiores premium",
    specs: ["Interior", "Efecto 3D", "Facil instalacion"]
  },
  {
    id: 3,
    name: "Mesada Exterior",
    category: "Estructuras",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47%20%281%29-gMYJGxp73VvT9qRrKWziVmeGNJQpQp.jpeg",
    description: "Mesada de hormigon con revestimiento premium",
    specs: ["Exterior", "Resistente", "A medida"]
  },
  {
    id: 4,
    name: "Baldosa Abanico",
    category: "Pisos Premium",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.02%20%282%29-3MEon7GDiRRWqSxinOjlZD0xp8Tnza.jpeg",
    description: "Patron circular para plazas y jardines",
    specs: ["40x40 cm", "H-30", "Trafico pesado"]
  },
  {
    id: 5,
    name: "Durmientes Rusticos",
    category: "Caminos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47-snOVfhlNQ50jnSkydd5VvA8jU9WfEZ.jpeg",
    description: "Durmientes tipo madera para senderos",
    specs: ["100x25 cm", "Natural look", "Exterior"]
  },
  {
    id: 6,
    name: "Piso Grafito Oscuro",
    category: "Pisos Estampados",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.01-r1N52aCOXFgDq7j1vmcdf8g9htUiLq.jpeg",
    description: "Hormigon estampado color grafito elegante",
    specs: ["40x40 cm", "H-30", "Alta resistencia"]
  },
]

export function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-[#e53e3e]/10 text-[#e53e3e] text-sm font-bold tracking-widest rounded-full mb-4">
            CATALOGO PREMIUM
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3748] mb-4 font-serif">
            Productos <span className="text-vibro-gradient">Destacados</span>
          </h2>
          <div className="section-divider mt-4 mb-6" />
          <p className="text-lg text-[#718096] max-w-2xl mx-auto">
            Hormigon vibrado de alta resistencia H-30 para proyectos de construccion y paisajismo
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
              className="group card-premium bg-white rounded-xl overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={hoveredId === product.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <Button
                    asChild
                    className="w-full btn-vibro-primary font-semibold"
                  >
                    <a href="https://wa.me/c/192427470114948" target="_blank" rel="noopener noreferrer">
                      <Eye className="w-4 h-4 mr-2" />
                      Solicitar Cotizacion
                    </a>
                  </Button>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="tech-badge">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2d3748] mb-2 group-hover:text-[#e53e3e] transition-colors font-serif">
                  {product.name}
                </h3>
                <p className="text-[#718096] text-sm mb-4">
                  {product.description}
                </p>
                
                {/* Specs Tags */}
                <div className="flex flex-wrap gap-2">
                  {product.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#e2e8f0] text-[#4a5568] text-xs rounded-full font-medium"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#e53e3e] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
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
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-[#2d3748] text-[#2d3748] hover:bg-[#2d3748] hover:text-white px-8 py-6 text-lg font-semibold group rounded-lg"
          >
            <Link href="/catalogo">
              Ver Catalogo Completo
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
