import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: 'Distributed Key-Value Store',
    description: 'A distributed key-value store with linearizable consistency using multi-Raft protocol for consensus, featuring automated leader election, log compaction, and dynamic membership changes.',
    image: '/project1.jpg',
    technologies: ['Golang', 'gRPC', 'Raft Consensus', 'LSM Tree', 'WAL'],
    githubUrl: 'https://github.com/ritikchawla/distributed-kv-store'
  },
  {
    title: 'Load Balancer Implementation',
    description: 'An L7 load balancer with consistent hashing, connection pooling, and custom TCP congestion control. Features distributed health checking with phi-accrual failure detection.',
    image: '/project2.jpg',
    technologies: ['Golang', 'Docker', 'TCP/IP', 'Circuit Breakers', 'Lock-free Queues'],
    githubUrl: 'https://github.com/ritikchawla/load-balancer'
  },
  {
    title: 'Distributed Rate Limiter',
    description: 'A distributed rate limiting service using sliding window algorithm and Redis as backing store, with coordination mechanism using Redis Lua scripts for atomic operations.',
    image: '/project3.jpg',
    technologies: ['Golang', 'Redis', 'Token Bucket', 'Leaky Bucket', 'Distributed Systems'],
    githubUrl: 'https://github.com/ritikchawla/distributed-rate-limiter'
  },
  {
    title: 'Kubernetes Operator Framework',
    description: 'A custom Kubernetes operator framework for automated management of microservice configurations, featuring GitOps workflow integration and service mesh compatibility.',
    image: '/project4.jpg',
    technologies: ['Golang', 'Kubernetes', 'Operator SDK', 'ArgoCD', 'Istio'],
    githubUrl: 'https://github.com/ritikchawla/k8s-operator-framework'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in distributed systems, infrastructure, and platform engineering.
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
              <div className="relative h-60 bg-gray-200 dark:bg-gray-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                  [Project Image]
                </div>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
