// src/components/home/Stats.js
'use client'
import { motion } from 'framer-motion';
import { 
  UsersIcon, 
  CheckBadgeIcon, 
  StarIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: '250+',
      title: 'Clientes Satisfechos',
      icon: UsersIcon,
    },
    {
      id: 2,
      number: '400+',
      title: 'Proyectos Completados',
      icon: CheckBadgeIcon,
    },
    {
      id: 3,
      number: '98%',
      title: 'Satisfacción',
      icon: StarIcon,
    },
    {
      id: 4,
      number: '10+',
      title: 'Años de Experiencia',
      icon: ClockIcon,
    }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-blue-100">{stat.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;