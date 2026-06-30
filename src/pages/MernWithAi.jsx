import React, { useState } from 'react'
import useSEO from '../hooks/useSEO'

function MernWithAi() {
  const [activeModule, setActiveModule] = useState(0);

  useSEO({
    title: 'MERN Stack with AI Online Course | Live React Bootcamp India — KodeToCareer',
    description: 'Master MongoDB, Express.js, React, Node.js, and Generative AI (Gemini & OpenAI APIs) live online on Google Meet. 100% interactive classes, daily code feedback, 4 major SaaS portfolio builds, and placement assistance across India.',
    keywords: 'MERN stack course online, React JS training India, full stack web development bootcamp, learn Node.js Node Express, MongoDB training India, learn React online, Web development certification with placement, AI integration coding course, full stack developer bootcamp India, KodeToCareer',
    canonical: 'https://www.kodetocareer.com/courses/mern-with-ai',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': 'MERN Stack with AI Certification Bootcamp',
      'description': 'Comprehensive live online web development bootcamp covering MongoDB, Express.js, React, Node.js, and GenAI API integrations with 100% placement support in India.',
      'provider': {
        '@type': 'Organization',
        'name': 'KodeToCareer',
        'url': 'https://www.kodetocareer.com'
      },
      'offers': {
        '@type': 'Offer',
        'price': '3999',
        'priceCurrency': 'INR',
        'category': 'Paid'
      },
      'educationalCredentialAwarded': 'Certificate of Completion & Internship Experience Letter',
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '4.9',
        'reviewCount': '500',
        'bestRating': '5'
      }
    }
  });
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState('form'); // 'form', 'payment', 'success'
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [sandboxAction, setSandboxAction] = useState('register');
  const [sandboxLoading, setSandboxLoading] = useState(false);
  const [sandboxLogs, setSandboxLogs] = useState({
    url: 'POST /api/auth/register',
    status: '200 OK',
    time: '45ms',
    request: JSON.stringify({ email: 'student@kodetocareer.com', name: 'Faraz Khan' }, null, 2),
    response: JSON.stringify({ success: true, message: 'User registered successfully. Welcome to KodeToCareer!' }, null, 2)
  });

  const triggerSandbox = (action) => {
    setSandboxAction(action);
    setSandboxLoading(true);
    setTimeout(() => {
      setSandboxLoading(false);
      if (action === 'register') {
        setSandboxLogs({
          url: 'POST /api/auth/register',
          status: '200 OK',
          time: '45ms',
          request: JSON.stringify({ email: 'student@kodetocareer.com', name: 'Faraz Khan' }, null, 2),
          response: JSON.stringify({ success: true, message: 'User registered successfully. Welcome to KodeToCareer!' }, null, 2)
        });
      } else if (action === 'products') {
        setSandboxLogs({
          url: 'GET /api/products',
          status: '200 OK',
          time: '18ms',
          request: 'Empty (Query Params: limit=2)',
          response: JSON.stringify([
            { id: 101, name: 'SaaS Dashboard Pro', price: '₹4,500' },
            { id: 102, name: 'AI Image Generator', price: '₹12,000' }
          ], null, 2)
        });
      } else if (action === 'aichat') {
        setSandboxLogs({
          url: 'POST /api/ai-chat',
          status: '200 OK',
          time: '340ms',
          request: JSON.stringify({ prompt: 'Generate an API schema for my user database' }, null, 2),
          response: JSON.stringify({
            reply: 'Here is your mongoose user schema:\nconst userSchema = new mongoose.Schema({\n  name: String,\n  email: { type: String, unique: true },\n  createdAt: Date\n});'
          }, null, 2)
        });
      }
    }, 600);
  };

  const handleEnrollClick = (e) => {
    e.preventDefault();
    const message = "Hi, I want to enroll in the MERN Stack with AI Course. Please guide me with the payment and batch details.";
    window.open(`https://wa.me/919667975616?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (email && phone) {
      setCheckoutStep('payment');
    }
  };

  const handlePaymentConfirm = () => {
    setCheckoutStep('success');
  };

  const modules = [
    {
      num: '01',
      title: 'Module 1: The Foundation - Web Development Basics',
      subtitle: 'Every great developer starts with the building blocks of the web.',
      topics: [
        { name: 'HTML5 Spec & Semantic Web', details: 'Semantic layout elements, modern forms, multimedia integration, accessibility (a11y) standards, and SEO search optimization best practices.' },
        { name: 'CSS3 Flexbox, Grid & Tailwind', details: 'Box model, Flexbox layout, Grid systems, responsive design (mobile-first), micro-animations, and modern utility classes in Tailwind CSS.' },
        { name: 'Modern JavaScript Engine', details: 'Variables, primitive & object data types, DOM manipulation, event loops, ES6+ logic (arrow functions, destructuring, spread/rest), Promises, and Async/Await.' }
      ]
    },
    {
      num: '02',
      title: 'Module 2: Frontend Mastery with React.js',
      subtitle: 'Build dynamic, single-page applications (SPAs) used in modern web development globally.',
      topics: [
        { name: 'React Components & Props', details: 'JSX layout rendering, Virtual DOM reconciliation, component architectures, prop-drilling, and unidirectional data flows.' },
        { name: 'Hooks Deep-Dive', details: 'Mastering hooks: useState for local state, useEffect for lifecycles, useContext for global states, useRef for DOM, and custom reusable hooks.' },
        { name: 'Global State & Redux Toolkit', details: 'Managing complex application states, structural data stores, and async actions using Redux Toolkit slices.' },
        { name: 'Client Routing & APIs', details: 'React Router client-side navigation, form validation (Formik/Yup), and API data fetching with Axios.' }
      ]
    },
    {
      num: '03',
      title: 'Module 3: Backend Engineering with Node.js & Express.js',
      subtitle: 'Create robust, scalable, and secure server-side applications.',
      topics: [
        { name: 'Node.js & Event Loop', details: 'Asynchronous event loop execution, non-blocking file system (fs) utilities, modules, and NPM package ecosystems.' },
        { name: 'RESTful API Architecture', details: 'Creating Express servers, modular routing rules, custom middleware execution chains, and global error handling filters.' },
        { name: 'Security & Auth (JWT)', details: 'Securing routes with JSON Web Tokens (JWT), password hashing with Bcrypt, and integrating Google/GitHub OAuth logins.' }
      ]
    },
    {
      num: '04',
      title: 'Module 4: Database Management with MongoDB',
      subtitle: 'Master NoSQL databases for high-performance data storage.',
      topics: [
        { name: 'NoSQL Database Design', details: 'NoSQL document concepts, BSON encoding formats, collection management, document structures, and complex CRUD queries.' },
        { name: 'Mongoose ODM & Schemas', details: 'Defining database schemas, building models, validations, middleware hooks, and virtual properties.' },
        { name: 'DB Aggregations & Indexes', details: 'Aggregation pipeline queries, query optimization indexing for speed, and populating referenced properties.' }
      ]
    },
    {
      num: '05',
      title: 'Module 5: Integrating Artificial Intelligence',
      subtitle: 'Stand out from the crowd by giving your applications a "brain."',
      topics: [
        { name: 'LLM APIs & Completions', details: 'Understanding LLM architectures and connecting to OpenAI and Gemini REST endpoints programmatically.' },
        { name: 'Gemini AI API Node Integration', details: 'Implementing text generation, context feeding, dynamic image analysis, and streaming responses in Node.js backends.' },
        { name: 'Structured JSON Outputs', details: 'Prompt engineering and schema enforcement to get reliable, structured, JSON-formatted outputs from LLMs.' }
      ]
    },
    {
      num: '06',
      title: 'Module 6: Capstone Projects & Cloud Deployment',
      subtitle: 'Bring it all together by building and launching production-ready applications.',
      topics: [
        { name: 'Production SaaS Builds', details: 'Building e-commerce platforms with stripe, AI dashboards, and real-time chat hubs using Socket.io.' },
        { name: 'Git Workflows & Collaboration', details: 'Git branches, GitHub pull requests, conflict resolution, and collaborative code reviews.' },
        { name: 'Cloud Pipelines (Vercel/Render)', details: 'Hosting frontends on Vercel, backends on Render/Railway, MongoDB Atlas databases, and containerizing with Docker.' }
      ]
    }
  ];

  const tools = [
    { name: 'React.js', desc: 'Component architectures & state management', icon: 'auto_awesome' },
    { name: 'Redux Toolkit', desc: 'Predictable global state containers', icon: 'database' },
    { name: 'Tailwind CSS', desc: 'Utility-first UI responsive structures', icon: 'css' },
    { name: 'Node.js & Express', desc: 'Asynchronous backend event-loop APIs', icon: 'settings' },
    { name: 'MongoDB Atlas', desc: 'Cloud NoSQL document databases', icon: 'storage' },
    { name: 'Gemini AI API', desc: 'Injecting LLM completions & intelligence', icon: 'smart_toy' },
    { name: 'Git & GitHub', desc: 'Version control and collaborative pipelines', icon: 'terminal' },
    { name: 'Vercel & Render', desc: 'Production deployment and hosting', icon: 'cloud_done' }
  ];

  const placementSupport = [
    { icon: 'description', title: 'Resume & Portfolio Building', desc: 'We help you craft an ATS-friendly resume that highlights your MERN + AI skills. You will graduate with a live, hosted portfolio showcasing your capstone projects to employers.' },
    { icon: 'contacts', title: 'LinkedIn Profile Optimization', desc: 'Learn how to network effectively, optimize your profile for recruiters, and build a personal brand in the tech ecosystem.' },
    { icon: 'groups', title: 'Mock Interviews', desc: 'Participate in rigorous 1-on-1 mock technical interviews and HR rounds with industry experts to eliminate anxiety and refine communication.' },
    { icon: 'terminal', title: 'Coding Assessment Prep', desc: 'Dedicated sessions on Data Structures and Algorithms (DSA) basics and typical interview coding challenges.' },
    { icon: 'workspace_premium', title: 'Direct Placement Assistance', desc: 'Exclusive access to KodeToCareer\'s startup connections, industry networks, and enterprise hiring ecosystems looking for modern full-stack developers.' }
  ];

  return (
    <div className="bg-[#fafbfc] text-slate-800 font-sans antialiased relative overflow-hidden text-left">
      
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-blue-400/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[800px] right-10 w-[400px] h-[400px] rounded-full bg-purple-400/10 blur-[130px] pointer-events-none z-0"></div>

      {/* Course Hero */}
      <section className="relative pt-12 pb-20 md:py-24 border-b border-slate-100 z-10">
        <div className="absolute inset-0 technical-grid opacity-[0.22] pointer-events-none"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4.5 py-2 bg-blue-50/80 border border-blue-100/60 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 pulse-dot"></span>
                <span className="font-mono text-xs font-bold text-blue-800 tracking-wider">MERN STACK WITH AI CERTIFICATION</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.1] text-slate-900">
                Master MERN Stack.<br />
                Power React with AI.<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Build Production SaaS.
                </span>
              </h1>
              
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
                At KodeToCareer, we don’t just teach syntax — we engineer careers. Our cutting-edge MERN Stack with AI program is designed to take you from an absolute beginner to building, securing, and deploying AI-powered SaaS platforms online from anywhere in India.
              </p>
              
              {/* Program features list */}
              <div className="flex flex-wrap gap-2 text-xs font-bold">
                {['Daily Interactive Lectures', '4 Major SaaS Builds', 'Production Deployments', '100% Placement Assistance'].map((tag, i) => (
                  <span key={i} className="bg-white border border-slate-100 text-slate-700 px-4 py-2.5 rounded-xl shadow-sm">{tag}</span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={handleEnrollClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold rounded-xl shadow-md shadow-blue-500/10 active:scale-95 transition-all flex items-center gap-2"
                >
                  Enroll Now — ₹3,999
                  <span className="material-symbols-outlined text-[18px] font-bold">arrow_forward</span>
                </button>
                <a 
                  href="https://wa.me/919667975616?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20MERN%20Stack%20%2B%20AI%20course" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-slate-200 bg-white text-slate-750 hover:bg-slate-50 px-8 py-4 font-bold rounded-xl transition-all flex items-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-blue-600">chat</span>
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl shadow-2xl border border-slate-100 relative group bg-white p-2.5 z-10">
                <img 
                  className="w-full aspect-video md:aspect-square object-cover rounded-2xl hover:scale-[1.01] transition-transform duration-500" 
                  alt="MERN Stack and React online course certification program with placement support by KodeToCareer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWfVB6J84XXZcAjofzBkFScQx8qdqEQ2DTdummGZ75acTfiJLxlbcGyOSyZoWf1jncObJd_5OYg_2bWslZUkRBIwPf22sbvRy9XnBXqKrhaweOoSPQA5aEv35edkqcii4Ju-6n-_KlAHKjJjgMiNc4X7IklRzTEVSYFt57AHGTW_Y2pIYCnBR8ivOR6ti5jK9Wbq3Z3YvnG9PV5kGWGUkudbuhzImleKxun1-TDPcyMMi2kAcvWRq5amyHVU3mQpS8nHDUmW5oL9Tz"
                />
                
                {/* Stats row inside visual card */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-2xl mt-2.5 text-center flex justify-around">
                  <div>
                    <span className="block font-black text-slate-900 text-sm">₹3,999</span>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5 block">BOOTCAMP FEE</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200"></div>
                  <div>
                    <span className="block font-black text-slate-900 text-sm">12 Weeks</span>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5 block">COHORT DURATION</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200"></div>
                  <div>
                    <span className="block font-black text-slate-900 text-sm">4 Major SaaS</span>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5 block">PORTFOLIO BUILDS</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -top-3 -right-3 bg-white border border-slate-100 px-4 py-2.5 rounded-xl shadow-lg float-animation flex items-center gap-2 z-20">
                <span className="material-symbols-outlined text-blue-600">auto_awesome</span>
                <span className="font-mono text-xs text-slate-700 font-bold">OpenAI &amp; Gemini APIs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Program Curriculum Accordion */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">CURRICULUM SPECIFICATION</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Incremental Learning Syllabus</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Ensuring a strong foundation before diving into complex, industry-level MERN architecture.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {modules.map((mod, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 ${
                  activeModule === idx ? 'border-blue-400 ring-2 ring-blue-50/50 shadow-md' : 'border-slate-100'
                }`}
              >
                <button 
                  className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-slate-50 transition-colors text-left"
                  onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4">
                    <span className={`step-number font-black text-sm md:text-base font-mono px-3 py-1 rounded-lg ${
                      activeModule === idx ? 'bg-blue-50 text-blue-600' : 'bg-slate-50 text-slate-400'
                    }`}>0{idx + 1}</span>
                    <span className="font-bold text-slate-800 text-base md:text-lg">{mod.title.substring(mod.title.indexOf(':') + 1).trim()}</span>
                  </div>
                  <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${
                    activeModule === idx ? 'rotate-180 text-blue-600' : ''
                  }`}>
                    expand_more
                  </span>
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    activeModule === idx ? 'max-h-[800px] border-t border-slate-50' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 py-6 bg-slate-50/50">
                    <p className="text-xs text-slate-400 font-semibold mb-4 italic pl-1">{mod.subtitle}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mod.topics.map((topic, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-left">
                          <h4 className="text-xs font-black text-blue-600 mb-1.5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm font-black">check_circle</span>
                            {topic.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{topic.details}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Cohort Schedule */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100 relative z-10">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">COHORT LOGISTICS</span>
            <h2 className="text-3xl font-extrabold text-slate-900">A Day in the Life of a Bootcamper</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">Our schedule is mathematically structured to maximize logic retention and code implementation.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            {[
              { time: '06:00 PM - 08:00 PM', title: 'Live Theory & Code-Along', desc: 'Join the Google Meet call. Interact in real-time, code along with the mentor, and explore the architectural patterns live.', icon: 'video_chat', color: 'blue' },
              { time: '08:00 PM - 09:00 PM', title: 'Interactive Lab Work', desc: 'Immediately apply what you learned. Work on assignments, push to GitHub, and get help from tutors on voice chat.', icon: 'integration_instructions', color: 'indigo' },
              { time: 'Weekend Support', title: '1-on-1 Code Audits', desc: 'Submit your weekly projects. Meet mentors to review your files, optimize database queries, and clear syntax doubts.', icon: 'support_agent', color: 'emerald' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0 ${
                    step.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    step.color === 'indigo' ? 'bg-indigo-50 text-indigo-650' :
                    'bg-emerald-50 text-emerald-600'
                  }`}>
                    <span className="material-symbols-outlined">{step.icon}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400 block tracking-wider uppercase">{step.time}</span>
                  <h4 className="font-extrabold text-slate-900 text-sm mt-2 mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Code Playground / Sandbox */}
      <section className="py-20 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid md:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Left description column */}
            <div className="md:col-span-5 text-left space-y-6">
              <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">// TRY IT LIVE</span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">Interactive Backend API Simulator</h2>
              <p className="text-slate-650 text-sm leading-relaxed font-semibold">
                We don't just write HTML; we build production backend layers. Click the buttons below to fire mock HTTP requests to a simulated REST server and observe real-time database transactions.
              </p>
              
              <div className="flex flex-col gap-3 pt-2">
                {[
                  { id: 'register', label: 'POST /api/auth/register', desc: 'Create a new user document in MongoDB' },
                  { id: 'products', label: 'GET /api/products', desc: 'Query and paginate from products catalog' },
                  { id: 'aichat', label: 'POST /api/ai-chat', desc: 'Invoke Gemini GenAI model controller' }
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => triggerSandbox(act.id)}
                    disabled={sandboxLoading}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex flex-col gap-1 ${
                      sandboxAction === act.id
                        ? 'border-blue-500 bg-blue-50/50 shadow-sm ring-1 ring-blue-500/20'
                        : 'border-slate-150 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-slate-800">{act.label}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{act.desc}</span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right Terminal Sandbox Mockup */}
            <div className="md:col-span-7">
              <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-800 text-left overflow-hidden flex flex-col min-h-[350px]">
                {/* Window header */}
                <div className="bg-slate-950 px-4 py-3 flex items-center justify-between border-b border-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider">REST-CLIENT.LOG</span>
                  <div className="w-14"></div>
                </div>
                
                {/* Console Log Contents */}
                <div className="p-5 font-mono text-[11px] text-slate-400 space-y-4 flex-grow flex flex-col justify-between">
                  {sandboxLoading ? (
                    <div className="flex-grow flex flex-col items-center justify-center py-12 space-y-3">
                      <div className="w-8 h-8 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest animate-pulse">Running request...</span>
                    </div>
                  ) : (
                    <>
                      {/* Req Block */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">// REQUEST INFO</div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-blue-400 font-bold">{sandboxLogs.url}</span>
                          <span className="text-slate-600">|</span>
                          <span className="text-slate-500">HTTP/1.1</span>
                        </div>
                        <pre className="bg-slate-950 p-3 rounded-lg text-slate-350 border border-slate-900 max-h-[120px] overflow-y-auto">
                          {sandboxLogs.request}
                        </pre>
                      </div>
                      
                      {/* Res Block */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-850/50">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase">
                          <span>// SERVER RESPONSE</span>
                          <div className="flex items-center gap-2 text-[9px]">
                            <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono font-bold">{sandboxLogs.status}</span>
                            <span className="text-slate-600 bg-slate-800 px-1.5 py-0.5 rounded">{sandboxLogs.time}</span>
                          </div>
                        </div>
                        <pre className="bg-slate-950 p-3 rounded-lg text-slate-250 border border-slate-900 max-h-[150px] overflow-y-auto">
                          {sandboxLogs.response}
                        </pre>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Visual Tools Grid */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">TOOLS STACK</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Modern Technologies You Will Master</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Skip old syntax libraries. Get hands-on exposure with the modern stack used in modern production development.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:scale-[1.03] hover:border-blue-400 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <span className="material-symbols-outlined text-xl">{tool.icon}</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1.5">{tool.name}</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-End Placement Support */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">PLACEMENT ASSISTANCE</span>
            <h2 className="text-3xl font-extrabold text-slate-900">End-to-End Placement &amp; Career Support</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Learning to code is half the journey. Our dedicated placement cell translates your skills into job success.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            {placementSupport.map((support, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300">
                <div>
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-inner">
                    <span className="material-symbols-outlined">{support.icon}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-2">{support.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{support.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Credentials Section */}
      <section className="py-20 bg-white border-t border-slate-100 relative z-10">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid md:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            <div className="md:col-span-6 text-left space-y-6">
              <span className="text-blue-600 font-mono text-xs font-bold uppercase tracking-widest">// BOOTCAMP CREDENTIALS</span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">Verifiable Certificate &amp; Internship Experience Letter</h2>
              <p className="text-slate-600 text-sm leading-relaxed font-semibold">
                Upon completion of your capstone builds and weekly projects, you will receive two valuable credentials to highlight on your resume and LinkedIn:
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-605 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base font-bold">workspace_premium</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-850 text-xs">Signed Completion Certificate</h4>
                    <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Verifiable digital credential showcasing your full stack developer qualifications.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-650 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base font-bold">domain</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-850 text-xs">Internship Experience Letter</h4>
                    <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Proof of project-based internship hours working on live production-grade SaaS builds.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-6 relative">
              {/* Elegant SVG-based Mockup of Certificate */}
              <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-left relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="border border-slate-800 p-6 rounded-2xl bg-slate-950 flex flex-col justify-between aspect-[1.41/1] text-slate-350">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-widest">KODETOCAREER CERTIFICATION</span>
                    <span className="material-symbols-outlined text-lg text-blue-500 font-bold">verified</span>
                  </div>
                  
                  <div className="my-4 text-center space-y-2">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">THIS IS PROUDLY AWARDED TO</div>
                    <div className="text-[18px] font-extrabold text-white tracking-tight py-1 font-serif italic text-center justify-center w-full">Your Name Here</div>
                    <div className="text-[9px] text-slate-400 font-medium max-w-xs mx-auto leading-relaxed">
                      for successfully acing the 12-week intensive live MERN Stack with AI Bootcamp training program and building 4 production capstones.
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end pt-2 border-t border-slate-900">
                    <div>
                      <div className="h-6 font-serif italic text-[10px] text-slate-400">Faraz Khan</div>
                      <div className="text-[7px] text-slate-500 font-bold uppercase tracking-wider">FOUNDER, KODETOCAREER</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[8px] font-mono text-slate-500 font-bold">ID: KTC-MERN-2026-9812</div>
                      <div className="text-[7px] text-slate-500 font-bold uppercase mt-0.5">VERIFIABLE CREDENTIAL</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-20 md:py-24 bg-slate-50/50">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">BOOTCAMP INVESTMENT</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Get Complete Access</h2>
            <p className="text-slate-500 text-sm">Enroll once, own your skills forever. No hidden contracts, no monthly payments.</p>

            <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg max-w-lg mx-auto text-left">
              <div className="space-y-4 text-center">
                <span className="bg-blue-50 text-blue-600 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">LIMITED BATCH SIZE (25 SEATS)</span>
                <div className="flex items-baseline justify-center gap-2 pt-2">
                  <span className="text-slate-400 line-through text-lg font-bold">₹12,999</span>
                  <span className="text-5xl font-black text-slate-900">₹3,999</span>
                  <span className="text-slate-500 text-xs font-semibold">/ one-time</span>
                </div>
                <p className="text-xs text-slate-500 font-bold mt-1">Includes signed Certificate and Internship Letter</p>
              </div>

              <div className="border-t border-slate-100 my-6 pt-6 text-left space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>100% Live Google Meet interactive lectures</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>Lifetime video class recording backups</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>1-on-1 resume reviews and profile optimizations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-600 font-semibold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>Mock coding interviews with active industry software engineers</span>
                </div>
              </div>

              <button 
                onClick={handleEnrollClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md shadow-blue-500/10 active:scale-95 transition-all text-center"
              >
                Enroll Now for ₹3,999
              </button>
              
              <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 pt-4 font-semibold">
                <span className="material-symbols-outlined text-xs font-bold">lock</span>
                <span>Secure payment routing powered by Razorpay</span>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Simulated Checkout Drawer / Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-slate-950/75 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in-up">
          <div className="bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative border border-slate-100 text-left">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-sm font-bold">close</span>
            </button>

            {/* Razorpay Brand Header */}
            <div className="p-5 bg-slate-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">PAYMENT GATEWAY</span>
                <h4 className="text-base font-black flex items-center gap-1 mt-0.5">
                  <span className="text-blue-500 font-black">Razorpay</span> Secure
                </h4>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Total Amount</div>
                <div className="text-lg font-black text-white">₹3,999</div>
              </div>
            </div>

            {/* Step Content */}
            {checkoutStep === 'form' && (
              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                <h5 className="font-extrabold text-slate-950 text-sm">Enter Your Contact Information</h5>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Email Address</label>
                  <input 
                    type="email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com" 
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-500 uppercase">Phone Number</label>
                  <input 
                    type="tel" 
                    required 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 99999 99999" 
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-md active:scale-95 transition-all text-center text-sm"
                >
                  Proceed to Payment
                </button>
              </form>
            )}

            {checkoutStep === 'payment' && (
              <div className="p-6 space-y-5">
                <h5 className="font-extrabold text-slate-950 text-sm">Choose Payment Method</h5>
                
                <div className="space-y-2">
                  <button 
                    onClick={handlePaymentConfirm}
                    className="w-full border border-slate-100 hover:border-blue-600 rounded-xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-blue-50/20 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600">qr_code_2</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">UPI / QR Code</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">Pay using GooglePay, PhonePe, UPI ID</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                  </button>

                  <button 
                    onClick={handlePaymentConfirm}
                    className="w-full border border-slate-100 hover:border-blue-600 rounded-xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-blue-50/20 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600">credit_card</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Credit / Debit Card</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">All major Indian and international cards</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                  </button>

                  <button 
                    onClick={handlePaymentConfirm}
                    className="w-full border border-slate-100 hover:border-blue-600 rounded-xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-blue-50/20 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-600">account_balance</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Net Banking</div>
                        <div className="All major retail banks supported text-[9px] text-slate-400 mt-0.5">Select from list of banks</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                  </button>
                </div>

                <div className="text-[10px] text-slate-400 text-center font-semibold">
                  By clicking any method you simulate a successful payment trigger.
                </div>
              </div>
            )}

            {checkoutStep === 'success' && (
              <div className="p-8 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <span className="material-symbols-outlined text-3xl font-black">check</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-black text-slate-900">Payment Successful!</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    A payment confirmation invoice for **₹3,999** has been dispatched to **{email}**.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs space-y-2 text-slate-650 max-w-xs mx-auto">
                  <div className="flex justify-between font-bold">
                    <span>Transaction ID:</span>
                    <span className="font-mono text-slate-800">pay_RCZP98263158</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Seat Reserved:</span>
                    <span className="text-blue-600 uppercase">Confirmed</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed max-w-[280px] mx-auto">
                  Our program support team will email your private Discord access token and class calendar hooks within 24 hours.
                </p>
                <button 
                  onClick={() => setIsCheckoutOpen(false)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm"
                >
                  Close Checkout
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  )
}

export default MernWithAi
