import React, { useState } from 'react';
import { Menu, X, FileText, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0 flex items-center">
            <span className="font-serif text-2xl font-bold text-slate-800 tracking-tight">
              Vedashree<span className="text-brand-600">.B</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
            
            <a 
              href="/resume.pdf" 
              className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-md text-sm font-medium hover:bg-brand-700 transition-all shadow-sm"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="block w-full text-left px-3 py-2 text-brand-600 font-medium"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;