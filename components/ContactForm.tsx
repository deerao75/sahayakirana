
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF8E3C]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-[#D9376E] font-black uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#0D0D2B] mb-8">Let's start a conversation</h3>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
            Whether you have feedback, a question, or just want to share a word of kindness, 
            our heart is always open.
          </p>
        </div>

        {/* Brighter and Smaller Contact Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-500">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-blue-100 group-hover:rotate-6 transition-transform">📱</div>
            <h4 className="text-lg font-black text-[#0D0D2B] mb-2 uppercase tracking-tight">Call Us</h4>
            <p className="text-slate-600 font-bold">+91 98765 43210</p>
            <div className="mt-4 text-blue-500 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Call Now</div>
          </div>

          <div className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:shadow-rose-100 transition-all duration-500">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-sm border border-rose-100 group-hover:rotate-6 transition-transform">✉️</div>
            <h4 className="text-lg font-black text-[#0D0D2B] mb-2 uppercase tracking-tight">Email Us</h4>
            <p className="text-slate-600 font-bold">hello@sahayakirana.org</p>
            <div className="mt-4 text-rose-500 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Write Us</div>
          </div>
        </div>
        
        <div className="text-center mt-16 md:mt-20">
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.5em] italic">
            "Your connection helps us keep the rays shining bright"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
