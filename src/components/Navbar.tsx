import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky nav shadow and compression
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to highlight the active link
  const isActive = (path: string) => 
    location.pathname === path 
      ? 'text-brand-red font-bold' 
      : 'text-gray-700 hover:text-brand-blue';

  return (
    <header className="fixed w-full z-50 font-sans shadow-sm transition-all duration-300">
      
      {/* Top Bar - Corporate Info (Hidden on mobile) */}
      <div className="bg-brand-blue text-white py-2 hidden md:block border-b border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs tracking-wide font-medium">
          <div className="flex items-center space-x-6">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-gray-200 transition">
              <Phone size={14} className="text-brand-red" /> 
              {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-gray-200 transition">
              <Mail size={14} className="text-brand-red" /> 
              {COMPANY_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-4 text-blue-200">
            <span>Reg: {COMPANY_INFO.regNo}</span>
            <span className="opacity-30">|</span>
            <span>Pretoria, South Africa</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* LOGO AREA */}
            <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <div className="relative w-12 h-12 bg-brand-blue rounded-lg overflow-hidden flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                <span className="text-white font-bold text-2xl font-serif">V</span>
              </div>
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-brand-blue leading-none tracking-tight">
                  VCAT
                </span>
                <span className="text-[0.6rem] font-bold text-brand-red tracking-[0.2em] uppercase mt-1">
                  Properties Management
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              {['/', '/about', '/services', '/projects'].map((path) => (
                <Link 
                  key={path}
                  to={path} 
                  className={`${isActive(path)} text-sm uppercase tracking-wide transition-colors duration-200`}
                >
                  {path === '/' ? 'Home' : path.substring(1)}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link 
                to="/contact" 
                className="bg-brand-red hover:bg-red-700 text-white text-sm font-semibold px-6 py-3 rounded transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                Get a Quote <ChevronRight size={16} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-brand-blue hover:text-brand-red transition-colors p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`md:hidden absolute w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {['Home', 'About', 'Services', 'Projects'].map((item) => (
            <Link 
              key={item}
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-brand-blue rounded-lg transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-gray-100">
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-brand-blue text-white font-bold py-3 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;