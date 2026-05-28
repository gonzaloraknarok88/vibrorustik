"use client"

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const heroSlides = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%281%29-gA53VoEreLekB6myOmI4QkGbRu0tWU.jpeg",
    title: "Pisos de Alta Resistencia",
    subtitle: "Hormigon H-30 Certificado",
    description: "Fabricantes de cierros prefabricados y pisos estampados de maxima durabilidad"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42-mrOXQOrnYXftXWYp4EHNK1AyqVFNbn.jpeg",
    title: "Revestimientos 3D Premium",
    subtitle: "Texturas Exclusivas",
    description: "Acabados rusticos y modernos que transforman cualquier espacio"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%282%29-yz279zuZ4Dzb2SDaN2SWUVwwheTrqE.jpeg",
    title: "Caminos de Jardin",
    subtitle: "Durmientes Rusticos",
    description: "Soluciones elegantes para paisajismo y exteriores de alta gama"
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
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                quality={95}
                sizes="100vw"
                className="object-cover"
                priority
                loading="eager"
              />
              {/* Premium gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#2d3748]/80 via-[#2d3748]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748]/60 via-transparent to-transparent" />
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
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="inline-block px-4 py-2 bg-[#e53e3e] text-white text-sm font-bold tracking-widest rounded-full mb-6"
              >
                {heroSlides[currentSlide].subtitle}
              </motion.span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif text-balance">
                {heroSlides[currentSlide].title}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="btn-vibro-primary px-8 py-6 text-lg font-semibold rounded-lg"
                >
                  <Link href="/catalogo">
                    Ver Catalogo
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2d3748] px-8 py-6 text-lg font-semibold transition-all bg-transparent rounded-lg"
                >
                  <a href="https://wa.me/c/192427470114948" target="_blank" rel="noopener noreferrer">
                    Cotizar Ahora
                  </a>
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
          className="p-3 rounded-full bg-white/20 hover:bg-[#e53e3e] text-white transition-all backdrop-blur-sm"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex gap-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-[#e53e3e]' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 hover:bg-[#e53e3e] text-white transition-all backdrop-blur-sm"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-8 z-20 text-white/70 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest rotate-90 origin-center">SCROLL</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
