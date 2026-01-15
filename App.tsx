
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import ApplicationForm from './components/ApplicationForm';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen selection:bg-[#FF8E3C] selection:text-white">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            
            {/* Why Us Section - Tightened mobile padding */}
            <section className="py-8 md:py-20 relative overflow-hidden bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-24 items-center">
                  <div className="relative">
                    
                    <img 
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1000&auto=format&fit=crop" 
                      className="rounded-[3rem] md:rounded-[4rem] relative z-10 shadow-2xl w-full aspect-square object-cover border-8 border-white"
                      alt="Community Support"
                    />
                    <div className="absolute -bottom-6 -right-4 md:-bottom-8 md:-right-8 bg-white p-5 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl z-20 max-w-[200px] md:max-w-xs border-4 border-[#FFFBF7] flex items-center gap-2 md:gap-3">
                      <span className="text-xl md:text-2xl text-[#FF8E3C]">✨</span>
                      <p className="text-[10px] md:text-base font-bold text-[#0D0D2B] leading-tight">Every ray of support reaches a soul in need.</p>
                    </div>
                  </div>

                  <div className="space-y-4 md:space-y-10">
                    <div className="space-y-2 md:space-y-4">
                      <h2 className="text-[#D9376E] font-black uppercase tracking-[0.3em] text-[10px] md:text-sm">Beyond Relief</h2>
                      <h3 className="text-3xl md:text-6xl font-black text-[#0D0D2B] leading-[1.1]">
                        A ray of belonging <span className="text-[#FF8E3C]">for everyone.</span>
                      </h3>
                    </div>
                    
                    <p className="text-sm md:text-xl text-slate-600 leading-relaxed font-medium">
                      Sahaya Kirana was born to ensure that no person walks in the shadows. 
                      We are a family focused on restorative dignity and sustainable joy.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
                      {[
                        { icon: '💓', title: 'Compassionate Care', desc: 'Personal attention to every individual.' },
                        { icon: '🌟', title: 'Life Skills', desc: 'Independence through training.' },
                        { icon: '🍎', title: 'Health First', desc: 'Wellness for every age group.' },
                        { icon: '🛡️', title: 'Trust Ethics', desc: 'Radical transparency in every action.' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 md:gap-4">
                          <div className="w-10 h-10 md:w-14 md:h-14 bg-orange-50 rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl shrink-0">{item.icon}</div>
                          <div>
                            <h4 className="font-black text-[#0D0D2B] text-sm md:text-lg">{item.title}</h4>
                            <p className="text-slate-500 font-medium text-[10px] md:text-sm leading-tight">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Values Block - Tightened mobile padding */}
            <section className="py-6 md:py-16 bg-[#FFFBF7]">
              <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="bg-orange-100/40 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-12 border border-orange-200/50 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                   <div className="shrink-0 text-5xl md:text-6xl">🏡</div>
                   <div className="space-y-3 md:space-y-4 flex-1 text-center md:text-left">
                      <h2 className="text-xl md:text-3xl font-black text-[#0D0D2B]">Our Foundation Pillars</h2>
                      <p className="text-slate-600 text-xs md:text-base font-medium">
                        We operate with three non-negotiable values: <span className="font-bold text-[#0D0D2B]">Empathy</span> in our approach, 
                        <span className="font-bold text-[#0D0D2B]"> Honesty</span> in our operations, and <span className="font-bold text-[#0D0D2B]">Dedication</span> to the last person in the queue.
                      </p>
                      <button 
                        onClick={() => setCurrentPage('projects')}
                        className="bg-[#FF8E3C] text-white px-6 py-2.5 md:px-7 md:py-3 rounded-xl font-black hover:bg-[#0D0D2B] transition-all shadow-lg shadow-orange-200 text-xs md:text-sm"
                      >
                        Explore Our Projects
                      </button>
                   </div>
                </div>
              </div>
            </section>

            <ServiceSection />
            
            {/* Energy Quote - Tightened mobile padding */}
            <section className="py-10 md:py-24 bg-orange-50/50 relative overflow-hidden">
              
              <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <h4 className="text-2xl md:text-7xl font-black text-[#0D0D2B] italic leading-tight mb-6 md:mb-12">
                  "To give <span className="text-[#FF8E3C]">light</span> is to find light within."
                </h4>
                <div className="h-1 md:h-2 w-12 md:w-24 bg-[#FF8E3C] mx-auto rounded-full mb-6 md:mb-8"></div>
                <p className="text-slate-400 font-black uppercase tracking-[0.5em] text-[8px] md:text-xs">Sahaya Kirana Family</p>
              </div>
            </section>

            <ApplicationForm />
            <ContactForm />
          </>
        ) : (
          <ProjectsPage />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
