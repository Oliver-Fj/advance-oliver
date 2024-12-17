// src/lib/data.js
import { 
    CodeBracketIcon, 
    DevicePhoneMobileIcon, 
    RocketLaunchIcon,
    CommandLineIcon,
    CursorArrowRaysIcon,
    WrenchScrewdriverIcon
  } from '@heroicons/react/24/outline';
  
  export const services = [
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
      ],
      technologies: [
        'React', 'Next.js', 'Node.js', 'MongoDB'
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
      ],
      technologies: [
        'React Native', 'Flutter', 'Firebase'
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
      ],
      technologies: [
        'Google Analytics', 'SEMrush', 'Mailchimp'
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
      ],
      technologies: [
        'Node.js', 'Python', 'PostgreSQL', 'Docker'
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
      ],
      technologies: [
        'Figma', 'Adobe XD', 'Sketch'
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
      ],
      technologies: [
        'AWS', 'Docker', 'Kubernetes'
      ]
    }
  ];
  
  export const faqs = [
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer: "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 4-6 semanas, mientras que proyectos más complejos pueden llevar 3-4 meses."
    },
    {
      question: "¿Qué metodología de trabajo utilizan?",
      answer: "Utilizamos metodologías ágiles como Scrum, lo que nos permite mantener una comunicación constante y entregar resultados de manera iterativa."
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer: "Sí, ofrecemos planes de mantenimiento y soporte continuo para asegurar que tu proyecto siga funcionando de manera óptima."
    },
    {
      question: "¿Cómo garantizan la calidad del código?",
      answer: "Implementamos prácticas de código limpio, realizamos pruebas automatizadas y hacemos revisiones de código periódicas."
    },
    {
      question: "¿Puedo solicitar cambios durante el desarrollo?",
      answer: "Sí, nuestra metodología ágil permite incorporar cambios y ajustes durante el desarrollo del proyecto."
    }
  ];
  
  export const pricingPlans = {
    basic: {
      name: 'Plan Basic',
      price: 'S/149/mes',
      isMonthly: true,
      forProjects: 'Para 1 proyecto',
      features: [
        'Contenido profesional y actualizado',
        'Certificados digitales',
        'Acceso básico a herramientas',
      ],
      disabledFeatures: [
        'Certificados físicos',
        'Acceso premium',
        'Eventos exclusivos',
        'App móvil'
      ]
    },
    expert: {
      name: 'Plan Expert',
      price: 'S/62/mes',
      isAnnual: true,
      originalPrice: 'S/739',
      discount: 'S/151',
      forProjects: 'Para 1 proyecto',
      features: [
        'Todo lo del plan Basic',
        'Certificados físicos',
        'Acceso premium',
        'Eventos exclusivos',
        'App móvil'
      ],
      installments: {
        number: 4,
        price: 'S/185'
      }
    },
    expertDuo: {
      name: 'Plan Expert Duo',
      price: 'S/83/mes',
      isAnnual: true,
      originalPrice: 'S/989',
      discount: 'S/201',
      forProjects: '2-4 proyectos',
      features: [
        'Todo lo del plan Expert',
        'Soporte prioritario',
        'Consultoría personalizada',
        'Acceso a recursos premium'
      ],
      installments: {
        number: 4,
        price: 'S/248'
      }
    }
  };