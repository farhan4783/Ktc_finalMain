import React, { useState } from 'react'
import useSEO from '../hooks/useSEO'

function PythonWithAi() {
  const [activeModule, setActiveModule] = useState(0);

  useSEO({
    title: 'Python with AI, ML & Data Science Course | Live Online Bootcamp India — KodeToCareer',
    description: 'Master Python programming, Pandas data analysis, machine learning models, and Generative AI (LangChain, CrewAI, OpenAI/Gemini APIs) live online on Google Meet. Includes 10+ hands-on labs, 4 portfolio capstones, and placement support across India.',
    keywords: 'Python online course India, machine learning course online, data science bootcamp India, learn Python and AI, LangChain course online, best Python training India, AI agent development tutorial, learn coding online India, Python certificate placement, KodeToCareer',
    canonical: 'https://www.kodetocareer.com/courses/python-with-ai',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Course',
      'name': 'Python with AI, Machine Learning & Data Science Bootcamp',
      'description': 'Comprehensive live online Python bootcamp covering data wrangling, machine learning models, LangChain vector search, and CrewAI agent orchestration with 100% placement support in India.',
      'provider': {
        '@type': 'Organization',
        'name': 'KodeToCareer',
        'url': 'https://www.kodetocareer.com'
      },
      'offers': {
        '@type': 'Offer',
        'price': '4500',
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

  const [sandboxAction, setSandboxAction] = useState('pandas');
  const [sandboxLoading, setSandboxLoading] = useState(false);
  const [sandboxLogs, setSandboxLogs] = useState({
    url: 'df = pd.read_csv("sales.csv")',
    status: 'COMPLETED',
    time: '85ms',
    request: '# Load & Summarize Data Profile\nimport pandas as pd\ndf = pd.read_csv("sales.csv")\nprint(df.shape)\nprint(df.groupby("region")["revenue"].sum())',
    response: 'Shape: (5000, 8)\nRegion   Revenue\nNorth    ₹1,24,000\nSouth    ₹3,10,000\nEast     ₹1,85,000\nWest     ₹2,90,000\nName: revenue, dtype: float64'
  });

  const triggerSandbox = (action) => {
    setSandboxAction(action);
    setSandboxLoading(true);
    setTimeout(() => {
      setSandboxLoading(false);
      if (action === 'pandas') {
        setSandboxLogs({
          url: 'df = pd.read_csv("sales.csv")',
          status: 'COMPLETED',
          time: '85ms',
          request: '# Load & Summarize Data Profile\nimport pandas as pd\ndf = pd.read_csv("sales.csv")\nprint(df.shape)\nprint(df.groupby("region")["revenue"].sum())',
          response: 'Shape: (5000, 8)\nRegion   Revenue\nNorth    ₹1,24,000\nSouth    ₹3,10,000\nEast     ₹1,85,000\nWest     ₹2,90,000\nName: revenue, dtype: float64'
        });
      } else if (action === 'ml') {
        setSandboxLogs({
          url: 'model.fit(X_train, y_train)',
          status: 'COMPLETED',
          time: '240ms',
          request: '# Train Random Forest Classifier\nfrom sklearn.ensemble import RandomForestClassifier\nmodel = RandomForestClassifier(n_estimators=100)\nmodel.fit(X_train, y_train)\nprint("Accuracy:", model.score(X_test, y_test))',
          response: 'Training 100 decision trees...\nEnsemble converged successfully.\nAccuracy: 0.9482 (94.8% test set prediction accuracy)'
        });
      } else if (action === 'langchain') {
        setSandboxLogs({
          url: 'agent_executor.invoke({"input": "query"})',
          status: 'COMPLETED',
          time: '680ms',
          request: '# Invoke LangChain AI Agent\nfrom langchain.agents import initialize_agent\nagent = initialize_agent(tools, llm, agent="zero-shot-react-description")\nprint(agent.run("List active users from database"))',
          response: 'Thought: I need to access the database tools.\nAction: sql_db_list_tables\nAction Input: ""\nObservation: Users, Logs, Invoices\nThought: I will query the Users table.\nFinal Answer: There are currently 2,450 active users.'
        });
      }
    }, 600);
  };

  const handleEnrollClick = (e) => {
    e.preventDefault();
    const message = "Hi, I want to enroll in the Python with AI Course. Please guide me with the payment and batch details.";
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
      title: 'Module 1 — Complete Python Programming (Basic ➔ Advanced)',
      desc: 'Master python coding foundations, object-oriented concepts, and clean coding architectures.',
      points: [
        { name: 'Setup & Syntax Fundamentals', desc: 'VS Code, Jupyter, terminal basics, variables, data types, and control flow.' },
        { name: 'Data Structures & Algorithms', desc: 'Lists, tuples, dicts, sets, comprehensions, slicing, and algorithmic patterns.' },
        { name: 'OOP & Modularization', desc: 'Classes, inheritance, encapsulation, modules, packages, and clean architecture.' },
        { name: 'File I/O, Exceptions & Standards', desc: 'File handling (CSV/JSON), exception patterns, and PEP8 best practices.' }
      ]
    },
    {
      title: 'Module 2 — Data Science Foundations & Exploratory Analysis',
      desc: 'Build the toolkit to clean, explore, visualise, and extract insights from real-world datasets.',
      points: [
        { name: 'NumPy Vectorized Computing', desc: 'Multi-dimensional arrays, vectorized operations, data slicing, and boolean masking.' },
        { name: 'Pandas Data Wrangling', desc: 'High-volume CSV/Excel handling, cleaning missing metrics, groupby aggregations, merging, and transformations.' },
        { name: 'Statistics & Outlier Profiling', desc: 'Summary statistics, normal distributions, outlier detection, and correlations.' },
        { name: 'Visualization & Storytelling', desc: 'Matplotlib & Seaborn for publication-grade plots, heatmaps, and dashboarding.' }
      ]
    },
    {
      title: 'Module 3 — Machine Learning & AI Fundamentals',
      desc: 'Practical model-building from preprocessing to deployment. Learn algorithms, validation, and tuning.',
      points: [
        { name: 'Regression & Continuous Prediction', desc: 'Linear and multiple regression, Mean Squared Error, R², feature scaling pipelines, and error analysis.' },
        { name: 'Classification Techniques', desc: 'Logistic Regression, Decision Trees, Random Forests, SVM, evaluation metrics, and ROC analysis.' },
        { name: 'Unsupervised Learning', desc: 'K-Means clustering, silhouette & elbow methods, and customer segmentation workflows.' },
        { name: 'Model Validation & Tuning', desc: 'Train/test splits, cross-validation, bias-variance tradeoff, and GridSearch hyperparameter tuning.' }
      ]
    },
    {
      title: 'Module 4 — Generative AI & Large Language Models',
      desc: 'Deep dive into state-of-the-art Generative AI frameworks, LLM APIs, and agentic workflows.',
      points: [
        { name: 'LLM APIs & Prompting', desc: 'Using OpenAI & Gemini API systems, temperature control, and few-shot/zero-shot prompts.' },
        { name: 'LangChain & RAG Orchestration', desc: 'Document loaders, chunking text, vector store indexing, and search retrieval chains.' },
        { name: 'Agentic AI & CrewAI', desc: 'LangGraph stategraphs, conditional edges, and Multi-Agent CrewAI coordination models.' },
        { name: 'FastAPI Deployment & Security', desc: 'FastAPI chat endpoints, docker containerization, prompt injection checks, and rate limiting.' }
      ]
    }
  ];

  const tools = [
    { name: 'Python 3.x & Colab', desc: 'Scientific development environment', icon: 'terminal' },
    { name: 'Pandas & NumPy', desc: 'Fast tabular computations & wrangling', icon: 'table_view' },
    { name: 'Scikit-Learn', desc: 'Supervised & unsupervised ML pipelines', icon: 'psychology' },
    { name: 'Matplotlib & Seaborn', desc: 'Visual analytics and plots plotting', icon: 'insert_chart' },
    { name: 'LangChain Framework', desc: 'Vector retrieval & LLM orchestration', icon: 'link' },
    { name: 'CrewAI Agents', desc: 'Multi-agent role-playing automation', icon: 'smart_toy' },
    { name: 'FastAPI', desc: 'High-performance async API endpoints', icon: 'cloud_sync' },
    { name: 'Git & GitHub', desc: 'Managing codebases and portfolio history', icon: 'code' }
  ];

  const pythonProjects = [
    { week: 'Weeks 1-3', title: 'Smart Housing Market Estimator', tech: 'Scikit-Learn, NumPy, Pandas', desc: 'Predict pricing valuations using multi-feature regression pipelines, validation splits, and continuous error evaluations.' },
    { week: 'Weeks 4-6', title: 'Customer Classification Hub', tech: 'K-Means, Seaborn, Statistics', desc: 'Perform unsupervised customer profiling and cluster visual metrics to classify target buyer demographics.' },
    { week: 'Weeks 7-9', title: 'RAG Document Assistant Chatbot', tech: 'LangChain, VectorDB, Streamlit', desc: 'Upload documents, segment chunk vectors, load embeddings into a vector database, and query details via user dashboards.' },
    { week: 'Weeks 10-12', title: 'Multi-Agent Advisory Crew', tech: 'CrewAI Agents, LangGraph, FastAPI', desc: 'Orchestrate intelligent agents researching market analytics, drafting newsletters, and deploying endpoints.' }
  ];

  return (
    <div className="bg-[#fafbfc] text-slate-800 font-sans antialiased relative overflow-hidden text-left">
      
      {/* Background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-purple-400/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[800px] right-10 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-[130px] pointer-events-none z-0"></div>

      {/* Course Hero */}
      <section className="relative pt-12 pb-20 md:py-24 border-b border-slate-100 z-10">
        <div className="absolute inset-0 technical-grid opacity-[0.22] pointer-events-none"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4.5 py-2 bg-purple-50/85 border border-purple-100/60 rounded-full shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 pulse-dot"></span>
                <span className="font-mono text-xs font-bold text-purple-800 tracking-wider">60+ HOURS COMPLETE LIVE BOOTCAMP</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.1] text-slate-900">
                Python with AI, ML &amp;<br />
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Data Science Online Course.
                </span>
              </h1>
              
              <p className="text-slate-600 text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
                Go from variable syntax basics to deploying trained Machine Learning models and orchestrating Multi-Agent LangChain teams — taught live on Google Meet with personalized doubt support across India.
              </p>

              {/* Schedule Info Box */}
              <div className="bg-white/90 border border-slate-100 rounded-2xl p-4.5 max-w-lg shadow-sm">
                <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-purple-600 bg-purple-50 p-2 rounded-xl">calendar_today</span>
                    <div>
                      <div className="font-extrabold text-slate-900">Mon — Fri</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Live Interactive Classes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-purple-600 bg-purple-50 p-2 rounded-xl">quiz</span>
                    <div>
                      <div className="font-extrabold text-slate-900">Sat — Sun</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">Doubt Clearing &amp; Labs</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <button 
                  onClick={handleEnrollClick}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-bold rounded-xl shadow-md shadow-purple-500/10 active:scale-95 transition-all flex items-center gap-2"
                >
                  Enroll Now — ₹4,500
                  <span className="material-symbols-outlined text-[18px] font-bold">arrow_forward</span>
                </button>
                <a 
                  href="https://wa.me/919667975616?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20Python%20with%20AI%20course" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-slate-200 bg-white text-slate-750 hover:bg-slate-50 px-8 py-4 font-bold rounded-xl transition-all flex items-center gap-2 shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px] text-purple-650">chat</span>
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl shadow-2xl border border-slate-100 relative group bg-white p-2.5 z-10">
                <img 
                  className="w-full aspect-video md:aspect-square object-cover rounded-2xl hover:scale-[1.01] transition-transform duration-500" 
                  alt="Online Python, Machine Learning and Data Science course certification with placement support by KodeToCareer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8pLzS5lzHKTUbAKhUnRV3A9nLGF0hz2ggCySs0lwpPJn6aEDcjXyLycIuAUlouGDwOjeMlUwz1KY_dZ7ooZfPbFlQfH9RR2T5X_1dk8x76OZDr0pvxec7jXagrsOLQ--pxGw6oEO9ah-_tV_OO-BFcWm7wxzXSXhauXNQGk6S00ftuTgebN6UfMueK2t2Mg3zq1Whe5IYGnuEJ5jW4194vdY-9Hi5fCDzaqB0UAxEUScwfWOfOok-IIrloR1gKQLMOvyqoybyuDI6"
                />
                
                {/* Stats summary banner */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 rounded-2xl mt-2.5 text-center flex justify-around">
                  <div>
                    <span className="block font-black text-slate-900 text-sm">₹4,500</span>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5 block">BOOTCAMP FEE</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200"></div>
                  <div>
                    <span className="block font-black text-slate-900 text-sm">60+ Hours</span>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5 block">LIVE WORKSHOPS</span>
                  </div>
                  <div className="w-px h-6 bg-slate-200"></div>
                  <div>
                    <span className="block font-black text-slate-900 text-sm">10+ builds</span>
                    <span className="text-[9px] text-slate-400 font-extrabold uppercase mt-0.5 block">PRACTICAL LABS</span>
                  </div>
                </div>
              </div>

              {/* Floating tech badge */}
              <div className="absolute -top-3 -right-3 bg-white border border-slate-100 px-4 py-2.5 rounded-xl shadow-lg float-animation flex items-center gap-2 z-20">
                <span className="material-symbols-outlined text-purple-600">psychology</span>
                <span className="font-mono text-xs text-slate-700 font-bold">ML &amp; LangChain</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience & Outcomes */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid md:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
            <div className="text-left">
              <span className="text-purple-600 font-mono text-xs font-bold uppercase tracking-widest">TARGET AUDIENCE</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 mb-4">Who Should Enrol?</h2>
              <p className="text-sm text-slate-500 leading-relaxed font-semibold mb-6">
                Ideal for aspiring developers, data analysts, finance professionals, and career-switchers with zero or basic coding experience looking to enter the AI ecosystem.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-100 p-6 rounded-3xl text-left">
              <h3 className="text-xs font-black text-slate-900 font-mono tracking-wide uppercase">// TARGET LEARNING OUTCOMES</h3>
              <ul className="space-y-3.5 text-xs text-slate-650 font-bold mt-4">
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[12px] font-black">check</span>
                  </span>
                  Confidence writing clean, modular Python applications.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[12px] font-black">check</span>
                  </span>
                  Process, visualize, and profile tabular datasets using Pandas.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[12px] font-black">check</span>
                  </span>
                  Train supervised regressions and classification trees.
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[12px] font-black">check</span>
                  </span>
                  Ship 4 Capstone projects for a job-ready portfolio.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Course Syllabus Accordion */}
      <section className="py-20 md:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-purple-600 font-mono text-sm font-bold uppercase tracking-widest">DETAILED SYLLABUS</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Python + AI Curriculum Breakdown</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Four core modules taking you step-by-step from syntax logic to training models and AI agent pipelines.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {modules.map((mod, idx) => (
              <div 
                key={idx} 
                className={`border rounded-2xl overflow-hidden bg-white shadow-sm transition-all duration-300 ${
                  activeModule === idx ? 'border-purple-400 ring-2 ring-purple-50/50 shadow-md' : 'border-slate-100'
                }`}
              >
                <button 
                  className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-slate-50 transition-colors text-left"
                  onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                >
                  <div className="flex items-center gap-4">
                    <span className={`step-number font-black text-sm md:text-base font-mono px-3 py-1 rounded-lg ${
                      activeModule === idx ? 'bg-purple-50 text-purple-600' : 'bg-slate-50 text-slate-400'
                    }`}>0{idx + 1}</span>
                    <span className="font-bold text-slate-800 text-base md:text-lg">{mod.title.substring(mod.title.indexOf('—') + 1).trim()}</span>
                  </div>
                  <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${
                    activeModule === idx ? 'rotate-180 text-purple-600' : ''
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
                    <p className="text-xs text-slate-400 font-semibold mb-4 italic pl-1">{mod.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mod.points.map((point, i) => (
                        <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm text-left">
                          <h4 className="text-xs font-black text-purple-600 mb-1.5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm font-black">check_circle</span>
                            {point.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{point.desc}</p>
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
            <span className="text-purple-600 font-mono text-sm font-bold uppercase tracking-widest">COHORT LOGISTICS</span>
            <h2 className="text-3xl font-extrabold text-slate-900">A Day in the Life of a Bootcamper</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">Our schedule is mathematically structured to maximize logic retention and code implementation.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            {[
              { time: '06:00 PM - 08:00 PM', title: 'Live Theory & Code-Along', desc: 'Join the Google Meet call. Interact in real-time, code along with the mentor, and explore the architectural patterns live.', icon: 'video_chat', color: 'purple' },
              { time: '08:05 PM - 09:00 PM', title: 'Interactive Lab Work', desc: 'Immediately apply what you learned. Work on assignments, push to GitHub, and get help from tutors on voice chat.', icon: 'integration_instructions', color: 'indigo' },
              { time: 'Weekend Support', title: '1-on-1 Code Audits', desc: 'Submit your weekly projects. Meet mentors to review your files, optimize database queries, and clear syntax doubts.', icon: 'support_agent', color: 'emerald' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0 ${
                    step.color === 'purple' ? 'bg-purple-50 text-purple-650' :
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

      {/* Student Portal Preview */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-purple-600 font-mono text-sm font-bold uppercase tracking-widest">STUDENT EXPERIENCE</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Your Student Learning Portal</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">A mock preview of our student portal, where you access live links, calendar invites, and daily slides.</p>
          </div>

          <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl max-w-3xl mx-auto border border-slate-800 text-left">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-800 pb-6 mb-6">
              <div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wide">ACTIVE COHORT LEVEL // WEEK 4</span>
                <h3 className="text-xl font-black text-white mt-1">Python, ML &amp; AI Agent Development</h3>
              </div>
              <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3.5 py-1.5 rounded-full border border-emerald-500/20 text-xs font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                LIVE CALL IN PROGRESS
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8">
              {/* Left side: upcoming call card */}
              <div className="md:col-span-7 bg-slate-950 border border-slate-850 p-6 rounded-2xl space-y-6">
                <div className="space-y-2">
                  <div className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">TODAY'S LECTURE</div>
                  <h4 className="text-base font-extrabold text-white">Model Training, Validations &amp; Scikit-Learn</h4>
                  <p className="text-slate-400 text-xs leading-relaxed font-semibold">Master linear models, validation splits, precision metrics, and export python kernel evaluations.</p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://meet.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-purple-650 hover:bg-purple-705 text-white font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined text-sm font-black">video_call</span>
                    Join Google Meet
                  </a>
                  <a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 bg-slate-800 hover:bg-slate-750 text-slate-350 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all border border-slate-700"
                  >
                    <span className="material-symbols-outlined text-sm font-black">forum</span>
                    Private Discord
                  </a>
                </div>
              </div>

              {/* Right side: slides/homework tasks list */}
              <div className="md:col-span-5 space-y-5">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">Today's Class Assets</h4>
                
                <div className="space-y-3">
                  {[
                    { name: 'Lecture Slides (PDF)', type: 'download', icon: 'description' },
                    { name: 'GitHub Code Template', type: 'link', icon: 'code_blocks' },
                    { name: 'Assignment: Housing Prediction', type: 'submit', icon: 'assignment' }
                  ].map((asset, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-950/50 border border-slate-850 hover:bg-slate-950 transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-500 text-lg">{asset.icon}</span>
                        <span className="text-xs font-bold text-slate-300">{asset.name}</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-500 text-sm font-bold cursor-pointer hover:text-white transition-colors">
                        {asset.type === 'download' ? 'download' : asset.type === 'link' ? 'open_in_new' : 'upload_file'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects Showcase */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-purple-600 font-mono text-sm font-bold uppercase tracking-widest">CAPSTONE BUILDS</span>
            <h2 className="text-3xl font-extrabold text-slate-900">4 High-Impact Portfolio Projects</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">We build production machine learning and agent pipelines. Build, host, and deploy these projects during the bootcamp.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {pythonProjects.map((project, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl border border-slate-150 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-purple-50 text-purple-650 px-4 py-1.5 rounded-bl-2xl text-[10px] font-mono font-bold tracking-wide">
                  {project.week}
                </div>
                
                <div className="space-y-4 pt-2">
                  <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center shadow-inner">
                    <span className="material-symbols-outlined text-xl">folder_zip</span>
                  </div>
                  
                  <div>
                    <span className="font-mono text-[9px] font-bold text-purple-650 uppercase tracking-widest">{project.tech}</span>
                    <h3 className="text-lg font-black text-slate-900 mt-1.5 mb-2">{project.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-semibold">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Python Sandbox / Code Playground */}
      <section className="py-20 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid md:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
            
            {/* Left description column */}
            <div className="md:col-span-5 text-left space-y-6">
              <span className="text-purple-600 font-mono text-xs font-bold uppercase tracking-widest">// PYTHON IN ACTION</span>
              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">Interactive AI &amp; Data Pipeline Simulator</h2>
              <p className="text-slate-650 text-sm leading-relaxed font-semibold">
                Don't just read syntax. Run simulated Python cells containing real pandas, scikit-learn, and LangChain model scripts to see how data structures are calculated and processed.
              </p>
              
              <div className="flex flex-col gap-3 pt-2">
                {[
                  { id: 'pandas', label: 'df.groupby("region")["revenue"].sum()', desc: 'Aggregate sales data dynamically' },
                  { id: 'ml', label: 'RandomForestClassifier.fit()', desc: 'Train a machine learning predictor' },
                  { id: 'langchain', label: 'agent_executor.run()', desc: 'Run a LangChain reasoning agent' }
                ].map((act) => (
                  <button
                    key={act.id}
                    onClick={() => triggerSandbox(act.id)}
                    disabled={sandboxLoading}
                    className={`w-full p-4 rounded-xl border text-left transition-all flex flex-col gap-1 ${
                      sandboxAction === act.id
                        ? 'border-purple-500 bg-purple-50/50 shadow-sm ring-1 ring-purple-500/20'
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
                  <span className="font-mono text-[10px] text-slate-500 font-bold uppercase tracking-wider">JUPYTER_KERNEL.LOG</span>
                  <div className="w-14"></div>
                </div>
                
                {/* Console Log Contents */}
                <div className="p-5 font-mono text-[11px] text-slate-400 space-y-4 flex-grow flex flex-col justify-between">
                  {sandboxLoading ? (
                    <div className="flex-grow flex flex-col items-center justify-center py-12 space-y-3">
                      <div className="w-8 h-8 rounded-full border-2 border-purple-500 border-t-transparent animate-spin"></div>
                      <span className="text-slate-500 text-[10px] uppercase font-bold tracking-widest animate-pulse">Executing code...</span>
                    </div>
                  ) : (
                    <>
                      {/* Req Block */}
                      <div className="space-y-1.5">
                        <div className="text-[10px] text-slate-500 font-bold uppercase">// INPUT PYTHON CELL</div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-purple-400 font-bold">{sandboxLogs.url}</span>
                        </div>
                        <pre className="bg-slate-950 p-3 rounded-lg text-slate-350 border border-slate-900 max-h-[120px] overflow-y-auto whitespace-pre-wrap">
                          {sandboxLogs.request}
                        </pre>
                      </div>
                      
                      {/* Res Block */}
                      <div className="space-y-1.5 pt-2 border-t border-slate-850/50">
                        <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold uppercase">
                          <span>// STDOUT OUTPUT</span>
                          <div className="flex items-center gap-2 text-[9px]">
                            <span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded font-mono font-bold">{sandboxLogs.status}</span>
                            <span className="text-slate-600 bg-slate-800 px-1.5 py-0.5 rounded">{sandboxLogs.time}</span>
                          </div>
                        </div>
                        <pre className="bg-slate-950 p-3 rounded-lg text-slate-200 border border-slate-900 max-h-[150px] overflow-y-auto whitespace-pre-wrap">
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

      {/* Tools visual grid */}
      <section className="py-20 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-purple-600 font-mono text-sm font-bold uppercase tracking-widest">TOOLS STACK</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Modern Python Stack You Will Learn</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Industry standard frameworks and libraries used by data scientists and AI builders.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center hover:scale-[1.03] hover:border-purple-400 hover:shadow-md transition-all duration-300">
                <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-inner">
                  <span className="material-symbols-outlined text-xl">{tool.icon}</span>
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1.5">{tool.name}</h4>
                <p className="text-[10px] text-slate-400 leading-relaxed font-semibold">{tool.desc}</p>
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
              <span className="text-purple-600 font-mono text-xs font-bold uppercase tracking-widest">// BOOTCAMP CREDENTIALS</span>
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
                    <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Verifiable digital credential showcasing your Python, Data Science &amp; AI qualifications.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-650 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-base font-bold">domain</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-850 text-xs">Internship Experience Letter</h4>
                    <p className="text-slate-500 text-[11px] font-semibold mt-0.5">Proof of project-based internship hours working on live predictive ML and LangChain agent systems.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-6 relative">
              {/* Elegant SVG-based Mockup of Certificate */}
              <div className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 text-left relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
                <div className="border border-slate-800 p-6 rounded-2xl bg-slate-950 flex flex-col justify-between aspect-[1.41/1] text-slate-350">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[9px] text-slate-500 font-bold uppercase tracking-widest">KODETOCAREER CERTIFICATION</span>
                    <span className="material-symbols-outlined text-lg text-purple-500 font-bold">verified</span>
                  </div>
                  
                  <div className="my-4 text-center space-y-2">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide">THIS IS PROUDLY AWARDED TO</div>
                    <div className="text-[18px] font-extrabold text-white tracking-tight py-1 font-serif italic text-center justify-center w-full">Your Name Here</div>
                    <div className="text-[9px] text-slate-400 font-medium max-w-xs mx-auto leading-relaxed">
                      for successfully acing the 60+ hour intensive live Python with AI, Machine Learning &amp; Data Science Bootcamp training program.
                    </div>
                  </div>
                  
                  <div className="flex justify-end items-end pt-2 border-t border-slate-900">
                    <div className="text-right">
                      <div className="text-[8px] font-mono text-slate-500 font-bold">ID: KTC-PYTH-2026-8843</div>
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
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <span className="text-purple-600 font-mono text-sm font-bold uppercase tracking-widest">BOOTCAMP INVESTMENT</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Affordable, Simple Pricing</h2>
            <p className="text-slate-500 text-sm">Enroll once, own your skills forever. No hidden contracts, no monthly payments.</p>

            <div className="bg-[#fafbfc] border border-slate-150 rounded-3xl p-8 md:p-10 shadow-lg max-w-lg mx-auto text-left">
              <div className="space-y-4 text-center">
                <span className="bg-purple-50 text-purple-600 text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider font-extrabold">LIMITED BATCH SIZE (25 SEATS)</span>
                <div className="flex items-baseline justify-center gap-2 pt-2">
                  <span className="text-slate-400 line-through text-lg font-bold">₹14,999</span>
                  <span className="text-5xl font-black text-slate-900">₹4,500</span>
                  <span className="text-slate-500 text-xs font-semibold">/ one-time</span>
                </div>
                <p className="text-xs text-slate-500 font-bold mt-1">Includes signed Certificate and Internship Letter</p>
              </div>

              <div className="border-t border-slate-150 my-6 pt-6 text-left space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-650 font-bold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>Mon—Fri Interactive Live Lessons on Google Meet</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-650 font-bold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>4 Capstone Projects + 10+ Practical Builds</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-650 font-bold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>Includes codebase templates, curated datasets, and assignments</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-650 font-bold">
                  <span className="material-symbols-outlined text-emerald-500 text-base font-black">check_circle</span>
                  <span>Lifetime class recording backups</span>
                </div>
              </div>

              <button 
                onClick={handleEnrollClick}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl shadow-md shadow-purple-500/10 active:scale-95 transition-all text-center"
              >
                Enroll Now for ₹4,500
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
                  <span className="text-purple-500 font-black">Razorpay</span> Secure
                </h4>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400">Total Amount</div>
                <div className="text-lg font-black text-white">₹4,500</div>
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
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none"
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
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-purple-600 focus:border-purple-600 outline-none"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3.5 rounded-xl shadow-md active:scale-95 transition-all text-center text-sm"
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
                    className="w-full border border-slate-100 hover:border-purple-600 rounded-xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-purple-50/20 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-purple-600">qr_code_2</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">UPI / QR Code</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">Pay using GooglePay, PhonePe, UPI ID</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                  </button>

                  <button 
                    onClick={handlePaymentConfirm}
                    className="w-full border border-slate-100 hover:border-purple-600 rounded-xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-purple-50/20 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-purple-600">credit_card</span>
                      <div>
                        <div className="text-xs font-bold text-slate-800">Credit / Debit Card</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">All major Indian and international cards</div>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                  </button>

                  <button 
                    onClick={handlePaymentConfirm}
                    className="w-full border border-slate-100 hover:border-purple-600 rounded-xl p-3.5 flex items-center justify-between text-left transition-colors hover:bg-purple-50/20 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-400 group-hover:text-purple-600">account_balance</span>
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
                    A payment confirmation invoice for **₹4,500** has been dispatched to **{email}**.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-xs space-y-2 text-slate-650 max-w-xs mx-auto">
                  <div className="flex justify-between font-bold">
                    <span>Transaction ID:</span>
                    <span className="font-mono text-slate-800">pay_PYTH90518376</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>Seat Reserved:</span>
                    <span className="text-purple-600 uppercase font-extrabold">Confirmed</span>
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

export default PythonWithAi
