"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    title: "Pisos Estampados",
    description: "Hormigon H-30 de alta resistencia para exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.51%20%283%29-xCw2KL98QJd3KG041sqEXHI9lEKmSO.jpeg",
    count: "25+ disenos"
  },
  {
    title: "Revestimientos 3D",
    description: "Texturas premium para muros interiores y exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40-pro1zD4sz5K4iKTrfuW5TiwSQFxmcy.jpeg",
    count: "18+ disenos"
  },
  {
    title: "Caminos y Senderos",
    description: "Durmientes y baldosas para jardines elegantes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.51-0JsFRPdhZTMwvNba0mFkiScKcUTdWB.jpeg",
    count: "12+ disenos"
  },
]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.48-t57Z6D9kLoP5tqX8Iw5Lcq7VeX34B3.jpeg",
    title: "Chimenea con Revestimiento",
    description: "Piedra artificial de alta calidad para interiores elegantes"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.51%20%282%29-UQTrh3ZLkqVew62yZuVMVbO3p3fkMk.jpeg",
    title: "Durmientes con Piedra Natural",
    description: "Caminos de jardin con textura de madera y piedras de rio"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.48%20%283%29-ip3tNDIQmfnGW7VLjM0eYO7yl0JAIW.jpeg",
    title: "Sendero con Vista al Lago",
    description: "Proyecto paisajistico con durmientes en terreno con pendiente"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.51%20%281%29-FtsUEyawemXMeCziZGuzyJeJ6PnZMa.jpeg",
    title: "Camino Moderno",
    description: "Durmientes grafito sobre gravilla blanca con jardineria"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.02%20%284%29-570WzGeK05q8g0ABciKFvi6a5WDb0S.jpeg",
    title: "Baldosa Pizarra",
    description: "Pisos estampados sobre piedras de rio multicolor"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.53%20%283%29-bRibhXc7SSq10LbOcWAlP4JV42q4q7.jpeg",
    title: "Patio con Adoquines",
    description: "Adoquines circulares para espacios de jardin con estilo"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.52%20%281%29-bAaNEZp3BQZHtveoAMRgVDq79f4ZJU.jpeg",
    title: "Variedad de Colores",
    description: "Adoquines rusticos en multiples tonos naturales"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%282%29-ar0GZBX5baWWC1uczSk6OGUwq8iNfF.jpeg",
    title: "Durmiente Textura Madera",
    description: "Detalle de la textura realista de nuestros durmientes"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.48%20%282%29-jHCjknnHjeUJ9JobYOcMm1OslTJWRI.jpeg",
    title: "Camino con Gravilla",
    description: "Durmientes madera sobre gravilla blanca decorativa"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.54-v9N4WzpA04mcqTGPKvhkTtCjX5P2RX.jpeg",
    title: "Paneles de Pizarra",
    description: "Baldosas grandes con textura de piedra natural"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.03%20%283%29-Zr1naC1p6PGSOecEKxmZ2XmVAAGBEt.jpeg",
    title: "Baldosa Multitextura",
    description: "Diseno exclusivo con patron de piedras variadas"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.48%20%281%29-Rhupe1E2h2k2D93IBRVtwXUnDUHQLg.jpeg",
    title: "Colores Disponibles",
    description: "Pisos estampados en rojo, grafito y gris natural"
  },
]

export function CategoriesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 bg-[#e53e3e]/10 text-[#e53e3e] text-sm font-bold tracking-widest rounded-full mb-4">
              CATEGORIAS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2d3748] font-serif">
              Soluciones para cada <span className="text-vibro-gradient">Proyecto</span>
            </h2>
          </div>
          <Link href="/catalogo">
            <Button
              variant="outline"
              className="border-2 border-[#2d3748] text-[#2d3748] hover:bg-[#2d3748] hover:text-white group rounded-lg"
            >
              Explorar Todo
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer card-premium"
            >
              {/* Background Image - Native img for full quality */}
              <img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Clean gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-[#e53e3e] text-white text-xs font-bold rounded-full mb-4">
                  {category.count}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">
                  {category.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver Coleccion</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#e53e3e] rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Elegant Image Carousel - Portfolio Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20"
        >
          {/* Carousel Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#2d3748] mb-2 font-serif">
                Galeria de <span className="text-vibro-gradient">Proyectos</span>
              </h3>
              <p className="text-[#718096]">
                Descubre nuestros trabajos mas destacados
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/16rnNUO6Gzh4fvXWd9kr8oJL1bK9PQaUe?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 btn-vibro-primary rounded-lg font-semibold"
            >
              <ExternalLink className="w-5 h-5" />
              Ver Portafolio Completo
            </a>
          </div>

          {/* Main Carousel */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] sm:h-[550px] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <img
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Clean gradient overlay - no color tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="inline-block px-4 py-1.5 bg-[#e53e3e] text-white text-sm font-bold rounded-full mb-4">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-serif">
                    {galleryImages[currentSlide].title}
                  </h4>
                  <p className="text-white/90 text-lg max-w-lg">
                    {galleryImages[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#e53e3e] transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#e53e3e] transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 right-8 sm:right-12 flex items-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Slide ${index + 1}`}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-6 h-2 bg-[#e53e3e] rounded-full'
                      : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Preview - Scrollable */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-4 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-shrink-0 w-28 h-20 sm:w-36 sm:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-3 ring-[#e53e3e] ring-offset-2 ring-offset-white scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
