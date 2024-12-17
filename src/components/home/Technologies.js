// src/components/home/Technologies.js
'use client'
import { useRef } from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaPhp, 
  FaWordpress, 
  FaDocker, 
  FaAws,
  FaVuejs,
  FaLaravel,
  FaSass,
  FaAngular,
  FaGithub,
  FaLinux,
  FaJsSquare
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiFirebase, 
  SiMysql,
  SiRedis,
  SiKubernetes,
  SiExpress,
  SiFlask,
  SiAxios
} from 'react-icons/si';

const technologies = [
  {
    name: 'React',
    Icon: FaReact,
    color: 'text-[#61DAFB]'
  },
  {
    name: 'Next.js',
    Icon: SiNextdotjs,
    color: 'text-black'
  },
  {
    name: 'Angular',
    Icon: FaAngular,
    color: 'text-[#DD0031]'
  },
  {
    name: 'Vue.js',
    Icon: FaVuejs,
    color: 'text-[#4FC08D]'
  },
  {
    name: 'Tailwind CSS',
    Icon: SiTailwindcss,
    color: 'text-[#38B2AC]'
  },
  {
    name: 'Sass',
    Icon: FaSass,
    color: 'text-[#CC6699]'
  },
  {
    name: 'Node.js',
    Icon: FaNodeJs,
    color: 'text-[#339933]'
  },
  {
    name: 'Express.js',
    Icon: SiExpress,
    color: 'text-gray-800'
  },
  {
    name: 'Python',
    Icon: FaPython,
    color: 'text-[#3776AB]'
  },
  {
    name: 'Flask',
    Icon: SiFlask,
    color: 'text-gray-900'
  },
  {
    name: 'MongoDB',
    Icon: SiMongodb,
    color: 'text-[#47A248]'
  },
  {
    name: 'PostgreSQL',
    Icon: SiPostgresql,
    color: 'text-[#336791]'
  },
  {
    name: 'MySQL',
    Icon: SiMysql,
    color: 'text-[#4479A1]'
  },
  {
    name: 'Redis',
    Icon: SiRedis,
    color: 'text-[#DC382D]'
  },
  {
    name: 'Docker',
    Icon: FaDocker,
    color: 'text-[#2496ED]'
  },
  {
    name: 'Kubernetes',
    Icon: SiKubernetes,
    color: 'text-[#326CE5]'
  },
  {
    name: 'AWS',
    Icon: FaAws,
    color: 'text-[#232F3E]'
  },
  {
    name: 'Firebase',
    Icon: SiFirebase,
    color: 'text-[#FFCA28]'
  },
  {
    name: 'Laravel',
    Icon: FaLaravel,
    color: 'text-[#FF2D20]'
  },
  {
    name: 'PHP',
    Icon: FaPhp,
    color: 'text-[#777BB4]'
  },
  {
    name: 'WordPress',
    Icon: FaWordpress,
    color: 'text-[#21759B]'
  },
  {
    name: 'GitHub',
    Icon: FaGithub,
    color: 'text-black'
  },
  {
    name: 'Linux',
    Icon: FaLinux,
    color: 'text-[#FCC624]'
  },
  {
    name: 'Axios',
    Icon: SiAxios,
    color: 'text-[#5A29E4]'
  },
  {
    name: 'JavaScript',
    Icon: FaJsSquare,
    color: 'text-[#F7DF1E]'
  }
];

const TechCard = ({ tech }) => {
  const { Icon } = tech;
  
  return (
    <div className="min-w-[150px] h-[150px] mx-4 flex flex-col items-center justify-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
      <Icon className={`w-12 h-12 ${tech.color} group-hover:scale-110 transition-transform duration-300`} />
      <p className="mt-4 text-gray-600 font-medium">{tech.name}</p>
    </div>
  );
};

const Technologies = () => {
  const sliderRef = useRef(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-tech">
            {[...technologies, ...technologies].map((tech, index) => (
              <TechCard 
                key={`${tech.name}-${index}`} 
                tech={tech} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
