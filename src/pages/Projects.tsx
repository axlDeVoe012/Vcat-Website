import { useState } from 'react';
import { PROJECTS_DATA } from '../data/content';
import type { Project } from '../types/index';
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  const categories: string[] = [
    'All',
    ...new Set(PROJECTS_DATA.map((p: Project) => p.category)),
  ];

  const filteredProjects: Project[] =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p: Project) => p.category === activeCategory);

  const openGallery = (project: Project): void => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = (): void => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header Section */}
      <div className="relative bg-gray-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-900/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Our <span className="bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed">
            Delivering excellence across civil engineering, infrastructure, and high-end property maintenance.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-8 md:-mt-10 relative z-20">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12 bg-white p-2 rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${activeCategory === cat
                  ? 'bg-linear-to-r from-blue-700 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => openGallery(project)}
              className="group cursor-pointer flex flex-col h-full bg-white rounded-4xl border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

                {/* Image Count Badge */}
                <div className="absolute bottom-4 right-4 z-20 bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-2">
                  <Layers size={14} />
                  {project.images?.length || 1} Photos
                </div>

                <img
                  src={project.images?.[0] || `https://placehold.co/800x600/f3f4f6/1E3A8A?text=${project.category}`}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />

                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/95 backdrop-blur-sm text-blue-700 text-[10px] font-black px-3 py-1 rounded-full shadow-sm uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-950 group-hover:bg-linear-to-r group-hover:from-blue-700 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-blue-600 group-hover:border-blue-100 transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- PHOTO GALLERY MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-100 bg-gray-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 md:p-10">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-50"
          >
            <X size={40} />
          </button>

          <div className="relative w-full max-w-5xl h-[70vh] flex items-center justify-center">
            {/* Nav Buttons */}
            {selectedProject.images?.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentImgIndex(prev => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))}
                  className="absolute left-0 md:-left-16 text-white p-2 hover:bg-white/10 rounded-full transition"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={() => setCurrentImgIndex(prev => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))}
                  className="absolute right-0 md:-right-16 text-white p-2 hover:bg-white/10 rounded-full transition"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            <img
              src={selectedProject.images?.[currentImgIndex] || `https://placehold.co/1200x800/1E3A8A/FFFFFF?text=${selectedProject.title}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              alt="Gallery Preview"
            />
          </div>

          <div className="mt-8 text-center text-white max-w-2xl">
            <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-2">{selectedProject.category}</p>
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-400 text-sm">{selectedProject.description}</p>
            <div className="mt-6 flex justify-center gap-2">
              {selectedProject.images?.map((_: string, i: number) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${i === currentImgIndex
                      ? 'w-8 bg-blue-500'
                      : 'w-2 bg-white/20'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;