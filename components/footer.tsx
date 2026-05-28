"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram,
  ExternalLink,
  Shield,
  Award
} from 'lucide-react'

const footerLinks = {
  productos: [
    { name: "Pisos Estampados", href: "/catalogo?cat=pisos" },
    { name: "Revestimientos 3D", href: "/catalogo?cat=revestimientos" },
    { name: "Caminos de Jardín", href: "/catalogo?cat=caminos" },
    { name: "Muros Decorativos", href: "/catalogo?cat=muros" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "/nosotros" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Proceso de Trabajo", href: "/nosotros#proceso" },
    { name: "Certificaciones", href: "/nosotros#certificaciones" },
  ],
  legal: [
    { name: "Términos y Condiciones", href: "/legal/terminos" },
    { name: "Política de Privacidad", href: "/legal/privacidad" },
    { name: "Garantías", href: "/legal/garantias" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-white">VIBRO</span>
                <span className="text-gold-gradient">RUSTIK</span>
              </h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Transformamos espacios con revestimientos y pisos de alta gama. 
                Más de 15 años creando soluciones premium para arquitectos, 
                constructoras y proyectos de alto estándar.
              </p>
              
              {/* Certifications */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg">
                  <Shield className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-xs text-gray-300">ISO 9001</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-lg">
                  <Award className="w-5 h-5 text-[#d4af37]" />
                  <span className="text-xs text-gray-300">Calidad Premium</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/1CUZc3uPWv/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-[#800020] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/vibrorustik_oficial?igsh=N3NmdDBlYWR4aWxn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full hover:bg-[#800020] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Products Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-gold-gradient">Productos</h3>
              <ul className="space-y-3">
                {footerLinks.productos.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-gold-gradient">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Legal Links */}
              <h3 className="text-lg font-semibold mb-4 mt-8 text-gold-gradient">Legal</h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-gold-gradient">Contacto</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Ruta L-751, Km 20.7, Las Camelias
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <a 
                    href="https://wa.me/c/192427470114948"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    WhatsApp Business
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <a 
                    href="mailto:info@vibrorustik.com"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    info@vibrorustik.com
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    Lun - Vie: 8:00 - 18:00
                  </span>
                </li>
              </ul>

              {/* Portfolio Link */}
              <a
                href="https://drive.google.com/drive/folders/16rnNUO6Gzh4fvXWd9kr8oJL1bK9PQaUe?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[#800020] hover:bg-[#5c0017] rounded-lg transition-colors text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Ver Portafolio Completo
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} VIBRORUSTIK. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Diseñado con excelencia para proyectos de alto estándar
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
