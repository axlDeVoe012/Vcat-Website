
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/content';
import { Phone, Mail, MapPin } from 'lucide-react';
import Logo from '../assets/logo.webp';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-gray-400 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-1 text-slate-800">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
                <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
              </div>
              <span className=" font-bold text-lg tracking-tight">VCAT Properties</span>
            </div>
            <p className="text-sm leading-relaxed mb-4 md:mb-6">
              Proudly South African. We provide quality professional management services, 
              ensuring sustainable development and compliance in health, safety, and environment.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] border border-blue-700 px-2 py-1 rounded text-slate-800">Reg: {COMPANY_INFO.regNo}</span>
              <span className="text-[10px] border border-blue-700 px-2 py-1 rounded text-slate-800">B-BBEE L1</span>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4 md:mb-6 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-blue-400">
              <li><Link to="/" className="hover:text-brand-red transition-colors block">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition-colors block">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-red transition-colors block">Our Services</Link></li>
              <li><Link to="/projects" className="hover:text-brand-red transition-colors block">Portfolio</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors block">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4 md:mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 md:space-y-3 text-sm text-blue-400">
              <li className="hover:text-white transition-colors">Student Accommodation</li>
              <li className="hover:text-white transition-colors">Civil Construction</li>
              <li className="hover:text-white transition-colors">Property Management</li>
              <li className="hover:text-white transition-colors">Logistics & Transport</li>
              <li className="hover:text-white transition-colors">Pest Control</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-gray-800 font-bold mb-4 md:mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-blue-500">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-brand-red mt-1 shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-red shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
        
      {/* Copyright Bar */}
      <div className="border-t border-gray-800 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-900">
          <p className="mb-2 md:mb-0">&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center text-center">
            <span>Director: {COMPANY_INFO.director}</span>
            <span className="hidden md:inline">|</span>
            <span>Privacy Policy</span>
            <span className="hidden md:inline">|</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

