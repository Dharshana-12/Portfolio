import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © Dharshana Kannan – {currentYear}
          </p>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Dharshana-12" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-black transition-colors duration-200"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.instagram.com/the_girl_of_alone_?igsh=aGpxMzk2Y2p6M3hy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-black transition-colors duration-200"
              aria-label="Twitter"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/dharshana-kannan-dk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-black transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;