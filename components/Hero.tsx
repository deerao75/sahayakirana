import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="blob-bg w-[600px] h-[600px] bg-[#FF8E3C] top-[-10%] right-[-10%]"></div>
      <div className="blob-bg w-[400px] h-[400px] bg-[#D9376E] bottom-[10%] left-[-5%]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-orange-100 text-[#FF8E3C] font-bold text-xs uppercase tracking-widest mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8E3C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF8E3C]"></span>
            </span>
            Building a brighter community
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#0D0D2B] mb-8 leading-[1]">
            Lighting up <span className="gradient-text">every soul</span> with hope.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
            We are Sahaya Kirana—a family dedicated to bringing the warmth of rays 
            to those who need it most. Helping hands, healing hearts.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#0D0D2B] text-white px-10 py-5 rounded-[1.5rem] font-black text-lg shadow-2xl hover:bg-[#FF8E3C] transition-all hover:-translate-y-1 active:scale-95"
            >
              Request Support
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#0D0D2B] border-2 border-[#0D0D2B]/5 px-10 py-5 rounded-[1.5rem] font-black text-lg hover:bg-slate-50 transition-all flex items-center gap-3"
            >
              See Our Impact
              <span>→</span>
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Collage Style Images */}
          <div className="relative z-10 grid grid-cols-12 gap-4">
            <div className="col-span-8">
              {/* IMAGE 1: Indian Village Elder (Turban/Beard) */}
              <img 
                src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=800&auto=format&fit=crop" 
                className="w-full h-80 object-cover rounded-[3rem] shadow-2xl border-8 border-white bg-gray-100"
                alt="Dignified Indian Elder"
              />
            </div>
            <div className="col-span-4 self-end">
              <div className="w-full aspect-square bg-transparent rounded-[2rem] flex items-center justify-center border-4 border-[#FF8E3C]/30 mb-4 shadow-sm group">
                <svg viewBox="0 0 100 100" className="w-4/5 h-4/5 text-[#FF8E3C] animate-[spin_10s_linear_infinite]">
                  <circle cx="50" cy="50" r="18" fill="currentColor" />
                  {/* eslint-disable-next-line */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                    <rect key={deg} x="47" y="5" width="6" height="22" rx="3" fill="currentColor" transform={`rotate(${deg} 50 50)`} />
                  ))}
                </svg>
              </div>
              {/* IMAGE 2: Indian Village Children */}
              <img 
                src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-40 object-cover rounded-[2rem] shadow-xl border-4 border-white bg-gray-100"
                alt="Smiling Indian Children"
              />
            </div>
            <div className="col-span-4 mt-[-4rem]">
              {/* IMAGE 3: Indian Village Woman */}
              <img 
                src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?q=80&w=600&auto=format&fit=crop" 
                className="w-full h-64 object-cover rounded-[2rem] shadow-xl border-4 border-white bg-gray-100"
                alt="Indian Woman in Village"
              />
            </div>
            <div className="col-span-8 mt-[-2rem]">
               <div className="bg-[#D9376E] p-8 rounded-[3rem] text-white shadow-2xl">
                 <p className="font-serif italic text-2xl leading-snug">"Bringing dignity back to life through the smallest acts of love."</p>
                 <p className="mt-4 font-black uppercase text-xs tracking-widest opacity-70">— Our Philosophy</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
