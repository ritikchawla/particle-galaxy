import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: 'https://github.com/ritikchawla' },
    { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com/in/ritikchawla' },
    { icon: <FiMail size={20} />, url: 'mailto:chawlaritik@gmail.com' },
    { icon: <FiTwitter size={20} />, url: 'https://x.com/ritikchawla_' },
  ];
  
  return (
    <footer className="py-8 bg-white/80 dark:bg-dark/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-700 dark:text-gray-300">
              © {currentYear} Ritik Chawla. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label={`Social link ${index + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
