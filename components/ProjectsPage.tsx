
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';

const ProjectsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 md:pt-32 pb-12 md:pb-20 bg-[#FFFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-20">
          <h1 className="text-4xl md:text-7xl font-black text-[#0D0D2B] mb-4 md:mb-6 tracking-tight">Our Ray Stories</h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Discover the journeys of change we are leading and the successes we've celebrated together.
          </p>
        </header>

        <div className="flex justify-center mb-10 md:mb-16">
          <div className="bg-white p-1.5 md:p-2 rounded-[2rem] shadow-xl flex gap-1 md:gap-2 border border-black/5">
            <button 
              onClick={() => setActiveTab('ongoing')}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-[1.5rem] text-xs md:text-base font-black transition-all ${activeTab === 'ongoing' ? 'bg-[#FF8E3C] text-white shadow-lg' : 'text-slate-400 hover:text-[#0D0D2B]'}`}
            >
              Active Missions
            </button>
            <button 
              onClick={() => setActiveTab('completed')}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-[1.5rem] text-xs md:text-base font-black transition-all ${activeTab === 'completed' ? 'bg-[#FF8E3C] text-white shadow-lg' : 'text-slate-400 hover:text-[#0D0D2B]'}`}
            >
              Success Stories
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-6 duration-500">
          {PROJECTS[activeTab].map((project, idx) => (
            <div key={idx} className="bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-xl group">
              <div className="h-64 md:h-80 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-white/90 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest shadow-sm">
                  {project.status}
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-black text-[#0D0D2B] mb-4 md:mb-6 leading-tight">{project.title}</h3>
                <p className="text-slate-600 text-sm md:text-lg leading-relaxed font-medium mb-6 md:mb-8 italic">
                  "{project.story}"
                </p>
                <div className="h-px bg-slate-100 w-full mb-6 md:mb-8"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-50 rounded-full flex items-center justify-center text-[#FF8E3C] font-bold">☀️</div>
                  <span className="text-[10px] md:text-sm font-bold text-slate-400 uppercase tracking-widest">Ray of Progress</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
