"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const contactInfo = [
  {
    icon: MapPin,
    title: "Dirección",
    details: ["Ruta L-751, Km 20.7", "Las Camelias"]
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["WhatsApp Business", "Atención inmediata"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@vibrorustik.com", "ventas@vibrorustik.com"]
  },
  {
    icon: Clock,
    title: "Horario",
    details: ["Lun - Vie: 8:00 - 18:00", "Sáb: 9:00 - 13:00"]
  },
]

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: '',
    tipo: 'residencial'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#800020] to-[#4a1942]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-bold tracking-widest rounded-full mb-6">
              CONTACTO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hablemos de su <span className="text-gold-gradient">Proyecto</span>
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Estamos listos para asesorarle y crear la solución perfecta para su espacio. 
              Contáctenos hoy y reciba una cotización personalizada.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Solicite su Cotización
              </h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¡Mensaje Enviado!
                  </h3>
                  <p className="text-gray-600">
                    Nos pondremos en contacto con usted a la brevedad.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input
                        id="nombre"
                        value={formState.nombre}
                        onChange={(e) => setFormState({...formState, nombre: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input
                        id="telefono"
                        value={formState.telefono}
                        onChange={(e) => setFormState({...formState, telefono: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="empresa">Empresa / Constructora</Label>
                      <Input
                        id="empresa"
                        value={formState.empresa}
                        onChange={(e) => setFormState({...formState, empresa: e.target.value})}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="tipo">Tipo de Proyecto</Label>
                    <select
                      id="tipo"
                      value={formState.tipo}
                      onChange={(e) => setFormState({...formState, tipo: e.target.value})}
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent"
                    >
                      <option value="residencial">Residencial</option>
                      <option value="comercial">Comercial</option>
                      <option value="corporativo">Corporativo</option>
                      <option value="hoteleria">Hotelería</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="mensaje">Describa su Proyecto *</Label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      value={formState.mensaje}
                      onChange={(e) => setFormState({...formState, mensaje: e.target.value})}
                      required
                      className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020] focus:border-transparent resize-none"
                      placeholder="Cuéntenos sobre su proyecto, metros cuadrados aproximados, tipo de acabado deseado..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#800020] hover:bg-[#5c0017] text-white py-6 text-lg font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Enviar Solicitud
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-gray-600 mb-8">
                  Nuestro equipo está disponible para asesorarle en la selección de los 
                  mejores revestimientos y pisos para su proyecto. No dude en contactarnos.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#800020] to-[#4a1942] flex items-center justify-center mb-4">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-bold mb-4">¿Prefiere WhatsApp?</h3>
                <p className="text-white/90 mb-6">
                  Envíenos un mensaje directo y le responderemos de inmediato. 
                  Ideal para consultas rápidas y envío de fotos de su proyecto.
                </p>
                <Button
                  asChild
                  className="bg-white text-[#128C7E] hover:bg-white/90 font-bold"
                >
                  <a
                    href="https://wa.me/c/192427470114948"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chatear por WhatsApp
                  </a>
                </Button>
              </motion.div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#800020] mx-auto mb-2" />
                  <p className="text-gray-600 font-medium">Ruta L-751, Km 20.7</p>
                  <p className="text-gray-500 text-sm">Las Camelias</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
