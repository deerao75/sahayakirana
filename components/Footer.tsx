
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-24 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-[#FF8E3C] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">SK</div>
              <div>
                <h3 className="text-2xl font-black text-[#0D0D2B] tracking-tighter">Sahaya Kirana</h3>
                <p className="text-[#FF8E3C] font-black tracking-[0.4em] uppercase text-[9px]">Foundation</p>
              </div>
            </div>
            <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-sm">
              We are more than just an NGO. We are a family built on the belief that 
              every person deserves a ray of hope and a dignified life.
            </p>
          </div>

          <div>
            <h4 className="font-black text-[#0D0D2B] mb-10 uppercase tracking-[0.2em] text-xs">Our Work</h4>
            <ul className="space-y-5 text-slate-500 font-bold text-sm">
              <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Golden Years Care</a></li>
              <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Skill Training</a></li>
              <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Glow Minds Education</a></li>
              <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Holistic Health</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-[#0D0D2B] mb-10 uppercase tracking-[0.2em] text-xs">Assistance</h4>
            <ul className="space-y-5 text-slate-500 font-bold text-sm">
              <li><a href="#apply" className="hover:text-[#FF8E3C] transition-colors">Request Help</a></li>
              <li><a href="#contact" className="hover:text-[#FF8E3C] transition-colors">Connect with Us</a></li>
              <li><a href="#" className="text-[#D9376E] flex items-center gap-2">
                Donate Support
                <span className="text-xl">❤️</span>
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-black uppercase tracking-[0.3em]">
          <p>© 2024 Sahaya Kirana Foundation. Handmade for Humanity.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#FF8E3C]">Privacy</a>
            <a href="#" className="hover:text-[#FF8E3C]">Trust Ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
