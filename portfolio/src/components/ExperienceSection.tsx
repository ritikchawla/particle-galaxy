import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2022 - Present',
    description: [
      'Lead the development of a microservices architecture that improved system scalability by 40%',
      'Implemented CI/CD pipelines that reduced deployment time by 60%',
      'Mentored junior developers and conducted code reviews to ensure high-quality standards',
      'Collaborated with product managers to define and prioritize feature development'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Digital Solutions Ltd.',
    location: 'New York, NY',
    period: 'Mar 2019 - Dec 2021',
    description: [
      'Developed and maintained RESTful APIs using Node.js and Express',
      'Built responsive front-end interfaces with React and Redux',
      'Optimized database queries that improved application performance by 30%',
      'Participated in agile development processes including daily stand-ups and sprint planning'
    ]
  },
  {
    title: 'Junior Web Developer',
    company: 'WebCraft Studios',
    location: 'Boston, MA',
    period: 'Jun 2017 - Feb 2019',
    description: [
      'Created and maintained websites for various clients using HTML, CSS, and JavaScript',
      'Implemented responsive designs that worked across multiple devices and browsers',
      'Collaborated with designers to transform mockups into functional web pages',
      'Assisted in troubleshooting and resolving website issues'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey and the companies I've had the privilege to work with.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-primary pl-8 ml-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-12 relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-12 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <FiBriefcase className="text-white" />
                </div>
                
                <div className="card p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{exp.title}</h3>
                  <h4 className="text-xl font-semibold text-primary mb-3">{exp.company}</h4>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FiCalendar className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <FiMapPin className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
