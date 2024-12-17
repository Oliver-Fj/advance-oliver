// src/components/ui/services/page.js
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

const servicesDetails = [
  {
    id: 1,
    title: 'Desarrollo Web',
    icon: CodeBracketIcon,
    description: 'Transformamos tu visión en realidad digital con sitios web modernos y efectivos.',
    features: [
      'Desarrollo Frontend y Backend',
      'Diseño Responsivo',
      'Optimización de Rendimiento',
      'SEO Técnico'
    ],
    process: [
      {
        title: 'Análisis y Planificación',
        description: 'Evaluamos tus necesidades y establecemos objetivos claros.'
      },
      {
        title: 'Diseño y Prototipado',
        description: 'Creamos wireframes y diseños interactivos para tu aprobación.'
      },
      {
        title: 'Desarrollo',
        description: 'Implementamos tu sitio con las últimas tecnologías.'
      },
      {
        title: 'Pruebas y Lanzamiento',
        description: 'Realizamos pruebas exhaustivas y desplegamos tu sitio.'
      }
    ],
    plans: [
      {
        name: 'Plan Basic',
        price: 'S/149/mes',
        features: [
          'Sitio web básico',
          'Dominio personalizado',
          'Hosting incluido',
          'Soporte básico'
        ]
      },
      {
        name: 'Plan Expert',
        price: 'S/62/mes',
        isAnnual: true,
        originalPrice: 'S/739',
        discount: 'S/151',
        features: [
          'Todo lo del plan Basic',
          'E-commerce integrado',
          'SEO avanzado',
          'Soporte premium'
        ]
      },
      {
        name: 'Plan Expert Duo',
        price: 'S/83/mes',
        isAnnual: true,
        originalPrice: 'S/989',
        discount: 'S/201',
        features: [
          'Todo lo del plan Expert',
          'Múltiples idiomas',
          'Integraciones personalizadas',
          'Consultor dedicado'
        ]
      }
    ],
    portfolio: [
      {
        title: 'E-commerce de Moda',
        image: '/portfolio/ecommerce1.jpg',
        description: 'Tienda en línea con más de 10,000 productos y sistema de pagos integrado.'
      },
      // Más ejemplos...
    ],
    testimonials: [
      {
        name: 'María García',
        position: 'CEO de FashionTech',
        content: 'El equipo entendió perfectamente nuestra visión y entregó más allá de nuestras expectativas.',
        image: '/testimonials/maria.jpg'
      },
      // Más testimonios...
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo toma desarrollar un sitio web?',
        answer: 'El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 4-6 semanas, mientras que proyectos más complejos pueden llevar 3-4 meses.'
      },
      // Más FAQs...
    ]
  },
  // ... Repite la misma estructura para los demás servicios
];

const ServicePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
          <p className="text-xl text-blue-100">
            Soluciones digitales completas para impulsar tu negocio al siguiente nivel
          </p>
        </div>
      </section>

      {/* Servicios Detallados */}
      {servicesDetails.map((service) => (
        <section key={service.id} className="py-20 border-b">
          <div className="max-w-7xl mx-auto px-4">
            {/* Descripción del Servicio */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="inline-block p-4 bg-blue-50 rounded-2xl mb-6">
                  <service.icon className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                
                <h3 className="text-xl font-semibold mb-4">Características:</h3>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Portfolio Preview */}
              <div className="bg-gray-50 rounded-2xl p-8">
                {service.portfolio.slice(0, 1).map((item, index) => (
                  <div key={index}>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="rounded-xl mb-4"
                    />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Planes de Precios */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Planes Disponibles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.plans.map((plan) => (
                  <div 
                    key={plan.name}
                    className="bg-white rounded-2xl shadow-lg p-8 border-2 border-gray-100 hover:border-blue-200 transition-all"
                  >
                    <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                    <div className="mb-6">
                      <p className="text-3xl font-bold">{plan.price}</p>
                      {plan.isAnnual && (
                        <div className="text-sm text-gray-600">
                          <p>Cobro anual recurrente de {plan.originalPrice}</p>
                          <p className="text-green-600">Ahorras {plan.discount}</p>
                        </div>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      Elegir Plan
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Proceso */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Nuestro Proceso</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonios */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Lo que dicen nuestros clientes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center gap-4 mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h3>
              <div className="max-w-3xl mx-auto space-y-6">
                {service.faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold mb-2">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ServicePage;