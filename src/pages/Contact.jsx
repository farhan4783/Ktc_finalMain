import React from 'react'
import useSEO from '../hooks/useSEO'

function Contact() {
  useSEO({
    title: 'Contact Us | Live Online Coding Bootcamp India — KodeToCareer',
    description: 'Get in touch with KodeToCareer. Ask questions about our MERN Stack + AI and Python with AI live bootcamps, cohort schedules, placement assistance, and more.',
    keywords: 'contact KodeToCareer, coding bootcamp contact, Delhi NCR coding school support, WhatsApp support KodeToCareer',
    canonical: 'https://www.kodetocareer.com/contact'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const whatsappMessage = `Hello KodeToCareer, I have an inquiry from the website contact form:
*Name*: ${fullName}
*Email*: ${email}
*Subject*: ${subject}
*Message*: ${message}`;

    window.open(`https://wa.me/919667975616?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    e.target.reset();
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Contact Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden hero-gradient border-b border-slate-200/60">
        <div className="absolute inset-0 technical-grid opacity-75"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-gutter text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200/80 text-sky-850 font-mono text-xs font-bold tracking-wider mb-6">
            INQUIRIES
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 max-w-3xl mx-auto leading-tight">
            Contact <span className="gradient-text">KodeToCareer</span>
          </h1>
          <p className="text-lg text-slate-650 max-w-2xl mx-auto leading-relaxed">
            Have questions about our course curriculums, batch timings, or placement support? Our academic team is here to assist you.
          </p>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 max-w-5xl mx-auto">
            
            {/* Left Info Column */}
            <div className="md:col-span-5 space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">Reach out directly</h2>
                <p className="text-slate-500 text-sm leading-relaxed font-semibold">
                  Send us a message using the form or connect through our direct communication support lines.
                </p>
              </div>
              
              <div className="space-y-5">
                <a href="https://wa.me/919667975616" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-xs border border-slate-200">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] font-bold text-slate-400 uppercase">Call / WhatsApp Support</div>
                    <div className="font-bold text-slate-800 text-sm md:text-base">+91 9667975616</div>
                  </div>
                </a>
                
                <a href="mailto:info@kodetocareer.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all shadow-xs border border-slate-200">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] font-bold text-slate-400 uppercase">Email Support</div>
                    <div className="font-bold text-slate-800 text-sm md:text-base">info@kodetocareer.com / kodetocareer@gmail.com</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-sky-600 shadow-xs border border-slate-200">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <div className="font-mono text-[9px] font-bold text-slate-400 uppercase">Location</div>
                    <div className="font-bold text-slate-800 text-sm md:text-base">Delhi NCR Region, India 🇮🇳</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Form Column */}
            <div className="md:col-span-7 bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Send us a message</h3>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Full Name</label>
                    <input 
                      name="fullName"
                      className="w-full rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 py-3 px-4 border text-sm bg-white" 
                      placeholder="Your name" 
                      type="text"
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Email Address</label>
                    <input 
                      name="email"
                      className="w-full rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 py-3 px-4 border text-sm bg-white" 
                      placeholder="you@email.com" 
                      type="email"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Subject</label>
                  <select name="subject" className="w-full rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 py-3 px-4 border bg-white text-sm">
                    <option>Course Inquiry</option>
                    <option>Placement Support</option>
                    <option>Corporate Training</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="font-mono text-[10px] font-bold text-slate-500 uppercase block tracking-wider">Message</label>
                  <textarea 
                    name="message"
                    className="w-full rounded-xl border-slate-200 focus:border-sky-500 focus:ring-sky-500 py-3 px-4 border text-sm bg-white" 
                    placeholder="How can we help you?" 
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 rounded-xl transition-all active:scale-[0.98] shadow-md shadow-sky-600/20" type="submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
