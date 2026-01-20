
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { ArrowRight, ShieldCheck, Truck, HardHat } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

const Home = () => {
  return (
    <div className="w-full">
      <Hero />

      {/* Intro Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">
              {COMPANY_INFO.tagline}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We apply a strict approach to all projects and provide a comprehensive range of 
              social environment products to industrial, government, and associated sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Feature 1: Compliance */}
            <div className="p-6 md:p-8 border border-gray-100 rounded-lg hover:shadow-xl transition duration-300 bg-white group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-blue transition duration-300">
                <ShieldCheck className="text-brand-blue group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">Quality & Compliance</h3>
              <p className="text-gray-600">
                Adherence to ISO 9001 standards and strict safety policies to ensure customer satisfaction and environmental protection.
              </p>
            </div>
            
             {/* Feature 2: Logistics */}
            <div className="p-6 md:p-8 border border-gray-100 rounded-lg hover:shadow-xl transition duration-300 bg-white group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-red transition duration-300">
                <Truck className="text-brand-red group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">Logistics & Support</h3>
              <p className="text-gray-600">
                Specialized student transportation and general logistics solutions tailored to your specific requirements.
              </p>
            </div>

             {/* Feature 3: Construction */}
            <div className="p-6 md:p-8 border border-gray-100 rounded-lg hover:shadow-xl transition duration-300 bg-white group">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-blue transition duration-300">
                <HardHat className="text-brand-blue group-hover:text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-black">Civil Construction</h3>
              <p className="text-gray-600">
                Expertise in trenching, pipelines, paving, and general building maintenance and repairs.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Link to="/about" className="text-brand-red font-bold inline-flex items-center hover:gap-2 transition-all text-sm md:text-base">
              Read more about our vision <ArrowRight size={16} className="ml-2"/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;