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

        {/* Centered Contact Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            
          {/* Visit Us Card (Replaces Call Feature) */}
          <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 flex flex-col items-center text-center gap-4 group hover:bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-500">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-blue-100 group-hover:rotate-6 transition-transform">
              📍
            </div>
            <div>
              <h4 className="text-xl font-black text-[#0D0D2B] mb-2 uppercase tracking-tight">Our Location</h4>
              <p className="text-slate-600 font-bold text-lg">Bengaluru, Karnataka, India</p>
            </div>
          </div>

          {/* Email Us Card (Clickable) */}
          <a 
            href="mailto:support@sahayakirana.org"
            className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100 flex flex-col items-center text-center gap-4 group hover:bg-white hover:shadow-xl hover:shadow-rose-100 transition-all duration-500 cursor-pointer"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-sm border border-rose-100 group-hover:rotate-6 transition-transform">
              ✉️
            </div>
            <div>
              <h4 className="text-xl font-black text-[#0D0D2B] mb-2 uppercase tracking-tight">Email Us</h4>
              <p className="text-slate-600 font-bold text-lg group-hover:text-rose-600 transition-colors">
                support@sahayakirana.org
              </p>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;