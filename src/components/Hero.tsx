
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

const Hero = () => {
  return (
    <section className="relative h-[125 md:h-150 flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-linear-to-r from-gray-900 via-gray-900/70 to-gray-900/30 absolute z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Modern Architecture and Construction" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block bg-brand-red text-white text-xs font-bold px-3 py-1 rounded mb-4 md:mb-6 uppercase tracking-wider shadow-sm">
            Property & Construction Specialists
          </div>
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
            Building the Future,<br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-200">
              Managing Your Assets
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-10 leading-relaxed max-w-2xl">
            {COMPANY_INFO.name} is your trusted partner in student accommodation, 
            civil construction, and logistics solutions across South Africa.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Link 
              to="/contact" 
              className="bg-brand-red text-white px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-red-700 transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 text-sm md:text-base"
            >
              Get a Quote <ChevronRight size={18} />
            </Link>
            <Link 
              to="/services" 
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded font-bold hover:bg-white/20 transition duration-300 text-center text-sm md:text-base"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

