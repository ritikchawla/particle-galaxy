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
    title: 'Software Engineer 2',
    company: 'Gojek',
    location: 'Gurgaon, India',
    period: 'August 2024 - Present',
    description: [
      'Developed high-throughput microservices using Golang, processing 50K+ transactions per minute',
      'Architected event-driven systems processing 5TB+ daily data using Kafka clusters with 99.99% reliability',
      'Implemented service mesh using Istio for traffic management and security across 1000+ services',
      'Created custom Kubernetes operators for automated management of 1000+ service configurations',
      'Implemented GitOps workflow using ArgoCD for 500+ microservices, reducing deployment errors by 90%',
      'Managed Vault infrastructure for secrets management, handling 100K+ dynamic secrets across multiple zones'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'MAQ Software',
    location: 'Noida, India',
    period: 'July 2022 - August 2024',
    description: [
      'Implemented distributed caching layer reducing average API response time by 70% and database load by 50%',
      'Built logging and monitoring using Elasticsearch, Logstash, Kibana to enhance system observability',
      'Architected and implemented ETL pipelines for processing 1TB+ of data daily, resulting in a 50% reduction in processing time',
      'Automated data ingestion from REST and GraphQL APIs into SQL Server and Azure Datalake using Databricks',
      'Optimized data warehouse queries reducing processing time by 80% for critical business reporting'
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
            My professional journey building scalable distributed systems and cloud infrastructure.
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
