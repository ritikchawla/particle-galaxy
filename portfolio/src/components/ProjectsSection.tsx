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
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, shopping cart, and payment integration.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com/ritikchawla/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform.vercel.app'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team workspaces.',
    image: '/project2.jpg',
    technologies: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ritikchawla/task-management',
    liveUrl: 'https://task-management.vercel.app'
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard that provides real-time weather data and forecasts for locations worldwide.',
    image: '/project3.jpg',
    technologies: ['JavaScript', 'React', 'Chart.js', 'Weather API'],
    githubUrl: 'https://github.com/ritikchawla/weather-dashboard',
    liveUrl: 'https://weather-dashboard.vercel.app'
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS.',
    image: '/project4.jpg',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/ritikchawla/portfolio',
    liveUrl: 'https://ritikchawla.com'
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
            A selection of projects I've worked on that showcase my skills and experience.
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
