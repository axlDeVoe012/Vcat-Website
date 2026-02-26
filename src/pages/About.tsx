
import { COMPANY_INFO } from '../data/content';
import { Target, Eye, Users } from 'lucide-react';
import Director from '../assets/images/director.webp';

const About = () => {
  return (
    <div className="bg-white pb-12 md:pb-20">
      {/* Page Header */}
      <div className="py-12 md:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4 md:mb-6">About Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-4">
            {COMPANY_INFO.name} seeks to be a leading role player in ensuring sustainable
            developments in South Africa and the African continent at large.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Mission Vision Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Mission */}
          <div className="bg-white p-6 md:p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition text-center group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-blue-600 transition">
              <Target size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing the highest quality of services to our clients while maintaining professional
              ethics and being a preferred strategic partner.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 md:p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition text-center group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-brand-red group-hover:bg-brand-red group-hover:text-blue-600 transition">
              <Eye size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To provide quality professional management and services to our clients.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white p-6 md:p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition text-center group">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 text-brand-blue group-hover:bg-brand-blue group-hover:text-blue-600 transition">
              <Users size={28} />
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Our Values</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Professionalism, innovation, and customer-oriented service. We believe in preserving
              The balance between client interest and sustainable development.
            </p>
          </div>
        </div>

        {/* Management Section */}
        <div className="bg-brand-black text-white rounded-2xl p-6 md:p-12 overflow-hidden relative shadow-2xl">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-linear-to-r from-blue-700 to-blue-300 rounded-full -mr-24 md:-mr-32 -mt-24 md:-mt-32 opacity-50"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Director Photo Placeholder */}
            <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-700 rounded-full flex items-center justify-center shrink-0 border-4 border-brand-red shadow-lg overflow-hidden">
              <img
                src={Director}
                alt="Director"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-xl text-blue-950 md:text-2xl font-bold mb-2">Management Profile</h2>
              <div className="w-16 md:w-20 h-1 bg-brand-red mb-4 md:mb-6 mx-auto md:mx-0"></div>

              <h3 className="text-slate-950 text-lg md:text-xl font-semibold mb-2">{COMPANY_INFO.director}</h3>
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed max-w-2xl text-sm md:text-base">
                The business is directed by {COMPANY_INFO.director}. He gained extensive experience
                from roles at Republic Logistics and Projects (Building Manager) and Village Hub Students
                Accommodation. He holds a Diploma in Computer Studies and Public Relations N6.
              </p>

              <div className="flex -blue-400 flex-wrap gap-2 justify-center md:justify-start">
                <span className="border border-blue-500 px-2 md:px-3 py-1 rounded-full text-xs text-slate-700">Public Relations N6</span>
                <span className="border border-blue-500 px-2 md:px-3 py-1 rounded-full text-xs  text-slate-700">Business Management</span>
                <span className="border border-blue-500 px-2 md:px-3 py-1 rounded-full text-xs  text-slate-700">IT Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;