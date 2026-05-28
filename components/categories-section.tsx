"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'

const categories = [
  {
    title: "Pisos Estampados",
    description: "Hormigón decorativo de alta resistencia para exteriores e interiores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%281%29-4TII7OrGjsaP8xDU4gPR1S0VgqW6Lv.jpeg",
    count: "25+ diseños"
  },
  {
    title: "Revestimientos 3D",
    description: "Texturas únicas que transforman cualquier muro en una obra de arte",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%281%29-gA53VoEreLekB6myOmI4QkGbRu0tWU.jpeg",
    count: "18+ diseños"
  },
  {
    title: "Caminos y Senderos",
    description: "Durmientes y baldosas para jardines y espacios exteriores elegantes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44-6WrrIsHI9eJnwpVEl2qcmX1y0CyhZb.jpeg",
    count: "12+ diseños"
  },
]

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.52%20%282%29-HGd15MpeYSj8CGDObg4GfcdufiIxOH.jpeg",
    title: "Piscinas y Terrazas",
    description: "Soluciones antideslizantes de alta calidad"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42%20%282%29-edwjECql7tQOKYh0wzHRnM69UOojpY.jpeg",
    title: "Caminos de Jardín",
    description: "Durmientes que embellecen cada espacio"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.01-r1N52aCOXFgDq7j1vmcdf8g9htUiLq.jpeg",
    title: "Pisos Premium",
    description: "Acabados sofisticados para exteriores"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%282%29-3UI2EP9sp9y8FXSv7LbkY8jPKzfc3G.jpeg",
    title: "Revestimientos 3D",
    description: "Texturas que transforman interiores"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.04-FpSVD5e39lC27vc4AUHqM22QJ1R49r.jpeg",
    title: "Variedad de Diseños",
    description: "Múltiples opciones para cada proyecto"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.02%20%283%29-vP7zAoQZHkbpzpS0e3NYD1KU7rIazW.jpeg",
    title: "Colores Exclusivos",
    description: "Paleta de tonos naturales y elegantes"
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
            <span className="inline-block px-4 py-2 bg-[#4a1942]/10 text-[#4a1942] text-sm font-bold tracking-widest rounded-full mb-4">
              CATEGORÍAS
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Soluciones para cada <span className="text-[#800020]">Proyecto</span>
            </h2>
          </div>
          <Link href="/catalogo">
            <Button
              variant="outline"
              className="border-2 border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white group"
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
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                quality={85}
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#d4af37] to-[#f0d77a] text-[#800020] text-xs font-bold rounded-full mb-4">
                  {category.count}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-white font-medium"
                >
                  <span>Ver Colección</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </motion.div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#d4af37] rounded-3xl transition-colors duration-300" />
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
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Galería de <span className="text-gold-gradient">Proyectos</span>
              </h3>
              <p className="text-gray-600">
                Descubre nuestros trabajos más destacados
              </p>
            </div>
            <a
              href="https://drive.google.com/drive/folders/16rnNUO6Gzh4fvXWd9kr8oJL1bK9PQaUe?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#800020] to-[#5c0017] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-[#800020]/30 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              Ver Portafolio Completo
            </a>
          </div>

          {/* Main Carousel */}
          <div className="relative rounded-3xl overflow-hidden h-[400px] sm:h-[500px] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <Image
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].title}
                  fill
                  quality={90}
                  sizes="100vw"
                  className="object-cover"
                  priority
                />
                {/* Elegant gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
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
                  <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-[#d4af37] to-[#f0d77a] text-[#800020] text-sm font-bold rounded-full mb-4">
                    {String(currentSlide + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
                  </span>
                  <h4 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                    {galleryImages[currentSlide].title}
                  </h4>
                  <p className="text-white/80 text-lg max-w-lg">
                    {galleryImages[currentSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100 border border-white/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 right-8 sm:right-12 flex items-center gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all duration-300 ${
                    index === currentSlide
                      ? 'w-8 h-2 bg-gradient-to-r from-[#d4af37] to-[#f0d77a] rounded-full'
                      : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
                  }`}
                />
              ))}
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-6 left-6 w-20 h-20 border-l-2 border-t-2 border-[#d4af37]/50 rounded-tl-2xl" />
            <div className="absolute top-6 right-6 w-20 h-20 border-r-2 border-t-2 border-[#d4af37]/50 rounded-tr-2xl" />
          </div>

          {/* Thumbnail Preview */}
          <div className="flex gap-4 mt-6 overflow-x-auto pb-4 scrollbar-hide">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative flex-shrink-0 w-24 h-16 sm:w-32 sm:h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-2 ring-[#d4af37] ring-offset-2 ring-offset-white scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  quality={75}
                  sizes="128px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
