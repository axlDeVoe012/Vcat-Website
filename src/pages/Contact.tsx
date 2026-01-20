
import { COMPANY_INFO } from '../data/content';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-12 md:pb-20">
      {/* Page Header */}
      <div className="py-12 md:py-16 bg-brand-blue text-white mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Get In Touch</h1>
          <p className="text-blue-100 text-base md:text-lg px-4">
            We are ready to service your needs with a strict professional approach.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Physical Address */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Physical Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {COMPANY_INFO.address} 
                  </p>
                </div>
              </div>
            </div>

            {/* Postal Address */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-red shrink-0 mt-1 opacity-50" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Postal Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {COMPANY_INFO.postalAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <Phone className="text-brand-red shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Call Us</h4>
                  <p className="text-gray-600 text-sm">
                    {COMPANY_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <Mail className="text-brand-red shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 text-sm md:text-base">Email Us</h4>
                  <p className="text-gray-600 text-sm break-all">
                    {COMPANY_INFO.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-4 md:mb-6">Send a Message</h3>
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input type="text" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                  <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition text-gray-600">
                    <option>Property Management</option>
                    <option>Student Accommodation</option>
                    <option>Civil Construction</option>
                    <option>Logistics / Transport</option>
                    <option>Pest Control / Cleaning</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-3 md:py-4 rounded transition duration-300 flex items-center justify-center gap-2">
                  <Send size={18} /> Submit Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

