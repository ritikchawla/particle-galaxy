import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiCloud, FiLayers } from 'react-icons/fi';

interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Core',
    icon: <FiCode className="text-primary" size={24} />,
    skills: ['Golang', 'C++', 'Python', 'SQL', 'gRPC', 'Protocol Buffers', 'RESTful APIs', 'GraphQL']
  },
  {
    title: 'Distributed Systems',
    icon: <FiLayers className="text-primary" size={24} />,
    skills: ['Microservices', 'Event-Driven Architecture', 'Consensus Algorithms', 'Distributed Tracing', 'Service Mesh', 'Fault Tolerance', 'High Availability', 'System Design']
  },
  {
    title: 'Infrastructure & DevOps',
    icon: <FiServer className="text-primary" size={24} />,
    skills: ['Kubernetes', 'Docker', 'Terraform', 'Chef', 'ArgoCD', 'Istio', 'GitOps', 'CI/CD', 'Prometheus', 'Grafana', 'ELK Stack']
  },
  {
    title: 'Cloud & Data',
    icon: <FiCloud className="text-primary" size={24} />,
    skills: ['AWS', 'GCP', 'Tencent Cloud', 'Kafka', 'RabbitMQ', 'Redis', 'PostgreSQL', 'Vault', 'Elasticsearch', 'Data Pipelines', 'MLOps']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The technologies, languages, and tools I use to build scalable, resilient distributed systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-2">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
