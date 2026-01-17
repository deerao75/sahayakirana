import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showEthicsModal, setShowEthicsModal] = useState(false);

  return (
    <>
      {/* ✅ UPDATED PADDING: Changed py-24 to py-12 for less gap */}
      <footer className="bg-gray-50 py-12 border-t-2 border-gray-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* COLUMN 1: Brand & Tax Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#FF8E3C] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg">SK</div>
                <div>
                  <h3 className="text-2xl font-black text-[#0D0D2B] tracking-tighter">Sahaya Kirana</h3>
                  <p className="text-[#FF8E3C] font-black tracking-[0.4em] uppercase text-[9px]">Foundation</p>
                </div>
              </div>

              {/* TAX BOX */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 max-w-sm shadow-sm">
                <div className="flex items-start gap-4 mb-4">
                    <div className="text-2xl">🏛️</div>
                    <div>
                        <h5 className="text-[#0D0D2B] font-bold text-sm uppercase tracking-wide mb-1">80G Registered</h5>
                        <p className="text-slate-500 text-xs leading-relaxed">
                            Your contributions are eligible for tax deduction under Section 80G of the Income Tax Act.
                        </p>
                    </div>
                </div>
                
                <div className="h-px bg-slate-200 w-full mb-4"></div>
                
                <div className="space-y-2">
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-slate-200">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">80G Reg. No</span>
                        <span className="text-[#0D0D2B] font-bold text-xs font-mono">AACTS1234EF123</span>
                    </div>
                    <div className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-slate-200">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">CSR 1 Reg. No</span>
                        <span className="text-[#0D0D2B] font-bold text-xs font-mono">CSR00012345</span>
                    </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Our Work */}
            <div>
              <h4 className="font-black text-[#0D0D2B] mb-6 uppercase tracking-[0.2em] text-xs">Our Work</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Golden Years Care</a></li>
                <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Skill Training</a></li>
                <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Glow Minds Education</a></li>
                <li><a href="#services" className="hover:text-[#FF8E3C] transition-colors">Holistic Health</a></li>
              </ul>
            </div>

            {/* COLUMN 3: Assistance & Donation */}
            <div>
              <h4 className="font-black text-[#0D0D2B] mb-6 uppercase tracking-[0.2em] text-xs">Assistance</h4>
              <ul className="space-y-4 text-slate-500 font-bold text-sm">
                <li><a href="#apply" className="hover:text-[#FF8E3C] transition-colors">Request Help</a></li>
                <li><a href="#contact" className="hover:text-[#FF8E3C] transition-colors">Connect with Us</a></li>
                <li>
                  <button 
                    onClick={() => setShowDonationModal(true)}
                    className="text-[#D9376E] font-black flex items-center gap-2 hover:opacity-80 transition-opacity text-left"
                  >
                    Donate Support
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-xs font-black uppercase tracking-[0.3em]">
            <p>©2026 Sahaya Kirana Foundation. Handmade for Humanity.</p>
            <div className="flex gap-10">
              <button 
                onClick={() => setShowPrivacyModal(true)}
                className="hover:text-[#FF8E3C] transition-colors uppercase tracking-[0.3em]"
              >
                Privacy
              </button>
              <button 
                onClick={() => setShowEthicsModal(true)}
                className="hover:text-[#FF8E3C] transition-colors uppercase tracking-[0.3em]"
              >
                Trust Ethics
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* --- DONATION MODAL --- */}
      {showDonationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4">
          <div className="absolute inset-0 bg-[#0D0D2B]/80 backdrop-blur-sm transition-opacity" onClick={() => setShowDonationModal(false)}></div>
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <button onClick={() => setShowDonationModal(false)} className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">✕</button>
            
            <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-50 text-[#FF8E3C] rounded-2xl text-3xl flex items-center justify-center mx-auto mb-4">🎁</div>
                <h3 className="text-2xl font-black text-[#0D0D2B]">Make a Contribution</h3>
                <p className="text-slate-500 text-sm mt-2">Use the details below to transfer your support directly to our bank.</p>
            </div>

            <div className="bg-[#FFFBF7] border border-orange-100 rounded-2xl p-6 space-y-4">
                <div><p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Account Name</p><p className="text-[#0D0D2B] font-black text-lg">Sahaya Kirana Foundation</p></div>
                <div className="h-px bg-orange-100 w-full"></div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Bank Name</p>
                        {/* ✅ UPDATED BANK NAME */}
                        <p className="text-[#0D0D2B] font-bold">ICICI Bank</p>
                    </div>
                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Branch</p>
                        <p className="text-[#0D0D2B] font-bold">M G Road, Bangalore</p>
                    </div>
                </div>
                <div><p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">Account Number</p><p className="text-[#0D0D2B] font-black text-xl font-mono tracking-wide">309001234567</p></div>
                <div><p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1">IFSC Code</p><p className="text-[#0D0D2B] font-black font-mono">ICIC0001234</p></div>
            </div>
            <p className="text-center text-[10px] text-slate-400 mt-6 font-medium">Please share the transaction screenshot to our WhatsApp for the receipt.</p>
          </div>
        </div>
      )}

      {/* --- PRIVACY POLICY MODAL --- */}
      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4">
          <div className="absolute inset-0 bg-[#0D0D2B]/80 backdrop-blur-sm transition-opacity" onClick={() => setShowPrivacyModal(false)}></div>
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowPrivacyModal(false)} className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">✕</button>
            
            <div className="mb-6">
                <h3 className="text-2xl font-black text-[#0D0D2B] mb-2">Privacy & Data Protection</h3>
                <div className="h-1 w-12 bg-[#FF8E3C] rounded-full"></div>
            </div>

            <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                <div>
                    <h4 className="font-bold text-[#0D0D2B] mb-2 text-base">🔒 Data Security</h4>
                    <p>We implement strict security measures to protect your personal information. Your contact details and donation history are stored on encrypted servers with limited access.</p>
                </div>
                <div>
                    <h4 className="font-bold text-[#0D0D2B] mb-2 text-base">🚫 No Third-Party Sharing</h4>
                    <p>Sahaya Kirana never sells, trades, or rents your personal identification information to others. We value your trust above all else.</p>
                </div>
                <div>
                    <h4 className="font-bold text-[#0D0D2B] mb-2 text-base">📩 Communication</h4>
                    <p>We use your email/phone number solely for sending donation receipts, tax certificates, and essential project updates. You can opt-out at any time.</p>
                </div>
            </div>
            <button onClick={() => setShowPrivacyModal(false)} className="w-full mt-8 bg-slate-100 text-[#0D0D2B] py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">Close Policy</button>
          </div>
        </div>
      )}

      {/* --- TRUST ETHICS MODAL --- */}
      {showEthicsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 px-4">
          <div className="absolute inset-0 bg-[#0D0D2B]/80 backdrop-blur-sm transition-opacity" onClick={() => setShowEthicsModal(false)}></div>
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 max-w-lg w-full shadow-2xl animate-in fade-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowEthicsModal(false)} className="absolute top-6 right-6 w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors">✕</button>
            
            <div className="mb-6">
                <h3 className="text-2xl font-black text-[#0D0D2B] mb-2">Our Code of Ethics</h3>
                <div className="h-1 w-12 bg-[#D9376E] rounded-full"></div>
            </div>

            <div className="space-y-6 text-slate-600 text-sm leading-relaxed">
                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-[#0D0D2B] mb-1 text-base">💎 100% Integrity</h4>
                    <p className="text-xs">We believe that every rupee contributed is a sacred trust. We maintain complete financial transparency and regular audits.</p>
                </div>
                <div>
                    <h4 className="font-bold text-[#0D0D2B] mb-2 text-base">🤝 Dignity First</h4>
                    <p>We serve our beneficiaries with the utmost respect. We do not use "poverty porn" or exploitative imagery to raise funds. We showcase strength, not helplessness.</p>
                </div>
                <div>
                    <h4 className="font-bold text-[#0D0D2B] mb-2 text-base">📢 Radical Transparency</h4>
                    <p>Our donors have the right to know exactly how their funds are utilized. We provide detailed impact reports for every project we undertake.</p>
                </div>
            </div>
            <button onClick={() => setShowEthicsModal(false)} className="w-full mt-8 bg-slate-100 text-[#0D0D2B] py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">Close Statement</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;