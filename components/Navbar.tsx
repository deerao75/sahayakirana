import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'projects') => void;
  currentPage: 'home' | 'projects';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // ✅ State for the donation popup
  const [showDonationModal, setShowDonationModal] = useState(false);

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
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-xl shadow-lg' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* LOGO */}
            <div className="flex items-center gap-4 cursor-pointer group" onClick={() => onNavigate('home')}>
              <div className="relative w-14 h-14 flex items-center justify-center group-hover:rotate-12 transition-transform shrink-0">
                 <svg viewBox="0 0 100 100" className="w-full h-full text-[#FF8E3C] drop-shadow-lg">
                   <circle cx="50" cy="50" r="20" fill="currentColor" />
                   {/* eslint-disable-next-line */}
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
            
            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center space-x-10">
              <button onClick={() => handleNav('services')} className="text-[#0D0D2B] hover:text-[#FF8E3C] font-bold transition-colors">Our Work</button>
              <button onClick={() => onNavigate('projects')} className={`font-bold transition-colors ${currentPage === 'projects' ? 'text-[#FF8E3C]' : 'text-[#0D0D2B] hover:text-[#FF8E3C]'}`}>Projects</button>
              <button onClick={() => handleNav('apply')} className="text-[#0D0D2B] hover:text-[#FF8E3C] font-bold transition-colors">Seek Help</button>
              <button onClick={() => handleNav('contact')} className="text-[#0D0D2B] hover:text-[#FF8E3C] font-bold transition-colors">Contact</button>
              
              {/* ✅ Button now triggers Modal */}
              <button 
                onClick={() => setShowDonationModal(true)}
                className="bg-[#FF8E3C] text-white px-8 py-3.5 rounded-2xl font-black hover:bg-[#D9376E] transition-all shadow-xl shadow-orange-200 active:scale-95"
              >
                Donate Support
              </button>
            </div>

            {/* MOBILE HAMBURGER */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 bg-white rounded-xl shadow-md">
                <div className="w-6 h-0.5 bg-black mb-1.5 transition-all"></div>
                <div className="w-6 h-0.5 bg-black mb-1.5 transition-all"></div>
                <div className="w-6 h-0.5 bg-black transition-all"></div>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 rounded-b-3xl animate-in slide-in-from-top duration-300">
            <button onClick={() => handleNav('services')} className="block w-full text-left py-4 text-xl font-bold border-b">What we do</button>
            <button onClick={() => onNavigate('projects')} className="block w-full text-left py-4 text-xl font-bold border-b">Projects</button>
            <button onClick={() => handleNav('apply')} className="block w-full text-left py-4 text-xl font-bold border-b">Seek Help</button>
            <button onClick={() => handleNav('contact')} className="block w-full text-left py-4 text-xl font-bold border-b">Contact</button>
            
            {/* ✅ Mobile Button also triggers Modal */}
            <button 
              onClick={() => { setShowDonationModal(true); setIsOpen(false); }}
              className="w-full mt-6 bg-[#FF8E3C] text-white py-5 rounded-2xl font-black text-lg"
            >
              Donate Support
            </button>
          </div>
        )}
      </nav>

      {/* ✅ DONATION MODAL (Using z-[100] to sit above Navbar) */}
      {showDonationModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-[#0D0D2B]/80 backdrop-blur-sm transition-opacity"
            onClick={() => setShowDonationModal(false)}
          ></div>

          {/* Modal Content - Constrained Width (max-w-md) to prevent "full screen" look */}
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
                onClick={() => setShowDonationModal(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
            >
                ✕
            </button>
            
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-50 text-[#FF8E3C] rounded-2xl text-3xl flex items-center justify-center mx-auto mb-4">
                    🎁
                </div>
                <h3 className="text-2xl font-black text-[#0D0D2B]">Make a Contribution</h3>
                <p className="text-slate-500 text-sm mt-2">Use the details below to transfer your support directly to our bank.</p>
            </div>

            <div className="bg-[#FFFBF7] border border-orange-100 rounded-2xl p-6 space-y-4">
                <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Account Name</p>
                    <p className="text-[#0D0D2B] font-black text-lg">Sahaya Kirana Foundation</p>
                </div>
                <div className="h-px bg-orange-100 w-full"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Bank Name</p>
                        <p className="text-[#0D0D2B] font-bold">ICICI Bank</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Branch</p>
                        <p className="text-[#0D0D2B] font-bold">BSK 3rd Stage, Bangalore</p>
                    </div>
                </div>
                <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Account Number</p>
                    <p className="text-[#0D0D2B] font-black text-xl font-mono tracking-wide">100905000933</p>
                </div>
                <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">IFSC Code</p>
                    <p className="text-[#0D0D2B] font-black font-mono">ICIC0001009</p>
                </div>
            </div>

            <p className="text-center text-[10px] text-slate-400 mt-6 font-medium">
                Please share the transaction screenshot to our WhatsApp for the receipt.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;