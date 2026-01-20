
import { PROJECTS_DATA } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  return (
    <div className="bg-white min-h-screen pb-12 md:pb-20">
      {/* Page Header */}
      <div className="py-12 md:py-16 bg-gray-900 text-white mb-8 md:mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Our Portfolio</h1>
          <p className="text-gray-400 max-w-2xl text-base md:text-lg">
            A showcase of our work in civil construction, pipeline infrastructure, and property maintenance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <div key={index} className="group cursor-pointer flex flex-col h-full">
              {/* Image Container with Placeholder */}
              <div className="relative h-48 md:h-64 rounded-lg overflow-hidden mb-4 md:mb-5 bg-gray-100 border border-gray-200">
                <div className="absolute inset-0 bg-brand-black/10 group-hover:bg-brand-black/0 transition z-10"></div>
                
                <img 
                  src={`https://placehold.co/800x600/f3f4f6/1E3A8A?text=${encodeURIComponent(project.category)}`}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
                />
                
                <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-blue text-xs font-bold px-2 md:px-3 py-1 rounded shadow-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex justify-between items-start flex-grow">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-brand-red transition duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 md:mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="text-gray-300 group-hover:text-brand-red transition duration-300 ml-3 shrink-0" size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

