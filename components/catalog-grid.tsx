"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, Grid, LayoutGrid, Eye, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const categories = ["Todos", "Pisos Exteriores", "Pisos Interiores", "Revestimientos 3D", "Caminos", "Muros"]

const products = [
  {
    id: 1,
    name: "Textura 3D Cuadrada Oscura",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40-sAWYJhZ8JMpPBCcuu1JrwAubRvv4J9.jpeg",
    specs: { uso: "Interior", medida: "40x40 cm", material: "Hormigón Texturizado" }
  },
  {
    id: 2,
    name: "Textura 3D Mosaico Gris",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.39-Svq9DgwrlZLNUzNN47Y0Lnz1hHAfPC.jpeg",
    specs: { uso: "Interior/Exterior", medida: "Variado", material: "Hormigón Prefabricado" }
  },
  {
    id: 3,
    name: "Textura 3D Natural",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%281%29-gA53VoEreLekB6myOmI4QkGbRu0tWU.jpeg",
    specs: { uso: "Interior", medida: "40x40 cm", material: "Hormigón con Acabado Madera" }
  },
  {
    id: 4,
    name: "Hormigón Estampado Ladrillo Terracota",
    category: "Pisos Exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41%20%281%29-vBFes0nnqGmGfLrnitfjnl8KTduuHt.jpeg",
    specs: { uso: "Exterior", medida: "Continuo", material: "Hormigón Estampado" }
  },
  {
    id: 5,
    name: "Hormigón Estampado Ladrillo Naranja",
    category: "Pisos Interiores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47%20%281%29-gMYJGxp73VvT9qRrKWziVmeGNJQpQp.jpeg",
    specs: { uso: "Interior/Exterior", medida: "Continuo", material: "Hormigón Estampado" }
  },
  {
    id: 6,
    name: "Ondas Decorativas Beige",
    category: "Revestimientos 3D",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%282%29-suympREralqFWXJNfoIvEzeMnefKid.jpeg",
    specs: { uso: "Interior", medida: "Variado", material: "Hormigón Ondulado" }
  },
  {
    id: 7,
    name: "Barra Decorativa Ondulada",
    category: "Muros",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42-mrOXQOrnYXftXWYp4EHNK1AyqVFNbn.jpeg",
    specs: { uso: "Exterior", medida: "A medida", material: "Hormigón Decorativo" }
  },
  {
    id: 8,
    name: "Estampado Adoquín Clásico",
    category: "Pisos Exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41-Ua0UCsdowHlZKgAW99waRkDq0UFSDT.jpeg",
    specs: { uso: "Exterior", medida: "Continuo", material: "Hormigón Estampado" }
  },
  {
    id: 9,
    name: "Estampado Circular",
    category: "Pisos Exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.41%20%282%29-dQq1eiZXebpEhgB58r8MWrzZgKbnfk.jpeg",
    specs: { uso: "Exterior", medida: "60x60 cm", material: "Baldosas de Hormigón" }
  },
  {
    id: 10,
    name: "Estampado Slate Oscuro",
    category: "Pisos Exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42%20%281%29-mIm44zoWeH13Rl5Cq9HkLJO12ul2uZ.jpeg",
    specs: { uso: "Exterior", medida: "Continuo", material: "Hormigón Estampado" }
  },
  {
    id: 11,
    name: "Durmientes Rústicos Jardín",
    category: "Caminos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.42%20%282%29-edwjECql7tQOKYh0wzHRnM69UOojpY.jpeg",
    specs: { uso: "Exterior", medida: "100x25 cm", material: "Hormigón Imitación Madera" }
  },
  {
    id: 12,
    name: "Durmientes con Gravilla",
    category: "Caminos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44-6WrrIsHI9eJnwpVEl2qcmX1y0CyhZb.jpeg",
    specs: { uso: "Exterior", medida: "100x25 cm", material: "Hormigón con Piedra" }
  },
  {
    id: 13,
    name: "Durmiente Individual Claro",
    category: "Caminos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.40%20%282%29-yz279zuZ4Dzb2SDaN2SWUVwwheTrqE.jpeg",
    specs: { uso: "Exterior", medida: "100x25 cm", material: "Hormigón Imitación Madera" }
  },
  {
    id: 14,
    name: "Durmiente Individual Rosa",
    category: "Caminos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%283%29-pzxeJM9gxDP2HzgX8p0Fi95O5eU2qb.jpeg",
    specs: { uso: "Exterior", medida: "100x25 cm", material: "Hormigón Coloreado" }
  },
  {
    id: 15,
    name: "Borde Piscina Rústico",
    category: "Pisos Exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.47-snOVfhlNQ50jnSkydd5VvA8jU9WfEZ.jpeg",
    specs: { uso: "Exterior", medida: "A medida", material: "Hormigón Antideslizante" }
  },
  {
    id: 16,
    name: "Estampado Adoquín Grande",
    category: "Pisos Exteriores",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-07%20at%2020.45.44%20%281%29-4TII7OrGjsaP8xDU4gPR1S0VgqW6Lv.jpeg",
    specs: { uso: "Exterior", medida: "Continuo", material: "Hormigón Estampado" }
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[#800020] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Buscar productos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
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
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <Button
                      onClick={() => setSelectedProduct(product)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-[#800020] hover:bg-[#800020] hover:text-white"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Detalles
                    </Button>
                  </div>
                  <span className="absolute top-3 left-3 px-2 py-1 bg-[#d4af37] text-[#800020] text-xs font-bold rounded">
                    {product.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(product.specs).slice(0, 2).map(([key, value]) => (
                      <span key={key} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No se encontraron productos</p>
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
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
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
                  quality={90}
                  sizes="(max-width: 672px) 100vw, 672px"
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#d4af37] text-[#800020] text-xs font-bold rounded-full mb-3">
                  {selectedProduct.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {selectedProduct.name}
                </h2>
                <div className="space-y-3 mb-6">
                  {Object.entries(selectedProduct.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center border-b border-gray-100 pb-2">
                      <span className="text-gray-500 capitalize">{key}</span>
                      <span className="font-medium text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full bg-[#800020] hover:bg-[#5c0017] text-white"
                  onClick={() => window.open('https://wa.me/c/192427470114948', '_blank')}
                >
                  Solicitar Cotización
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
