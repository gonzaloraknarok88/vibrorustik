"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: "Residencia Premium Las Camelias",
    location: "Las Camelias, Argentina",
    year: "2026",
    category: "Residencial",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42%20%282%29-edwjECql7tQOKYh0wzHRnM69UOojpY.jpeg",
    description: "Sendero de durmientes rústicos con acabado madera para jardín de residencia de lujo."
  },
  {
    id: 2,
    title: "Plaza Comercial Centro",
    location: "Centro Urbano",
    year: "2025",
    category: "Comercial",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41%20%282%29-dQq1eiZXebpEhgB58r8MWrzZgKbnfk.jpeg",
    description: "Veredas con patrón circular único para área peatonal de alto tráfico."
  },
  {
    id: 3,
    title: "Hotel Boutique Terracota",
    location: "Zona Turística",
    year: "2025",
    category: "Hotelería",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41%20%281%29-vBFes0nnqGmGfLrnitfjnl8KTduuHt.jpeg",
    description: "Pisos estampados terracota que evocan tradición y elegancia mediterránea."
  },
  {
    id: 4,
    title: "Oficinas Corporativas Elite",
    location: "Distrito Empresarial",
    year: "2026",
    category: "Corporativo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.39-Svq9DgwrlZLNUzNN47Y0Lnz1hHAfPC.jpeg",
    description: "Revestimientos 3D texturizados para lobby de edificio corporativo AAA."
  },
  {
    id: 5,
    title: "Club de Campo Los Robles",
    location: "Country Club",
    year: "2025",
    category: "Recreativo",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47-snOVfhlNQ50jnSkydd5VvA8jU9WfEZ.jpeg",
    description: "Deck de piscina con acabado antideslizante y estética natural."
  },
  {
    id: 6,
    title: "Restaurante Gourmet Ondas",
    location: "Zona Gastronómica",
    year: "2026",
    category: "Gastronomía",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%282%29-suympREralqFWXJNfoIvEzeMnefKid.jpeg",
    description: "Muro decorativo ondulado como elemento focal del salón principal."
  },
]

export function ProjectsGallery() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-[#d4af37] to-[#f0d77a] text-[#800020] text-xs font-bold rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white group/btn"
                >
                  Ver Proyecto
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-[#800020] to-[#4a1942] rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore Nuestro Portafolio Completo
            </h3>
            <p className="text-white/80 mb-6 max-w-md mx-auto">
              Más de 500 proyectos realizados documentados en alta resolución
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[#d4af37] to-[#f0d77a] text-[#800020] hover:opacity-90 font-bold px-8"
            >
              <a
                href="https://drive.google.com/drive/folders/16rnNUO6Gzh4fvXWd9kr8oJL1bK9PQaUe?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Portafolio en Drive
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
