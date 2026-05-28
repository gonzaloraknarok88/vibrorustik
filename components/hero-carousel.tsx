"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroSlides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40-sAWYJhZ8JMpPBCcuu1JrwAubRvv4J9.jpeg",
    title: "Revestimientos que Definen el Lujo",
    subtitle: "Texturas 3D de Alta Gama",
    description: "Transformamos espacios con revestimientos únicos de calidad premium"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42%20%281%29-mIm44zoWeH13Rl5Cq9HkLJO12ul2uZ.jpeg",
    title: "Durabilidad Corporativa",
    subtitle: "Hormigón Estampado Premium",
    description: "Pisos de alta resistencia para proyectos de gran escala"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%282%29-suympREralqFWXJNfoIvEzeMnefKid.jpeg",
    title: "Elegancia sin Límites",
    subtitle: "Revestimientos Decorativos",
    description: "Diseños exclusivos que elevan cualquier proyecto arquitectónico"
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="relative h-screen w-full overflow-hidden pt-28 sm:pt-32">
      <AnimatePresence mode="wait">
        {heroSlides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={90}
                sizes="100vw"
                className="object-cover"
                priority
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-[#d4af37] to-[#f0d77a] text-[#800020] text-sm font-bold tracking-widest rounded-full mb-6"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {heroSlides[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className={i === heroSlides[currentSlide].title.split(' ').length - 1 ? 'text-gold-gradient' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-[#800020] hover:bg-[#5c0017] text-white px-8 py-6 text-lg font-semibold shadow-xl transition-all hover:scale-105"
                >
                  Ver Catálogo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#800020] px-8 py-6 text-lg font-semibold transition-all bg-transparent"
                >
                  Solicitar Cotización
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-sm"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-gradient-to-r from-[#d4af37] to-[#f0d77a]' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-sm"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-8 z-20 text-white/70"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest rotate-90 origin-center">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
