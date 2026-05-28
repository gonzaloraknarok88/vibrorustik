"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Eye, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const categories = ["Todos", "Pisos Estampados", "Revestimientos 3D", "Caminos", "Estructuras"]

const products = [
  {
    id: 1,
    name: "Baldosa Ladrillo Terracota",
    category: "Pisos Estampados",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47%20%281%29-gMYJGxp73VvT9qRrKWziVmeGNJQpQp.jpeg",
    specs: { uso: "Exterior", medida: "40x40 cm", resistencia: "H-30", acabado: "Ladrillo" }
  },
  {
    id: 2,
    name: "Revestimiento 3D Ondas",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42-mrOXQOrnYXftXWYp4EHNK1AyqVFNbn.jpeg",
    specs: { uso: "Interior/Exterior", medida: "Variado", resistencia: "H-30", acabado: "Ondulado" }
  },
  {
    id: 3,
    name: "Baldosa Abanico Circular",
    category: "Pisos Estampados",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.02%20%282%29-3MEon7GDiRRWqSxinOjlZD0xp8Tnza.jpeg",
    specs: { uso: "Exterior", medida: "40x40 cm", resistencia: "H-30", acabado: "Circular" }
  },
  {
    id: 4,
    name: "Piso Grafito Oscuro",
    category: "Pisos Estampados",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.01-r1N52aCOXFgDq7j1vmcdf8g9htUiLq.jpeg",
    specs: { uso: "Exterior", medida: "40x40 cm", resistencia: "H-30", acabado: "Grafito" }
  },
  {
    id: 5,
    name: "Durmiente Rustico Claro",
    category: "Caminos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%282%29-yz279zuZ4Dzb2SDaN2SWUVwwheTrqE.jpeg",
    specs: { uso: "Exterior", medida: "100x25 cm", resistencia: "H-30", acabado: "Madera" }
  },
  {
    id: 6,
    name: "Durmiente Rustico Gris",
    category: "Caminos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47-snOVfhlNQ50jnSkydd5VvA8jU9WfEZ.jpeg",
    specs: { uso: "Exterior", medida: "100x25 cm", resistencia: "H-30", acabado: "Natural" }
  },
  {
    id: 7,
    name: "Mesada Exterior Hormigon",
    category: "Estructuras",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.52%20%282%29-HGd15MpeYSj8CGDObg4GfcdufiIxOH.jpeg",
    specs: { uso: "Exterior", medida: "A medida", resistencia: "H-30", acabado: "Liso" }
  },
  {
    id: 8,
    name: "Baldosa Adoquin Clasico",
    category: "Pisos Estampados",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41-Ua0UCsdowHlZKgAW99waRkDq0UFSDT.jpeg",
    specs: { uso: "Exterior", medida: "40x40 cm", resistencia: "H-30", acabado: "Adoquin" }
  },
  {
    id: 9,
    name: "Textura 3D Cuadrada",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%281%29-gA53VoEreLekB6myOmI4QkGbRu0tWU.jpeg",
    specs: { uso: "Interior", medida: "40x40 cm", resistencia: "H-30", acabado: "3D" }
  },
  {
    id: 10,
    name: "Mosaico Colores Variados",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.04-FpSVD5e39lC27vc4AUHqM22QJ1R49r.jpeg",
    specs: { uso: "Interior/Exterior", medida: "Variado", resistencia: "H-30", acabado: "Mosaico" }
  },
  {
    id: 11,
    name: "Baldosa Ladrillo Rojo",
    category: "Pisos Estampados",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41%20%281%29-vBFes0nnqGmGfLrnitfjnl8KTduuHt.jpeg",
    specs: { uso: "Exterior", medida: "40x40 cm", resistencia: "H-30", acabado: "Ladrillo" }
  },
  {
    id: 12,
    name: "Paleta de Colores Premium",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.46.02%20%283%29-vP7zAoQZHkbpzpS0e3NYD1KU7rIazW.jpeg",
    specs: { uso: "Interior/Exterior", medida: "Variado", resistencia: "H-30", acabado: "Colores" }
  },
]

export function CatalogGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null)

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#e53e3e] text-white'
                    : 'bg-white text-[#2d3748] hover:bg-[#e2e8f0] border border-[#e2e8f0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#718096]" />
            <Input
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-[#e2e8f0] focus:border-[#e53e3e] focus:ring-[#e53e3e]"
            />
          </div>
        </div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg card-premium"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    quality={90}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#2d3748]/0 group-hover:bg-[#2d3748]/40 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#2d3748] hover:bg-[#e53e3e] hover:text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalles
                    </Button>
                  </div>
                  <span className="absolute top-3 left-3 tech-badge">
                    {product.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#2d3748] mb-2 line-clamp-2 font-serif">
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    <span className="text-xs bg-[#e53e3e]/10 text-[#e53e3e] px-2 py-1 rounded font-medium">
                      {product.specs.resistencia}
                    </span>
                    <span className="text-xs bg-[#e2e8f0] text-[#4a5568] px-2 py-1 rounded">
                      {product.specs.medida}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#718096] text-lg">No se encontraron productos</p>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2d3748]/80 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative h-72">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  quality={95}
                  sizes="(max-width: 672px) 100vw, 672px"
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                  aria-label="Cerrar"
                >
                  <X className="w-5 h-5 text-[#2d3748]" />
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#e53e3e] text-white text-xs font-bold rounded-full mb-3">
                  {selectedProduct.category}
                </span>
                <h2 className="text-2xl font-bold text-[#2d3748] mb-4 font-serif">
                  {selectedProduct.name}
                </h2>
                <div className="space-y-3 mb-6">
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-[#e2e8f0] pb-2">
                      <span className="text-[#718096] capitalize">{key}</span>
                      <span className="font-medium text-[#2d3748]">{value}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full btn-vibro-primary"
                  onClick={() => window.open('https://wa.me/c/192427470114948', '_blank')}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Solicitar Cotizacion
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
