
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-portfolio-black border-t border-portfolio-gray/20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a href="#home" className="text-lg font-serif text-portfolio-white">
            <span className="text-portfolio-gold">D</span>ivya <span className="text-portfolio-gold">V</span>ipparla
          </a>
        </div>
        
        <div className="text-portfolio-white/50 text-sm">
          © {currentYear} All rights reserved.
        </div>
        
        <div className="mt-4 md:mt-0">
          <a href="#home" className="text-sm text-portfolio-white/50 hover:text-portfolio-gold transition-colors">
            Back to Top
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
