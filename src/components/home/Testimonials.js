// src/components/home/Testimonials.js
'use client'
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaTimes } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'María García',
    position: 'CEO de TechStart',
    image: '/testimonials/maria.jpg',
    content: 'Exactamente lo que los fundadores necesitan. El curso más completo que existe, ¡me encantó! La mejor parte es que incluye marcos y plantillas.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    position: 'Fundador de EcoShop',
    image: '/testimonials/carlos.jpg',
    content: 'El equipo realmente sabe cómo ayudarte a enfocarte y actuar en tus principales prioridades. Son orientados a la acción y se basan en una experiencia empresarial muy diversa.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Ana Martínez',
    position: 'Directora de CreativeMinds',
    image: '/testimonials/ana.jpg',
    content: 'Su experiencia en dirección de empresas fue evidente desde los primeros minutos. En semanas me ayudaron a priorizar el enfoque en el trabajo más importante.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 4,
    name: 'Juan López',
    position: 'CTO de InnoTech',
    image: '/testimonials/juan.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 5,
    name: 'Nefeli Morales',
    position: 'CTO de InnoTech',
    image: '/testimonials/nefeli.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 6,
    name: 'Angel Gabriel',
    position: 'CTO de InnoTech',
    image: '/testimonials/angel.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 7,
    name: 'Azucena Garcia',
    position: 'CTO de InnoTech',
    image: '/testimonials/azucena.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 8,
    name: 'Armando Paredes',
    position: 'CTO de InnoTech',
    image: '/testimonials/armando.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 9,
    name: 'Pedro Castillo',
    position: 'CTO de InnoTech',
    image: '/testimonials/pedro.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 10,
    name: 'Dina Boluarte',
    position: 'CTO de InnoTech',
    image: '/testimonials/dina.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 11,
    name: 'Pablo López',
    position: 'CTO de InnoTech',
    image: '/testimonials/pablo.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 12,
    name: 'Ventura Garcia',
    position: 'CTO de InnoTech',
    image: '/testimonials/ventura.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 13,
    name: 'Oliver Perez',
    position: 'CTO de InnoTech',
    image: '/testimonials/oliver.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 14,
    name: 'Luciana Santosz',
    position: 'CTO de InnoTech',
    image: '/testimonials/luciana.webp',
    content: 'Una experiencia transformadora. La metodología y el enfoque práctico han sido fundamentales para el crecimiento de nuestro proyecto.',
    socialLinks: {
      twitter: '#',
      linkedin: '#'
    }
  }
  
];

const TestimonialCard = ({ testimonial, onClick }) => (
  <div 
    onClick={onClick}
    className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-blue-600 p-6 cursor-pointer hover:scale-105 transition-transform duration-300 flex flex-col justify-between h-[200px] rounded-3xl mx-2"
  >
    <p className="text-white text-base mb-4 line-clamp-3">&quot;{testimonial.content}&quot;</p>
    <div className="flex items-center gap-3">
      <img 
        src={testimonial.image} 
        alt={testimonial.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="text-white">
        <h4 className="font-medium text-sm">{testimonial.name}</h4>
        <p className="text-blue-100 text-xs">{testimonial.position}</p>
      </div>
    </div>
  </div>
);

const Modal = ({ testimonial, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="bg-white rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{testimonial.name}</h3>
            <p className="text-blue-600">{testimonial.position}</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <p className="text-gray-700 text-lg mb-6">&quot;{testimonial.content}&quot;</p>
      <div className="flex gap-4">
        <a 
          href={testimonial.socialLinks.twitter} 
          className="text-blue-400 hover:text-blue-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={24} />
        </a>
        <a 
          href={testimonial.socialLinks.linkedin}
          className="text-blue-700 hover:text-blue-900 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </motion.div>
  </motion.div>
);

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    sliderRef.current.style.cursor = 'grabbing';
    sliderRef.current.style.userSelect = 'none';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
      sliderRef.current.style.removeProperty('user-select');
    }
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-light text-gray-900 mb-4">
          Historias de Éxito
        </h2>
        <p className="text-lg text-gray-600">
          Lo que dicen nuestros clientes sobre nosotros
        </p>
      </div>

      <div className="relative">
        <div 
          ref={sliderRef}
          className="overflow-hidden cursor-grab"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
                onClick={() => !isDragging && setSelectedTestimonial(testimonial)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTestimonial && (
          <Modal 
            testimonial={selectedTestimonial} 
            onClose={() => setSelectedTestimonial(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Testimonials;