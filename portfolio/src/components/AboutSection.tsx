import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiCode, FiBookOpen, FiCoffee } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get to know me better - my background, interests, and what drives me as a software engineer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a passionate Software Engineer with a strong foundation in full-stack development and a keen interest in building scalable, user-friendly applications. My journey in tech began with a curiosity about how digital products work, which led me to pursue formal education in Computer Science.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Throughout my career, I've had the opportunity to work on diverse projects across various domains, from web applications to mobile solutions, always focusing on delivering high-quality code and exceptional user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or engaging with the developer community through meetups and conferences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="card p-6">
                <FiUser className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Personal</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I believe in continuous learning and staying adaptable in the ever-evolving tech landscape.
                </p>
              </div>
              
              <div className="card p-6">
                <FiCode className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Development</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I enjoy solving complex problems with clean, efficient, and maintainable code.
                </p>
              </div>
              
              <div className="card p-6">
                <FiBookOpen className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I hold a degree in Computer Science with specialization in software engineering.
                </p>
              </div>
              
              <div className="card p-6">
                <FiCoffee className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Hobbies</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Beyond coding, I enjoy reading tech blogs, hiking, and experimenting with new recipes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
