// src/components/home/Hero.js
'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const texts = [
    'que impactan',
    'que venden',
    'que destacan'
  ];

  const slides = [
    {
      image: '/chico-laptop.png',
      // bgColor: '#F8FAFF',
      svg: '/svg/shape1.png'
    },
    {
      image: '/chica-laptop.png',
      // bgColor: '#F0F7FF',
      svg: '/svg/shape2.png'
    },
    {
      image: '/chico-codigo.png',
      // bgColor: '#F0FFF4',
      svg: '/svg/shape3.png'
    }
  ];

  useEffect(() => {
    const text = texts[loopNum % texts.length];
    let delta = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      setDisplayText(prev => {
        if (isDeleting) {
          if (prev.length === 0) {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setCurrentSlide((currentSlide + 1) % slides.length);
            return '';
          }
          return prev.slice(0, -1);
        }
        if (prev === text) {
          setTimeout(() => setIsDeleting(true), 2000);
          return prev;
        }
        return text.slice(0, prev.length + 1);
      });
    }, delta);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum]);

  return (
    <section className="min-h-screen relative bg-white">
      {/* Background SVG y color para cada slider */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full relative"
          >
            <img
              src={slides[currentSlide].svg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ backgroundColor: slides[currentSlide].bgColor }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="max-w-[1600px] mx-auto min-h-screen relative px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full pt-20 lg:pt-0">
          {/* Texto */}
          <div className="w-full lg:w-[45%] lg:pl-8 xl:pl-20 text-center lg:text-left z-10 mb-8 lg:mb-0">
            <motion.div className="space-y-6 lg:space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight text-[#0B1426]">
                <div>Desarrollamos</div>
                <div>sitios web</div>
                <div className="whitespace-nowrap">
                  {displayText}
                  <span className="inline-block w-[2px] h-6 lg:h-8 bg-blue-500 ml-1 animate-blink" />
                </div>
              </h1>

              <p className="text-base lg:text-lg text-gray-500 font-light max-w-lg mx-auto lg:mx-0">
                Transformamos tu visión en una experiencia digital única
                que cautiva a tus usuarios y potencia tu negocio.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 lg:px-8 py-3 bg-blue-600 text-white rounded-full text-sm hover:bg-blue-700 transition-colors w-full sm:w-auto">
                  Iniciar Proyecto
                </button>
                <Link
                  href="/portfolio"
                  className="px-6 lg:px-8 py-3 border border-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto text-center"
                >
                  Ver Portfolio
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Imágenes */}
          <div className="relative w-full lg:w-[60%] h-[50vh] lg:h-[90vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative w-full h-full"
              >
                <img
                  src={slides[currentSlide].image}
                  alt="Desarrollo web"
                  className="h-full w-full object-contain object-center lg:object-right"
                />
              </motion.div>
            </AnimatePresence>

            {/* Indicadores */}
            <div className="absolute bottom-4 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-6 bg-blue-500' : 'w-1.5 bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;