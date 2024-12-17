// src/components/common/Footer.js
'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const links = {
    compañia: [
      { name: 'Sobre Nosotros', href: '/about' },
      { name: 'Servicios', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' }
    ],
    servicios: [
      { name: 'Desarrollo Web', href: '/services#web' },
      { name: 'Apps Móviles', href: '/services#mobile' },
      { name: 'Marketing Digital', href: '/services#marketing' },
      { name: 'UI/UX Design', href: '/services#design' }
    ],
    soporte: [
      { name: 'FAQ', href: '/faq' },
      { name: 'Políticas de Privacidad', href: '/privacy' },
      { name: 'Términos y Condiciones', href: '/terms' },
      { name: 'Contacto', href: '/contact' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white">
              DevStudio
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Transformamos ideas en experiencias digitales únicas que cautivan a tus usuarios y potencian tu negocio.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Compañía</h3>
            <ul className="space-y-2">
              {links.compañia.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2">
              {links.servicios.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              {links.soporte.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DevStudio. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <Link 
                href="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;