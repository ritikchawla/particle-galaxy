import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navLinks = [
    { name: 'Home', path: '/', section: 'hero' },
    { name: 'About', path: '/#about', section: 'about' },
    { name: 'Experience', path: '/#experience', section: 'experience' },
    { name: 'Skills', path: '/#skills', section: 'skills' },
    { name: 'Projects', path: '/#projects', section: 'projects' },
    { name: 'Contact', path: '/#contact', section: 'contact' },
  ];
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <Link href="/" className="text-2xl font-bold gradient-text">
            Ritik Chawla
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="nav-link cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))}
            <a
              href="/Ritik_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Resume
            </a>
          </div>
          
          <button
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-dark transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.section}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-xl font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
              onClick={toggleMenu}
            >
              {link.name}
            </ScrollLink>
          ))}
          <a
            href="/Ritik_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-600 transition-colors"
            onClick={toggleMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
