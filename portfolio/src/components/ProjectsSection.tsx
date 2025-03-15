import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// Easter egg: Konami code sequence
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

const projects: Project[] = [
  {
    title: 'Distributed Key-Value Store',
    description: 'A distributed key-value store with linearizable consistency using multi-Raft protocol for consensus, featuring automated leader election, log compaction, and dynamic membership changes.',
    image: '/projects/distributed_key_value.png',
    technologies: ['Golang', 'gRPC', 'Raft Consensus', 'LSM Tree', 'WAL'],
    githubUrl: 'https://github.com/ritikchawla/distributed-kv-store'
  },
  {
    title: 'Load Balancer Implementation',
    description: 'An L7 load balancer with consistent hashing, connection pooling, and custom TCP congestion control. Features distributed health checking with phi-accrual failure detection.',
    image: '/projects/lb.png',
    technologies: ['Golang', 'Docker', 'TCP/IP', 'Circuit Breakers', 'Lock-free Queues'],
    githubUrl: 'https://github.com/ritikchawla/load-balancer'
  },
  {
    title: 'Distributed Rate Limiter',
    description: 'A distributed rate limiting service using sliding window algorithm and Redis as backing store, with coordination mechanism using Redis Lua scripts for atomic operations.',
    image: '/projects/rate_limiter.png',
    technologies: ['Golang', 'Redis', 'Token Bucket', 'Leaky Bucket', 'Distributed Systems'],
    githubUrl: 'https://github.com/ritikchawla/distributed-rate-limiter'
  },
  {
    title: 'Kubernetes Operator Framework',
    description: 'A custom Kubernetes operator framework for automated management of microservice configurations, featuring GitOps workflow integration and service mesh compatibility.',
    image: '/projects/k8s-operator.png',
    technologies: ['Golang', 'Kubernetes', 'Operator SDK', 'ArgoCD', 'Istio'],
    githubUrl: 'https://github.com/ritikchawla/k8s-operator-framework'
  },
  {
    title: 'ML Model Serving Platform',
    description: 'A scalable platform for deploying and serving machine learning models with automatic A/B testing, model versioning, and real-time performance monitoring.',
    image: '/projects/ml_serving.png',
    technologies: ['Python', 'Kubernetes', 'TensorFlow Serving', 'Prometheus', 'MLflow'],
    githubUrl: 'https://github.com/ritikchawla/ml-serving-platform'
  },
  {
    title: 'Feature Store Pipeline',
    description: 'An end-to-end feature engineering pipeline with automated feature extraction, transformation, and storage for machine learning models with point-in-time correctness.',
    image: '/projects/feature_store.png',
    technologies: ['Python', 'Apache Spark', 'Feast', 'Airflow', 'Redis'],
    githubUrl: 'https://github.com/ritikchawla/feature-store-pipeline'
  }
];

const ProjectsSection = () => {
  const [easterEggActivated, setEasterEggActivated] = useState(false);
  const [konamiSequence, setKonamiSequence] = useState<string[]>([]);
  
  // Easter egg handler
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const newSequence = [...konamiSequence, e.key];
      if (newSequence.length > konamiCode.length) {
        newSequence.shift();
      }
      setKonamiSequence(newSequence);
      
      if (newSequence.length === konamiCode.length && 
          newSequence.every((key, i) => key === konamiCode[i])) {
        setEasterEggActivated(true);
        setTimeout(() => setEasterEggActivated(false), 5000);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiSequence]);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className={`container mx-auto px-4 ${easterEggActivated ? 'animate-pulse' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {easterEggActivated ? '🎮 You found the secret! 🎮' : 'Featured Projects'}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {easterEggActivated 
              ? "You've unlocked the Konami code! As a reward, here's a hint: try clicking on project images 3 times." 
              : "A selection of projects that showcase my expertise in distributed systems, infrastructure, and MLOps."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60 bg-gray-200 dark:bg-gray-700 cursor-pointer" 
                   onClick={() => {
                     // Another easter egg - clicking on images
                     const el = document.getElementById(`project-${index}`);
                     if (el) {
                       el.dataset.clicks = (parseInt(el.dataset.clicks || '0') + 1).toString();
                       if (parseInt(el.dataset.clicks || '0') === 3) {
                         el.classList.add('rotate-180');
                         setTimeout(() => el.classList.remove('rotate-180'), 1000);
                       }
                     }
                   }}>
                <Image
                  id={`project-${index}`}
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-all duration-500"
                  data-clicks="0"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      <span>Source Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Hidden easter egg message that appears when you click in a specific pattern */}
        <div className="text-center mt-12 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <p className="text-xs text-gray-500 dark:text-gray-600">
            Psst! Try the Konami code: ↑↑↓↓←→←→BA
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
