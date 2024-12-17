// src/components/home/Process.js
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRegLightbulb, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa';

const Process = () => {
  const [openStep, setOpenStep] = useState(null);

  const steps = [
    {
      id: "01",
      title: 'Planificación',
      description: 'Durante la fase de planificación, realizamos un análisis exhaustivo de tus objetivos empresariales, público objetivo y requisitos específicos. Esto nos permite desarrollar una estrategia personalizada que se alinee perfectamente con tus metas.',
      icon: <FaRegLightbulb className="text-2xl" />
    },
    {
      id: "02",
      title: 'Diseño',
      description: 'Durante la fase de planificación, realizamos un análisis exhaustivo de tus objetivos empresariales, público objetivo y requisitos específicos. Esto nos permite desarrollar una estrategia personalizada que se alinee perfectamente con tus metas.',
      icon: <FaPencilRuler className="text-2xl" />
    },
    {
      id: "03",
      title: 'Desarrollo',
      description: 'Durante la fase de planificación, realizamos un análisis exhaustivo de tus objetivos empresariales, público objetivo y requisitos específicos. Esto nos permite desarrollar una estrategia personalizada que se alinee perfectamente con tus metas.',
      icon: <FaCode className="text-2xl" />
    },
    {
      id: "04",
      title: 'Lanzamiento',
      description: 'Durante la fase de planificación, realizamos un análisis exhaustivo de tus objetivos empresariales, público objetivo y requisitos específicos. Esto nos permite desarrollar una estrategia personalizada que se alinee perfectamente con tus metas.',
      icon: <FaRocket className="text-2xl" />
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-2 inline-block bg-[#1a10ff] text-white px-4 py-2 rounded-lg">
            Nuestro Proceso de Trabajo
          </h2>
          <p className="text-gray-600 mt-2">
            Guía Paso a Paso para Alcanzar tus Objetivos
          </p>
        </div>

        <div className="space-y-3">
          {steps.map((step) => (
            <motion.div
              layout
              key={step.id}
              className="rounded-3xl overflow-hidden shadow-[0_0_0_2px_#1a10ff]"
            >
              <div 
                onClick={() => setOpenStep(openStep === step.id ? null : step.id)}
                className={`
                  w-full cursor-pointer transition-all duration-300
                  ${openStep === step.id ? 'bg-[#1a10ff]' : 'bg-gray-100'}
                  rounded-3xl
                  shadow-[inset_0_0_0_2px_#1a10ff]
                `}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-bold ${openStep === step.id ? 'text-white' : 'text-[#0e0b5b]'}`}>
                      {step.id}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className={openStep === step.id ? 'text-white' : 'text-[#0e0b5b]'}>
                        {step.icon}
                      </span>
                      <h3 className={`text-xl font-medium ${openStep === step.id ? 'text-white' : 'text-[#0e0b5b]'}`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center border-2
                    ${openStep === step.id 
                      ? 'border-white bg-transparent' 
                      : 'border-[#0e0b5b] bg-white'
                    }
                  `}>
                    <span className={`text-2xl leading-none ${openStep === step.id ? 'text-white' : 'text-[#0e0b5b]'}`}>
                      {openStep === step.id ? '−' : '+'}
                    </span>
                  </div>
                </div>

                <AnimatePresence>
                  {openStep === step.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6"
                    >
                      <div className="border-t-2 border-white pt-4">
                        <p className="text-white">{step.description}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;