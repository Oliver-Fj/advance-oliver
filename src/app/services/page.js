// src/app/services/page.js
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CodeBracketIcon, 
  DevicePhoneMobileIcon, 
  RocketLaunchIcon,
  CommandLineIcon,
  CursorArrowRaysIcon,
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline';

// Datos de servicios directamente en el componente
const servicesData = [
  {
    id: 1,
    title: 'Desarrollo Web',
    icon: CodeBracketIcon,
    description: 'Creamos sitios web modernos y responsivos que destacan tu marca y mejoran la experiencia de usuario.',
    features: [
      'Desarrollo Frontend y Backend',
      'Diseño Responsivo',
      'Optimización de Rendimiento',
      'SEO Técnico'
    ]
  },
  {
    id: 2,
    title: 'Aplicaciones Móviles',
    icon: DevicePhoneMobileIcon,
    description: 'Desarrollamos aplicaciones nativas y multiplataforma que conectan con tu audiencia en cualquier dispositivo.',
    features: [
      'Apps iOS y Android',
      'Experiencia de Usuario Móvil',
      'Integración con APIs',
      'Push Notifications'
    ]
  },
  {
    id: 3,
    title: 'Marketing Digital',
    icon: RocketLaunchIcon,
    description: 'Estrategias digitales que impulsan tu presencia online y generan resultados medibles.',
    features: [
      'SEO y SEM',
      'Marketing de Contenidos',
      'Analítica Web',
      'Email Marketing'
    ]
  },
  {
    id: 4,
    title: 'Desarrollo Backend',
    icon: CommandLineIcon,
    description: 'Construimos APIs robustas y sistemas escalables que potencian tu negocio.',
    features: [
      'Arquitectura de APIs',
      'Bases de Datos',
      'Seguridad',
      'Microservicios'
    ]
  },
  {
    id: 5,
    title: 'UI/UX Design',
    icon: CursorArrowRaysIcon,
    description: 'Diseñamos interfaces intuitivas y experiencias de usuario que cautivan.',
    features: [
      'Diseño de Interfaces',
      'Prototipado',
      'User Research',
      'Testing de Usabilidad'
    ]
  },
  {
    id: 6,
    title: 'Mantenimiento',
    icon: WrenchScrewdriverIcon,
    description: 'Servicios de mantenimiento y soporte para mantener tu plataforma actualizada y segura.',
    features: [
      'Actualizaciones',
      'Backups',
      'Monitoreo',
      'Soporte Técnico'
    ]
  }
];

const pricingPlans = {
  // ... aquí van los planes de precios que ya teníamos
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);

  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl text-blue-100">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>
        </div>
      </div>

      {/* Servicios Detallados */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>

              <AnimatePresence>
                {activeService === service.id && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="border-t border-gray-100 overflow-hidden"
                  >
                    <div className="p-8 bg-gray-50">
                      <h4 className="font-semibold mb-4">Características:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección CTA */}
      <div className="bg-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Listo para empezar tu proyecto?
          </h2>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Contáctanos
          </button>
        </div>
      </div>
    </main>
  );
}