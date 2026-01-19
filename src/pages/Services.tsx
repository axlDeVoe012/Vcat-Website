import React from 'react';
import { SERVICES_DATA } from '../data/content';

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-12 md:pb-20">
      {/* Page Header */}
      <div className="py-12 md:py-16 bg-brand-blue text-white mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Services</h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-base md:text-lg px-4">
            We offer solutions delivering on specified needs, from property management to 
            civil construction and student support.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES_DATA.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:pb-6 border-b border-gray-100">
                  <div className="p-2 md:p-3 bg-gray-50 rounded-lg text-brand-red">
                    <category.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-black leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                <ul className="space-y-2 md:space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;