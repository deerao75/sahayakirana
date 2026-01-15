
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ApplicationFormData } from '../types';

const ApplicationForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    category: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', phone: '', category: '', description: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="apply" className="py-12 md:py-24 bg-[#FFFBF7]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-black/5 flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-[45%] bg-[#FFFBF7] p-8 md:p-16 text-[#0D0D2B] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-[#FF8E3C] rounded-full blur-[120px] opacity-20"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Need a ray of hope? We're listening.</h2>
              <p className="text-base md:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed font-medium">
                Our foundation is built on support and empathy. If you or someone you know is in need, please let us know.
              </p>
              
              <div className="space-y-4 md:space-y-8">
                <div className="flex gap-4 md:gap-6 items-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl shadow-sm border border-black/5">🕊️</div>
                  <p className="text-base md:text-xl font-bold">Compassionate Review</p>
                </div>
                <div className="flex gap-4 md:gap-6 items-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-xl md:rounded-2xl flex items-center justify-center text-xl md:text-3xl shadow-sm border border-black/5">🔒</div>
                  <p className="text-base md:text-xl font-bold">100% Private & Secure</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-black/5 relative z-10">
              <p className="text-slate-400 text-sm md:text-lg italic font-serif">
                “In the darkness, be the one who carries the light.”
              </p>
            </div>
          </div>

          <div className="flex-1 p-8 md:p-16 lg:p-20">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-in zoom-in-95 duration-500">
                <div className="w-20 h-20 md:w-32 md:h-32 bg-orange-100 text-[#FF8E3C] rounded-full flex items-center justify-center text-4xl md:text-6xl mb-8 shadow-inner">☀️</div>
                <h3 className="text-2xl md:text-4xl font-black text-[#0D0D2B] mb-4 tracking-tight">Sent with Love!</h3>
                <p className="text-slate-600 text-base md:text-xl font-medium">We've received your request. A member of our family will be in touch with you very soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10">
                <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-[#0D0D2B] uppercase tracking-widest ml-1">Your Full Name</label>
                    <input 
                      required name="fullName" value={formData.fullName} onChange={handleChange}
                      type="text" placeholder="e.g. Maria Joseph"
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-[#FF8E3C] focus:bg-white rounded-[1.5rem] md:rounded-[2rem] outline-none transition-all font-bold text-sm md:text-lg"
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <label className="text-[10px] md:text-xs font-black text-[#0D0D2B] uppercase tracking-widest ml-1">Phone Number</label>
                    <input 
                      required name="phone" value={formData.phone} onChange={handleChange}
                      type="tel" placeholder="Mobile / Landline"
                      className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-[#FF8E3C] focus:bg-white rounded-[1.5rem] md:rounded-[2rem] outline-none transition-all font-bold text-sm md:text-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-black text-[#0D0D2B] uppercase tracking-widest ml-1">Support Area</label>
                  <select 
                    required name="category" value={formData.category} onChange={handleChange}
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-[#FF8E3C] focus:bg-white rounded-[1.5rem] md:rounded-[2rem] outline-none transition-all cursor-pointer font-bold text-sm md:text-lg appearance-none"
                  >
                    <option value="" disabled>Select Support Area</option>
                    {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
                  </select>
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-black text-[#0D0D2B] uppercase tracking-widest ml-1">Tell us your story</label>
                  <textarea 
                    required name="description" value={formData.description} onChange={handleChange}
                    rows={3} placeholder="How can we help you today?"
                    className="w-full px-6 py-4 bg-slate-50 border-2 border-transparent focus:border-[#FF8E3C] focus:bg-white rounded-[1.5rem] md:rounded-[2rem] outline-none transition-all resize-none font-bold text-sm md:text-lg"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#0D0D2B] text-white py-4 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black text-base md:text-xl hover:bg-[#FF8E3C] transition-all shadow-2xl active:scale-[0.98]"
                >
                  Send Support Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
