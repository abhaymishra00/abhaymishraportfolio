import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05080f] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Abhay Mishra. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 text-sm text-gray-400">
           <a href="#about" className="hover:text-brand-primary transition-colors">About</a>
           <a href="#projects" className="hover:text-brand-primary transition-colors">Projects</a>
           <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;