import React, { useState, useEffect } from 'react';
// import { PROJECTS } from '../constants'; // Commented out until you have real data

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

        {/* Tab Buttons */}
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

        {/* CONTENT AREA: Vision Placeholders */}
        <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-500">
          
          {activeTab === 'ongoing' ? (
            /* --- ACTIVE MISSIONS PLACEHOLDER --- */
            <div className="bg-white rounded-[3rem] p-8 md:p-16 text-center border border-orange-100 shadow-2xl relative overflow-hidden group">
              {/* Decorative Background Blob */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF8E3C] to-[#D9376E]"></div>
              
              <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-50 rounded-3xl mx-auto flex items-center justify-center text-4xl md:text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">
                🌱
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black text-[#0D0D2B] mb-6">
                Planting the Seeds of Change
              </h3>
              
              <p className="text-slate-600 text-sm md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                Sahaya Kirana is currently vetting locations and identifying the families who need us most. 
                Our first major mission is being planned as we speak. We believe in doing it right, not just doing it fast.
              </p>

              <div className="inline-flex items-center gap-3 px-6 py-3 bg-orange-50 rounded-2xl text-[#FF8E3C] font-bold text-sm md:text-base">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8E3C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF8E3C]"></span>
                </span>
                Mission Launching Soon
              </div>
            </div>

          ) : (
            
            /* --- SUCCESS STORIES PLACEHOLDER --- */
            <div className="bg-white rounded-[3rem] p-8 md:p-16 text-center border border-blue-50 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0D0D2B] to-[#FF8E3C]"></div>

              <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-50 rounded-3xl mx-auto flex items-center justify-center text-4xl md:text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">
                🚀
              </div>
              
              <h3 className="text-2xl md:text-4xl font-black text-[#0D0D2B] mb-6">
                History in the Making
              </h3>
              
              <p className="text-slate-600 text-sm md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                Every great legacy starts with a blank page. We are preparing to write our first chapter of success. 
                Join us today, so that tomorrow, you can say you were part of the very first success story.
              </p>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0D0D2B] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#FF8E3C] transition-colors shadow-lg"
              >
                Be Part of Our First Story
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
