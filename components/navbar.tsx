"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Building2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-navbar shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28">
          {/* Logo - Circular as per spec */}
          <Link href="/" className="flex items-center gap-4">
            <motion.div 
              className="relative w-20 h-20 sm:w-24 sm:h-24 logo-circle overflow-hidden animate-float"
              style={{ 
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                border: '3px solid #e53e3e'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gemini_Generated_Image_wqj61bwqj61bwqj6.png-VFES0vt7W6UwovCdrjxtoyHfTzDwjq.jpeg"
                alt="VIBRORUSTIK Logo"
                fill
                quality={95}
                sizes="96px"
                className="object-contain bg-white p-1"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-3xl font-bold tracking-tight font-serif">
                <span className="text-[#2d3748]">VIBRO</span>
                <span className="text-vibro-gradient">RUSTIK</span>
              </h1>
              <p className="text-sm text-[#718096] tracking-widest">Pisos y Revestimientos</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#2d3748] hover:text-[#e53e3e] transition-colors text-sm font-medium tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e53e3e] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button - RED as per spec */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="btn-vibro-primary px-6 py-2 rounded-lg"
            >
              <a href="https://wa.me/c/192427470114948" target="_blank" rel="noopener noreferrer">
                <Building2 className="w-4 h-4 mr-2" />
                Cotizar Ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#2d3748]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-[#2d3748] hover:text-[#e53e3e] transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="w-full btn-vibro-primary mt-4"
              >
                <a href="https://wa.me/c/192427470114948" target="_blank" rel="noopener noreferrer">
                  Cotizar Ahora
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
