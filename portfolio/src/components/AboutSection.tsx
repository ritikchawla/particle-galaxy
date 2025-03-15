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
            Get to know me better - my background, expertise, and what drives me as a software and infrastructure engineer.
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
              I'm a passionate Software Engineer with expertise in Golang, distributed systems, and cloud-native infrastructure. My journey began with a deep curiosity about how large-scale systems work, which led me to specialize in building resilient, scalable architectures.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Throughout my career at companies like Gojek and MAQ Software, I've designed and implemented high-throughput microservices, event-driven systems, and data pipelines that process millions of events daily with sub-second latency and 99.99% reliability.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              I'm passionate about infrastructure automation, Kubernetes, service mesh architectures, and implementing GitOps workflows that enhance system resilience and operational efficiency.
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
                <h4 className="text-xl font-semibold mb-2">Expertise</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Distributed systems architecture, microservices, and cloud-native infrastructure.
                </p>
              </div>
              
              <div className="card p-6">
                <FiCode className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Engineering</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Building scalable, resilient systems with Golang, Kubernetes, and event-driven architectures.
                </p>
              </div>
              
              <div className="card p-6">
                <FiBookOpen className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor of Technology in Computer Science with a focus on distributed computing and systems design.
                </p>
              </div>
              
              <div className="card p-6">
                <FiCoffee className="text-primary mb-4" size={28} />
                <h4 className="text-xl font-semibold mb-2">Interests</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Exploring new infrastructure technologies, contributing to open-source projects, and system optimization.
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
