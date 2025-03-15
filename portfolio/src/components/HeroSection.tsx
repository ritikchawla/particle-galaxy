import React from 'react';
import Image from 'next/image';
import { FiArrowDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Ritik Chawla</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer & Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              I build exceptional digital experiences with a focus on performance, 
              accessibility, and cutting-edge technologies. Let's create something amazing together.
            </p>
            <div className="flex flex-wrap gap-4">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Get in Touch
              </ScrollLink>
              <a
                href="/Ritik_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors"
              >
                View Resume
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
              <Image
                src="/pic.jpg"
                alt="Ritik Chawla"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className="text-gray-600 dark:text-gray-400 mb-2">Scroll Down</span>
            <FiArrowDown className="text-primary animate-bounce" size={24} />
          </ScrollLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
