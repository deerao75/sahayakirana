
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'projects') => void;
  currentPage: 'home' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (id: string) => {
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-xl shadow-lg' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="relative w-14 h-14 flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
               <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF8E3C] drop-shadow-lg">
                 <circle cx="50" cy="50" r="20" fill="currentColor" />
                 {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                   <rect key={deg} x="46" y="10" width="8" height="25" rx="4" fill="currentColor" transform={`rotate(${deg} 50 50)`} />
                 ))}
               </svg>
            </div>
            <div>
              <span className="block text-3xl md:text-4xl font-black text-[#0D0D2B] leading-none tracking-tighter">Sahaya Kirana</span>
              <span className="block text-[12px] font-bold text-[#FF8E3C] uppercase tracking-[0.5em] mt-1">Foundation</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            <button onClick={() => handleNav('services')} className="text-[#0D0D2B] hover:text-[#FF8E3C] font-bold transition-colors">Our Work</button>
            <button onClick={() => onNavigate('projects')} className={`font-bold transition-colors ${currentPage === 'projects' ? 'text-[#FF8E3C]' : 'text-[#0D0D2B] hover:text-[#FF8E3C]'}`}>Projects</button>
            <button onClick={() => handleNav('apply')} className="text-[#0D0D2B] hover:text-[#FF8E3C] font-bold transition-colors">Seek Help</button>
            <button onClick={() => handleNav('contact')} className="text-[#0D0D2B] hover:text-[#FF8E3C] font-bold transition-colors">Contact</button>
            
            <button className="bg-[#FF8E3C] text-white px-8 py-3.5 rounded-2xl font-black hover:bg-[#D9376E] transition-all shadow-xl shadow-orange-200 active:scale-95">
              Donate Support
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-white rounded-xl shadow-md">
              <div className="w-6 h-0.5 bg-black mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-black mb-1.5 transition-all"></div>
              <div className="w-6 h-0.5 bg-black transition-all"></div>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 rounded-b-3xl animate-in slide-in-from-top duration-300">
          <button onClick={() => handleNav('services')} className="block w-full text-left py-4 text-xl font-bold border-b">What we do</button>
          <button onClick={() => onNavigate('projects')} className="block w-full text-left py-4 text-xl font-bold border-b">Projects</button>
          <button onClick={() => handleNav('apply')} className="block w-full text-left py-4 text-xl font-bold border-b">Seek Help</button>
          <button onClick={() => handleNav('contact')} className="block w-full text-left py-4 text-xl font-bold border-b">Contact</button>
          <button className="w-full mt-6 bg-[#FF8E3C] text-white py-5 rounded-2xl font-black text-lg">Donate Support</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
