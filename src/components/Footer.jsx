import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

function Footer() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('newsletterEmail');
    if (email) {
      setSubscribedEmail(email);
      setIsSubscribed(true);
    }
    e.target.reset();
  };

  return (
    <footer className="bg-primary-container text-on-primary-container">
      <div className="max-w-container-max mx-auto px-4 md:px-gutter py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-3">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <Logo size={28} />
              <span className="text-xl font-extrabold text-white tracking-tight">
                Kode<span className="text-secondary-fixed-dim">To</span>Career
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Career ki perfect start. Learn to code, build real-world projects, and get placed — all through live interactive classes.
            </p>
            <div className="flex gap-3 mb-5">
              <a href="https://www.instagram.com/kodetocareer" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/20 hover:scale-110 transition-all">
                <span className="material-symbols-outlined text-white text-lg">photo_camera</span>
              </a>
              <a href="https://www.youtube.com/@kodetocareer" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/20 hover:scale-110 transition-all">
                <span className="material-symbols-outlined text-white text-lg">play_circle</span>
              </a>
              <a href="https://wa.me/919667975616" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary/20 hover:scale-110 transition-all">
                <span className="material-symbols-outlined text-white text-lg">chat</span>
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <span className="material-symbols-outlined text-[14px]">location_on</span>
              Based in Delhi NCR, India 🇮🇳
            </div>
          </div>
          
          {/* Courses */}
          <div className="md:col-span-2">
            <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Courses</h6>
            <div className="flex flex-col gap-3">
              <Link to="/courses/mern-with-ai" className="text-slate-400 hover:text-white transition-colors text-sm">
                MERN Stack + AI
              </Link>
              <Link to="/courses/python-with-ai" className="text-slate-400 hover:text-white transition-colors text-sm">
                Python with AI
              </Link>
            </div>
          </div>
          
          {/* Company */}
          <div className="md:col-span-2">
            <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Company</h6>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setIsPrivacyOpen(true); }}
                className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setIsTermsOpen(true); }}
                className="text-slate-400 hover:text-white transition-colors text-sm cursor-pointer"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Resources</h6>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Blog
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Free Tutorials
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Career Guide
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h6 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Get in Touch</h6>
            <div className="flex flex-col gap-3 mb-6">
              <a href="https://wa.me/919667975616" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                <span className="material-symbols-outlined text-base">call</span>
                +91 9667975616
              </a>
              <a href="https://www.kodetocareer.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                <span className="material-symbols-outlined text-base">language</span>
                www.kodetocareer.com
              </a>
              <a href="mailto:hello@kodetocareer.com" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
                <span className="material-symbols-outlined text-base">mail</span>
                hello@kodetocareer.com
              </a>
            </div>
            {isSubscribed ? (
              <div className="bg-white/5 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-xs font-semibold flex items-center gap-2.5 animate-fade-in-up">
                <span className="material-symbols-outlined text-emerald-500 text-sm font-bold">check_circle</span>
                <span>Awesome! <strong>{subscribedEmail}</strong> is subscribed.</span>
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleSubscribe}>
                <input 
                  name="newsletterEmail"
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white/5 border border-white/10 text-white rounded-lg px-4 py-2.5 w-full text-sm focus:ring-1 focus:ring-secondary focus:border-secondary placeholder:text-slate-500 animate-none"
                  required 
                />
                <button type="submit" className="bg-secondary hover:bg-secondary/90 text-white px-4 py-2.5 rounded-lg transition-colors shrink-0">
                  <span className="material-symbols-outlined text-lg">send</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-xs">
            © 2026 KodeToCareer. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs">
            Career ki perfect start 🚀
          </p>
        </div>
    </div>

    {/* Legal Modals */}
    {isPrivacyOpen && (
      <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setIsPrivacyOpen(false)}>
        <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative border border-slate-100 text-left max-h-[80vh] overflow-y-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setIsPrivacyOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-sm font-bold">close</span>
          </button>
          <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">security</span>
            Privacy Policy
          </h3>
          <div className="text-xs text-slate-500 space-y-3 leading-relaxed font-semibold">
            <p><strong>Effective Date:</strong> June 30, 2026</p>
            <p>Welcome to KodeToCareer. Your privacy is critically important to us. This Privacy Policy details how we collect, store, protect, and use your information when you enroll in our live coding bootcamps.</p>
            <h4 className="font-extrabold text-slate-800 mt-2">1. Information We Collect</h4>
            <p>We collect contact details such as name, email address, and phone number when you register or interact via WhatsApp inquiries.</p>
            <h4 className="font-extrabold text-slate-800 mt-2">2. How We Use Information</h4>
            <p>We use your information exclusively to grant cohort access, send calendar invitations (Google Meet), coordinate Discord support channels, and share course completion certificates.</p>
            <h4 className="font-extrabold text-slate-800 mt-2">3. Data Sharing & Security</h4>
            <p>We do not sell, trade, or share your personal data with third parties. All transactions are securely routed via Razorpay.</p>
          </div>
        </div>
      </div>
    )}

    {isTermsOpen && (
      <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setIsTermsOpen(false)}>
        <div className="bg-white rounded-3xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative border border-slate-100 text-left max-h-[80vh] overflow-y-auto animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
          <button onClick={() => setIsTermsOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-705 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors">
            <span className="material-symbols-outlined text-sm font-bold">close</span>
          </button>
          <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-blue-600">gavel</span>
            Terms of Service
          </h3>
          <div className="text-xs text-slate-500 space-y-3 leading-relaxed font-semibold">
            <p><strong>Last Updated:</strong> June 30, 2026</p>
            <p>By registering at KodeToCareer, you agree to comply with the following Terms and Conditions of service.</p>
            <h4 className="font-extrabold text-slate-800 mt-2">1. Bootcamp Access & Behavior</h4>
            <p>Students are granted cohort access on a single-seat basis. Group-sharing of links or recording materials without permission is strictly prohibited. We maintain a zero-tolerance policy against harassment or abuse in classes and Discord channels.</p>
            <h4 className="font-extrabold text-slate-800 mt-2">2. Refund & Cancellation</h4>
            <p>We offer a hassle-free, 7-day refund policy. If you are unsatisfied within the first 7 days of your batch starting, contact us for a full refund.</p>
            <h4 className="font-extrabold text-slate-800 mt-2">3. Placement Assistance</h4>
            <p>Placement support represents active referrals, resume audits, and interview preparations. While we strive to connect you to our partner ecosystem, KodeToCareer does not issue binding job guarantees.</p>
          </div>
        </div>
      </div>
    )}
  </footer>
  )
}

export default Footer
