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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
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

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-600">
            Soluciones digitales completas para hacer crecer tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              onClick={() => setSelectedService(service)}
              whileHover={{ y: -5 }}
              className="bg-white border-2 border-gray-100 rounded-xl p-8 text-center cursor-pointer
                shadow-[0_3px_10px_rgb(0,0,0,0.1)] 
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.15)] 
                hover:border-blue-100
                transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl">
                  <service.icon className="w-10 h-10 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalles */}
        <AnimatePresence>
          {selectedService && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-black/50 z-40"
              />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="fixed inset-x-4 top-[10%] max-w-2xl mx-auto bg-white rounded-xl p-8 z-50 shadow-2xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl">
                    <selectedService.icon className="w-10 h-10 text-blue-600" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  {selectedService.title}
                </h3>

                <p className="text-gray-600 mb-6 text-center">
                  {selectedService.description}
                </p>

                <div className="space-y-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-600" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;    