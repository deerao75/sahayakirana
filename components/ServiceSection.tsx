
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ServiceSection: React.FC = () => {
  const [activeService, setActiveService] = useState<Service | null>(null);

  const colors = [
    'hover:border-purple-400 hover:shadow-purple-100',
    'hover:border-teal-400 hover:shadow-teal-100',
    'hover:border-orange-400 hover:shadow-orange-100',
    'hover:border-rose-400 hover:shadow-rose-100'
  ];

  return (
    <section id="services" className="py-12 md:py-24 bg-[#FFFBF7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="text-[#FF8E3C] font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Our Vibrant Missions</h2>
          <h3 className="text-3xl md:text-6xl font-black text-[#0D0D2B] mb-6 md:mb-8">How we help you shine</h3>
          <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-xl font-medium">
            We focus on core pillars that build strong, independent, and joyful lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`group glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-2 border-transparent transition-all cursor-pointer shadow-xl relative overflow-hidden flex flex-col items-center text-center ${colors[idx]}`}
            >
              <div className="text-5xl md:text-7xl mb-6 md:mb-10 transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-lg md:text-2xl font-black text-[#0D0D2B] mb-3 md:mb-4 tracking-tight">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6 md:mb-10 font-medium text-xs md:text-base">
                {service.description}
              </p>
              <button className="mt-auto bg-white/50 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-[#0D0D2B] border border-black/5 hover:bg-white transition-colors">
                Know More
              </button>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {activeService && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0D0D2B]/40 backdrop-blur-md animate-in fade-in duration-300">
            <div className="bg-white w-full max-w-xl rounded-[2.5rem] md:rounded-[3rem] shadow-3xl overflow-hidden relative border-4 border-[#FF8E3C]/10 max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-xl hover:bg-[#FF8E3C] hover:text-white transition-all shadow-inner z-20"
              >
                ✕
              </button>
              
              <div className="p-8 md:p-10">
                <div className="flex flex-col gap-6 items-center text-center">
                   <div className="text-6xl md:text-7xl shrink-0">{activeService.icon}</div>
                   <div className="w-full">
                      <h3 className="text-2xl md:text-3xl font-black text-[#0D0D2B] mb-4 leading-tight">{activeService.title}</h3>
                      <p className="text-slate-600 mb-8 text-base md:text-lg leading-relaxed font-medium">{activeService.description}</p>
                      
                      <div className="grid gap-3 text-left">
                        {activeService.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-slate-50 p-4 rounded-2xl border border-black/5">
                            <span className="text-[#FF8E3C] text-xl shrink-0">✨</span>
                            <p className="text-slate-800 font-bold leading-relaxed text-xs md:text-sm">{detail}</p>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => {
                          setActiveService(null);
                          document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="mt-8 w-full bg-[#FF8E3C] text-white py-4 md:py-5 rounded-[1.5rem] font-black text-base md:text-lg hover:bg-[#D9376E] transition-all shadow-xl"
                      >
                        Request This Support
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
