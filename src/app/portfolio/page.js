'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiNextdotjs, SiTailwindcss, SiStripe, SiReact, SiNodedotjs, SiMongodb, SiVuedotjs, SiPhp, SiMysql, SiWordpress, SiLaravel, SiFirebase } from 'react-icons/si';

const getTechIcon = (tech) => {
  const icons = {
    'Next.js': <SiNextdotjs className="w-5 h-5" />,
    'Tailwind CSS': <SiTailwindcss className="w-5 h-5" />,
    'Stripe': <SiStripe className="w-5 h-5" />,
    'React Native': <SiReact className="w-5 h-5" />,
    'Node.js': <SiNodedotjs className="w-5 h-5" />,
    'MongoDB': <SiMongodb className="w-5 h-5" />,
    'Vue.js': <SiVuedotjs className="w-5 h-5" />,
    'PHP': <SiPhp className="w-5 h-5" />,
    'MySQL': <SiMysql className="w-5 h-5" />,
    'WordPress': <SiWordpress className="w-5 h-5" />,
    'Laravel': <SiLaravel className="w-5 h-5" />,
    'Firebase': <SiFirebase className="w-5 h-5" />
  };
  return icons[tech] || null;
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white rounded-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm font-medium inline-flex items-center gap-1.5 hover:bg-gray-100 transition-colors"
            >
              {getTechIcon(tech)}
              {tech}
            </span>
          ))}
        </div>
        <a href={project.link} className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors">
          Ver proyecto
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default function PortfolioPage() {
  const [filter, setFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Moda',
      category: 'ecommerce',
      image: '/portfolio/ecommerce1.jpg',
      description: 'Tienda online para marca de moda sustentable con diseño minimalista y experiencia de compra optimizada.',
      technologies: ['Next.js', 'Tailwind CSS', 'Stripe']
    },
    {
      id: 2,
      title: 'App Delivery',
      category: 'mobile',
      image: '/portfolio/app1.jpg',
      description: 'Aplicación móvil para servicio de delivery con tracking en tiempo real y sistema de pagos integrado.',
      technologies: ['React Native', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      title: 'Portal Educativo',
      category: 'web',
      image: '/portfolio/edu1.jpg',
      description: 'Plataforma educativa con sistema de cursos online, evaluaciones y seguimiento de progreso.',
      technologies: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      id: 4,
      title: 'Blog Corporativo',
      category: 'cms',
      image: '/portfolio/blog1.jpg',
      description: 'Blog empresarial personalizado con sistema de gestión de contenidos y newsletter.',
      technologies: ['WordPress', 'PHP', 'MySQL']
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      category: 'web',
      image: '/portfolio/dash1.jpg',
      description: 'Panel de control para visualización de datos y métricas empresariales en tiempo real.',
      technologies: ['React Native', 'Firebase', 'Node.js']
    },
    {
      id: 6,
      title: 'Marketplace Local',
      category: 'ecommerce',
      image: '/portfolio/market1.jpg',
      description: 'Plataforma de comercio electrónico para conectar vendedores locales con compradores.',
      technologies: ['Next.js', 'MongoDB', 'Stripe']
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'ecommerce', name: 'E-commerce' },
    { id: 'mobile', name: 'Apps Móviles' },
    { id: 'web', name: 'Sitios Web' },
    { id: 'cms', name: 'CMS' }
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-light text-white mb-6">
            Nuestro Portafolio
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos
          </p>
        </div>
      </div>

      <div className="sticky top-16 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-center gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${filter === category.id 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}