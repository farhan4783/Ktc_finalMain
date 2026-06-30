import React, { useState } from 'react'
import useSEO from '../hooks/useSEO'

function About() {
  const [activeFaq, setActiveFaq] = useState(null);

  useSEO({
    title: 'About Us | Live Online Coding Bootcamp India — KodeToCareer',
    description: 'Learn about KodeToCareer\'s mission to deliver high-quality, practical live coding bootcamps (MERN Stack, Python, React, AI integrations) online. Discover our deliberate practice method and 100% interactive classes taught nationwide in India.',
    keywords: 'about KodeToCareer, live coding school India, online coding bootcamp, affordable web development course, coding mentors India, learn React Python online India, full stack developer training, KodeToCareer team',
    canonical: 'https://www.kodetocareer.com/about'
  });

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Are the classes pre-recorded?",
      a: "No. 100% of our classes are live sessions hosted on Google Meet. You will code along live during the session, can share your screen to debug issues, and ask questions instantly."
    },
    {
      q: "What happens if I miss a live session?",
      a: "Every live class is recorded. You will get lifetime access to our video archives, boilerplates, assignments, and class materials so you can catch up anytime."
    },
    {
      q: "Is there a certificate and internship letter provided?",
      a: "Yes. Upon completing the required portfolio projects and assignments, you will receive an official course completion certificate and an internship experience letter to showcase on your resume."
    },
    {
      q: "What is the fee structure for these bootcamps?",
      a: "We keep our courses highly affordable. The MERN Stack + AI bootcamp is a one-time fee of ₹4,000. The Python with AI bootcamp is a one-time fee of ₹4,500. There are no deferred placement contracts or additional hidden fees."
    },
    {
      q: "How does the placement support work?",
      a: "We provide comprehensive assistance including 1-on-1 resume reviews, LinkedIn profile optimizations, mock technical interviews, and logic building practice. We share candidate profiles directly with our hiring network."
    },
    {
      q: "Can non-IT or complete beginners join these bootcamps?",
      a: "Yes! Both bootcamps start from the absolute basics. We teach variables, syntax, logic building, and basic structures before introducing complex systems or machine learning frameworks."
    },
    {
      q: "What laptop or system configurations are required?",
      a: "Any standard laptop with at least 4GB RAM and an internet connection is sufficient. All tools we use (VS Code, Python, Node.js, MongoDB Atlas) run easily on Windows, macOS, and Linux."
    },
    {
      q: "What happens after I register?",
      a: "Immediately upon payment, you will receive an email invoice confirming your seat. Within 24 hours, our program team will share links to join the private Discord server and Google Meet calendar invites."
    }
  ];

  const team = [];

  const milestones = [
    { year: '2023', title: 'KodeToCareer Founded', desc: 'Started with a mission to make quality coding education affordable and accessible for every student.' },
    { year: '2023', title: 'First Batch Launched', desc: 'Launched the first MERN Stack bootcamp cohort with 25 students.' },
    { year: '2024', title: '100 Students Placed', desc: 'Crossed the milestone of 100 successful placements at top tech startups and multinational firms.' },
    { year: '2025', title: 'Python + AI Bootcamp', desc: 'Launched the Python with AI bootcamp due to overwhelming demand from students.' },
    { year: '2025', title: '500+ Alumni Network', desc: 'Built a thriving community of 500+ alumni now working at top-tier firms.' },
    { year: '2026', title: 'Scaling to 1000+', desc: 'Expanding our program offerings, adding advanced courses, and targeting 1000+ placements.' }
  ];

  const techTools = [
    { name: 'Code Editor', desc: 'Syntax & logic', icon: 'code_blocks' },
    { name: 'Video Calls', desc: 'Live Sessions', icon: 'video_call' },
    { name: 'Community', desc: 'Private Chat Server', icon: 'forum' },
    { name: 'Version Control', desc: 'Git Workflow', icon: 'inventory_2' },
    { name: 'Cloud Database', desc: 'NoSQL System', icon: 'database' },
    { name: 'Deployment', desc: 'Cloud Hosting', icon: 'cloud_upload' }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 font-sans antialiased">
      {/* About Hero */}
      <section className="relative py-16 md:py-24 overflow-hidden hero-gradient border-b border-slate-200/60">
        <div className="absolute inset-0 technical-grid opacity-75"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-gutter text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200/80 text-sky-850 font-mono text-xs font-bold tracking-wider mb-6">
            <span className="live-pulse"></span>
            OUR MISSION
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 max-w-3xl mx-auto leading-tight">
            Bridging the Gap from <br />
            <span className="gradient-text">Kode To Career</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-16 leading-relaxed">
            KodeToCareer was founded with a single focus: to deliver high-quality, practical coding bootcamps at affordable pricing. We believe technical education should be live, interactive, and project-based.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: '500+', label: 'Students Placed' },
              { value: '100%', label: 'Live Google Meet Classes' },
              { value: '4.9★', label: 'Average rating' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm card-hover">
                <div className="text-3xl font-extrabold text-sky-600 mb-1">{stat.value}</div>
                <div className="font-mono text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Deliberate Practice Methodology */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-sky-600 font-mono text-sm font-bold uppercase tracking-widest">METHODOLOGY</span>
            <h2 className="text-3xl font-extrabold text-slate-900">The Deliberate Practice Method</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Why watching video tutorials is leaving you stuck in "tutorial hell," and how our training fixes it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl">
              <h4 className="font-bold text-slate-900 mb-3 text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-rose-500">cancel</span>
                Static Tutorial Hell
              </h4>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-rose-500 text-sm">remove</span>
                  <span>Passive watching with zero feedback leads to lack of coding confidence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-rose-500 text-sm">remove</span>
                  <span>No one to review your code or explain why your database query failed.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-rose-500 text-sm">remove</span>
                  <span>Outdated pre-recorded assets teaching frameworks from 3 years ago.</span>
                </li>
              </ul>
            </div>

            <div className="bg-sky-50/50 border border-sky-200/60 p-6 rounded-2xl">
              <h4 className="font-bold text-sky-850 mb-3 text-base flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-600">check_circle</span>
                Deliberate Live Coding
              </h4>
              <ul className="space-y-3 text-xs text-sky-800">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span>Code along live on Google Meet. Fix errors instantly with real feedback.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span>Regular Git reviews ensuring you write clean, standard structures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-emerald-600 text-sm">check</span>
                  <span>Work on current real client freelance requests to build coding resume value.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-video shadow-lg border border-slate-200 glow-card p-1 bg-slate-50">
                <div 
                  className="w-full h-full bg-cover bg-center rounded-xl" 
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDgMMcWDNff1MtnaAuO7VcmXD-33G36839nQsJtFLKj0FbYAxPfmwTMGNG1R1eFwR2w4TaujjPPQP-nolQj8YcgeeXNpNEIdKeIc_I9ZkuW-nZ74wP0KnVOdEFYzdz-DUvezup86qHjeWWdsszo5tKzNb9hAixKLU1KqRehNoulBwr9lX6ax0rqmpyyukS7zYpp6q9NLPdpGg2rQnvqP37IZPlx497hy_zT80YYzdcXLBCj4pnSNDYoyAXh7PeXaJcsVQ6exZfhw7Pr')" }}
                ></div>
              </div>
            </div>
            <div className="md:col-span-5 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>visibility</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Our Vision</h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To democratize technical skill acquisition by removing expensive, overpriced courses. We see a future where every aspiring developer can master coding live, build a professional portfolio, and secure their role without financial strain.
                </p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-sky-600">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>flag</span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900">Our Mission</h2>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To deliver high-impact, live interactive bootcamps that focus on building SaaS apps and logic solving. We guide students step-by-step with practical assignments and placement support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-sky-600 font-mono text-sm font-bold uppercase tracking-widest">OUR JOURNEY</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Milestones We're Proud Of</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From a small idea to a thriving community of 500+ developers.</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Timeline Line */}
            <div className="timeline-line"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="timeline-dot" style={{ top: '50%', transform: 'translate(-50%, -50%)' }}></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                    <div className={`bg-white rounded-2xl p-6 border border-slate-200 shadow-sm card-hover stagger-${(idx % 5) + 1}`}>
                      <span className="text-sky-600 font-mono text-xs font-black tracking-widest">{milestone.year}</span>
                      <h4 className="text-base font-extrabold text-slate-900 mt-2 mb-2">{milestone.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Environment / Tools */}
      <section className="py-20 bg-white border-b border-slate-200/50">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-sky-600 font-mono text-sm font-bold uppercase tracking-widest">TECH STACK</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Our Learning Environment</h2>
            <p className="text-slate-600 max-w-xl mx-auto">We use industry-standard, free tools so you learn what is actually used in production — no proprietary lock-in.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-4xl mx-auto">
            {techTools.map((tool, idx) => (
              <div key={idx} className={`tech-tool-badge bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center cursor-default stagger-${(idx % 5) + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{tool.icon}</span>
                </div>
                <h5 className="text-xs font-extrabold text-slate-900">{tool.name}</h5>
                <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{tool.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-3 rounded-xl text-sm font-bold">
              <span className="material-symbols-outlined text-lg">check_circle</span>
              100% classes happen live on Google Meet — no pre-recorded content
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/50">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-sky-600 font-mono text-sm font-bold uppercase tracking-widest">FAQs</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Get answers to the most common questions about our bootcamps and classes.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs">
                <button
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="text-sm md:text-base">{faq.q}</span>
                  <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 text-sky-600' : ''}`}>
                    expand_more
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-48 border-t border-slate-100' : 'max-h-0'} overflow-hidden`}>
                  <div className="px-5 pb-5 pt-3 text-xs md:text-sm text-slate-500 leading-relaxed bg-slate-50/50">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
