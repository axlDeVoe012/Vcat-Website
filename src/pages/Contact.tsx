import { COMPANY_INFO } from '../data/content';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      {/* --- MODERN HEADER --- */}
      <div className="relative overflow-hidden bg-gray-50/50 border-b border-gray-100">
        {/* Decorative background element for desktop */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
          <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-100/50 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 border border-blue-200/60 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-blue-700 text-xs md:text-sm font-semibold mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="tracking-wide uppercase">Connect with us</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 tracking-tight leading-[1.1] mb-6">
            Get In Touch <br className="hidden md:block" />
            <span className="bg-linear-to-r from-blue-700 via-blue-600 to-blue-300 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>

          <p className="text-gray-600 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed px-2">
            Whether you have a specific project in mind or just want to explore the possibilities, our team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`mailto:${COMPANY_INFO.email}`} className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-700 text-white font-bold hover:bg-blue-800 transition-all active:scale-95 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group">
              Send Message
            </a>
            <a href="tel:0123456789" className="w-full sm:w-auto px-8 py-4 rounded-full bg-blue-700 border border-gray-200 text-white font-bold hover:bg-blue-800 transition-all active:scale-95">
              Quick Call
            </a>
          </div>
        </div>
      </div>

      {/* --- CONTACT GRID --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {/* Card: Email */}
          <div className="group relative bg-white p-8 rounded-4xl border border-gray-100 shadow-xl shadow-gray-500/5 hover:border-blue-200 hover:shadow-blue-500/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-700 to-blue-400 flex items-center justify-center mb-8 shadow-md shadow-blue-500/20">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed">We respond to all inquiries within 24 business hours.</p>
            <a href={`mailto:${COMPANY_INFO.email}`} className="block text-lg font-bold text-blue-700 hover:underline break-all">
              {COMPANY_INFO.email}
            </a>
          </div>

          {/* Card: Phone */}
          <div className="group relative bg-white p-8 rounded-4xlborder border-gray-100 shadow-xl shadow-gray-500/5 hover:border-blue-200 hover:shadow-blue-500/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-700 to-blue-400 flex items-center justify-center mb-8 shadow-md shadow-blue-500/20">
              <Phone className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Anytime</h3>
            <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed">Speak directly with our consultants for immediate help.</p>
            <a href={`tel:${COMPANY_INFO.phone}`} className="block text-lg font-bold text-blue-700 hover:underline">
              {COMPANY_INFO.phone}
            </a>
          </div>

          {/* Card: Office (Spans 2 cols on tablet, 1 on desktop) */}
          <div className="md:col-span-2 lg:col-span-1 group relative bg-white p-8 rounded-4xl border border-gray-100 shadow-xl shadow-gray-500/5 hover:border-blue-200 hover:shadow-blue-500/10 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-700 to-blue-400 flex items-center justify-center mb-8 shadow-md shadow-blue-500/20">
              <MapPin className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-500 mb-6 text-sm md:text-base leading-relaxed">Stop by our headquarters for a coffee and a chat.</p>
            <address className="not-italic text-lg font-bold text-blue-700 leading-snug">
              {COMPANY_INFO.address}
            </address>
          </div>
        </div>




      </div>
    </div>
  );
};

export default Contact;