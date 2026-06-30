import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useSEO from '../hooks/useSEO'

// Syntax Highlighting Utility Function
function highlightCode(code) {
  if (!code) return '';
  
  const tokenRegex = /(["'`].*?["'`])|(\/\/.*|#.*)|\b(import|export|default|function|const|let|var|return|class|def|from|as|await|async)\b|\b(React|App|server|model|iris|Sequential|Dense|Iris|iris_data)\b|\b(useState|useEffect|fetch|post|json|layers|load_iris|compile|listen)\b|([^\s"'`#\/]+)|(\s+)/g;
  
  const escapeHtml = (text) => text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
    
  return code.replace(tokenRegex, (match, string, comment, keyword, type, func, word, space) => {
    if (string) return `<span class="code-string">${escapeHtml(match)}</span>`;
    if (comment) return `<span class="code-comment">${escapeHtml(match)}</span>`;
    if (keyword) return `<span class="code-keyword">${escapeHtml(match)}</span>`;
    if (type) return `<span class="code-type">${escapeHtml(match)}</span>`;
    if (func) return `<span class="code-function">${escapeHtml(match)}</span>`;
    return escapeHtml(match);
  });
}

function Home() {
  const location = useLocation();

  useSEO({
    title: 'KodeToCareer | Live Online MERN Stack & Python Coding Bootcamps India',
    description: "Join India's most practical, interactive, and placement-driven live online coding bootcamps on Google Meet. Learn MERN Stack + AI & Python with AI from anywhere in India. 500+ students placed.",
    keywords: 'online coding bootcamp India, learn coding online, MERN stack course India, Python course online, live coding classes Google Meet, coding course with placement India, React training online India, web development bootcamp India, Node.js class India, KodeToCareer',
    canonical: 'https://www.kodetocareer.com/',
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'EducationalOrganization',
          '@id': 'https://www.kodetocareer.com/#organization',
          'name': 'KodeToCareer',
          'url': 'https://www.kodetocareer.com',
          'logo': {
            '@type': 'ImageObject',
            'url': 'https://www.kodetocareer.com/logo.png'
          },
          'description': 'KodeToCareer offers affordable, 100% live coding bootcamps in MERN Stack + AI and Python with AI with direct placement support.',
          'telephone': '+919667975616',
          'email': 'hello@kodetocareer.com',
          'sameAs': [
            'https://www.instagram.com/kodetocareer',
            'https://www.youtube.com/@kodetocareer'
          ]
        },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://www.kodetocareer.com/#localbusiness',
          'name': 'KodeToCareer',
          'image': 'https://www.kodetocareer.com/student_hero.png',
          'url': 'https://www.kodetocareer.com',
          'telephone': '+919667975616',
          'priceRange': '₹',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'Delhi NCR Region',
            'addressLocality': 'Delhi NCR',
            'addressRegion': 'Delhi',
            'postalCode': '110001',
            'addressCountry': 'IN'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': '28.6139',
            'longitude': '77.2090'
          },
          'areaServed': [
            {
              '@type': 'Country',
              'name': 'India'
            },
            {
              '@type': 'AdministrativeArea',
              'name': 'Delhi NCR'
            }
          ],
          'openingHoursSpecification': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
            ],
            'opens': '09:00',
            'closes': '22:00'
          }
        }
      ]
    }
  });

  const handleExploreCourses = (e) => {
    e.preventDefault();
    const element = document.getElementById('courses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // States for active tabs/sections
  const [activeTab, setActiveTab] = useState('react');
  const [hoveredTech, setHoveredTech] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleTestimonialChange = (newIndex) => {
    setIsFading(true);
    setTimeout(() => {
      setActiveTestimonial(newIndex);
      setIsFading(false);
    }, 200);
  };

  // States for stats count-up animation
  const [studentsPlaced, setStudentsPlaced] = useState(0);
  const [placementRate, setPlacementRate] = useState(0);
  const [projectsBuilt, setProjectsBuilt] = useState(0);
  const [studentRating, setStudentRating] = useState(0);

  useEffect(() => {
    // Navigation scroll triggers
    if (location.state?.scrollToCourses) {
      const element = document.getElementById('courses');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    } else if (location.state?.scrollToTestimonials) {
      const element = document.getElementById('testimonials');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  // Trigger Stat count-up animations on load
  useEffect(() => {
    let start = 0;
    const duration = 1200; // 1.2 seconds animation
    const stepTime = 30;
    const totalSteps = duration / stepTime;

    const timer = setInterval(() => {
      start++;
      setStudentsPlaced(Math.min(Math.floor((500 / totalSteps) * start), 500));
      setPlacementRate(parseFloat(Math.min((96.4 / totalSteps) * start, 96.4).toFixed(1)));
      setProjectsBuilt(Math.min(Math.floor((32 / totalSteps) * start), 32));
      setStudentRating(parseFloat(Math.min((4.9 / totalSteps) * start, 4.9).toFixed(1)));

      if (start >= totalSteps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  // Auto-rotate hero code tabs (resets timer on manual click)
  useEffect(() => {
    const tabKeys = ['react', 'node', 'python'];
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const nextIdx = (tabKeys.indexOf(prev) + 1) % tabKeys.length;
        return tabKeys[nextIdx];
      });
    }, 4500);
    return () => clearInterval(timer);
  }, [activeTab]);



  // Generic Data Configurations
  const codeSnippets = {
    react: {
      name: 'App.jsx',
      lang: 'react',
      code: `import React, { useState } from 'react'

export default function App() {
  const [joined, setJoined] = useState(false);
  
  return (
    <div className="app">
      <h1>Launch Your Coding Career</h1>
      <button onClick={() => setJoined(true)}>
        {joined ? "Joined Cohort!" : "Enroll Now"}
      </button>
    </div>
  );
}`
    },
    node: {
      name: 'server.js',
      lang: 'javascript',
      code: `// server.js (Express API)
const express = require('express');
const app = express();

app.post('/api/ai-chat', async (req, res) => {
  const { prompt } = req.body;
  const reply = await model.generate(prompt);
  res.json({ reply });
});

app.listen(5000, () => console.log('Ready'));`
    },
    python: {
      name: 'model.py',
      lang: 'python',
      code: `# model.py (AI Model Training)
import tensorflow as tf
from sklearn.model_selection import train_test_split

# Train deep learning classifier
model = tf.keras.Sequential([
  tf.keras.layers.Dense(64, activation='relu'),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(3, activation='softmax')
])

model.compile(optimizer='adam', loss='sparse_categorical')`
    }
  };

  const stats = [
    { value: `${studentsPlaced}+`, label: 'Students Placed', icon: 'groups', color: 'blue' },
    { value: `${placementRate}%`, label: 'Placement Rate', icon: 'trending_up', color: 'emerald' },
    { value: `${projectsBuilt}+`, label: 'Real-World Projects', icon: 'terminal', color: 'purple' },
    { value: `${studentRating}/5`, label: 'Student Rating', icon: 'star', color: 'amber' }
  ];

  const technologies = [
    { name: 'React', color: '#61dafb', glowColor: 'rgba(97,218,251,0.5)', svg: 'M50 38.6c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3 12.3-5.5 12.3-12.3-5.5-12.3-12.3-12.3zm0 21.6c-5.1 0-9.3-4.2-9.3-9.3s4.2-9.3 9.3-9.3 9.3 4.2 9.3 9.3-4.2 9.3-9.3 9.3z' },
    { name: 'Node.js', color: '#339933', glowColor: 'rgba(51,153,51,0.5)', isPill: true },
    { name: 'MongoDB', color: '#47A248', glowColor: 'rgba(71,162,72,0.5)', isLeaf: true },
    { name: 'Express', color: '#1e293b', glowColor: 'rgba(30,41,59,0.5)', textIcon: 'EX' },
    { name: 'Python', color: '#3776AB', glowColor: 'rgba(55,118,171,0.5)', pythonSvg: true }
  ];

  const courses = [
    {
      id: 'mern',
      title: 'MERN Stack with AI',
      desc: 'Build full-stack web apps with AI integration',
      isPopular: true,
      icon: 'react',
      features: ['100+ Hours Live', '16+ Projects', 'AI Integration', 'Internship'],
      price: '₹3,999',
      originalPrice: '₹12,999',
      discount: '69% OFF',
      btnText: 'Explore MERN',
      link: '/courses/mern-with-ai',
      glowClass: 'hover-glow-blue'
    },
    {
      id: 'python',
      title: 'Python with AI',
      desc: 'Master Python with AI & Machine Learning',
      isPopular: false,
      icon: 'python',
      features: ['100+ Hours Live', '16+ Projects', 'AI & ML Basics', 'Internship'],
      price: '₹4,499',
      originalPrice: '₹14,999',
      discount: '70% OFF',
      btnText: 'Explore Python',
      link: '/courses/python-with-ai',
      glowClass: 'hover-glow-purple'
    }
  ];

  const features = [
    { title: '100% Live Classes', desc: 'No pre-recorded videos', icon: 'video_camera_back', color: 'blue' },
    { title: 'Real-World Projects', desc: 'Build industry grade apps', icon: 'terminal', color: 'emerald' },
    { title: 'Certificate + LOR', desc: 'Boost your resume', icon: 'workspace_premium', color: 'amber' },
    { title: '1-on-1 Resume Review', desc: 'By industry experts', icon: 'assignment_ind', color: 'purple' },
    { title: 'Internship Support', desc: 'Gain real-world experience', icon: 'volunteer_activism', color: 'red' },
    { title: 'Placement Assistance', desc: 'We help you get hired', icon: 'work', color: 'sky' }
  ];

  const hiringPartnerLogos = [];

  const testimonials = [
    { name: 'Ankit Sharma', role: 'Full Stack Engineer', text: 'The live AI modules in the MERN course were highly relevant. I built real web systems and got hired at a fast-growing startup shortly after graduating.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpoIkUPsIOgBjkqgbu3KGC05DImkyE21ocIikMlJl3oi8XLleO39l2hcyPWBwS62t-UdRwhFZxIu8Zqcu1t52g9IY9otFTwFGwwbcq0TZOhQS90CJH_G8wqXmpf279QSMFXn45qIc2RNAaSYfFyVqNWgrb3Iu-ENLz0ICRB9FK-V5FbdyRTSOHNQ_inw44mm4LBClGUkzdHx40EURBd0pgbPf2am3-1QuHIvpqSFLte8gLE1td__37sT9iQTEVWzxlxXlv38J-OgS0' },
    { name: 'Priya Patel', role: 'Data Analyst', text: 'The placement support at KodeToCareer is stellar. They personally refined my LinkedIn profile and portfolio, which led to real interviews.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwBTJQ00q9gvR8Ov2vYncatucw7CnVCFSTlyaU2eoKLg8RtdsC7iAJLwxWnjz9l5BJ-wZVgO8Qxt_sZXvEj4D51BkFwqQTGWjZbut-bTfHJU8IRi5sZs9ovhU9Vx9jCcpiMkWG-pDjeZD2opXZnHT6WmnVSSrivt5YzivGWlC3pVZoSHzpnz0_1qWB5Ot8grpNNS6EMxdjkgOt4OKQ6zgP0pU9EioxqVUzWo--VTe5r0AwJmsOyliGLZ61g-glZngdSNGfg6P5Sn0x' },
    { name: 'Rohan Das', role: 'AI Engineer', text: 'Unlike courses with static video playback, the Mon-Fri live code-along schedule helped keep me highly accountable.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAuGzpbB0OMet0XKQEBkcd2ouY1eMrW-I5t6z5mU_YbmYCRzX9579PdB1WlSt7HOlEszQtZJtPcIA6BfDE6IkQQqL4ZBwM2OnMZdjUeOo0VclXzgHIvSoo8VFp1FfsG5_iwP_XBfLGXl17HqBygzSjzIVKsdebaPrs0btrlZLUzQvICf-vU_-g5U4l1GWYaAPlFHlXeWjqrZQlmdygX6evV-TdZav428jf9420qAJYUvZF8_8icQccFixWE7K_odrJy1LEchVrg6Ij' },
    { name: 'Sneha Gupta', role: 'SDE Intern', text: 'I was from a non-CS background with zero coding knowledge. KodeToCareer took me from writing my first "Hello World" to building a full MERN app with AI chatbot integration in just 4 months.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwBTJQ00q9gvR8Ov2vYncatucw7CnVCFSTlyaU2eoKLg8RtdsC7iAJLwxWnjz9l5BJ-wZVgO8Qxt_sZXvEj4D51BkFwqQTGWjZbut-bTfHJU8IRi5sZs9ovhU9Vx9jCcpiMkWG-pDjeZD2opXZnHT6WmnVSSrivt5YzivGWlC3pVZoSHzpnz0_1qWB5Ot8grpNNS6EMxdjkgOt4OKQ6zgP0pU9EioxqVUzWo--VTe5r0AwJmsOyliGLZ61g-glZngdSNGfg6P5Sn0x' },
    { name: 'Vikram Mehta', role: 'ML Engineer', text: 'The Python + AI bootcamp was incredibly well-structured. The capstone projects on NLP and computer vision gave me practical experience that I directly showcased in my interviews. Got hired within 3 weeks of completing the course.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpoIkUPsIOgBjkqgbu3KGC05DImkyE21ocIikMlJl3oi8XLleO39l2hcyPWBwS62t-UdRwhFZxIu8Zqcu1t52g9IY9otFTwFGwwbcq0TZOhQS90CJH_G8wqXmpf279QSMFXn45qIc2RNAaSYfFyVqNWgrb3Iu-ENLz0ICRB9FK-V5FbdyRTSOHNQ_inw44mm4LBClGUkzdHx40EURBd0pgbPf2am3-1QuHIvpqSFLte8gLE1td__37sT9iQTEVWzxlxXlv38J-OgS0' }
  ];

  const mentors = [];

  const portfolioProjects = [
    { name: 'AI-Powered E-Commerce', tech: 'React · Node.js · MongoDB · AI API', desc: 'Full-stack marketplace with AI-driven product recommendations, payment simulator, and admin dashboard.', color: 'blue' },
    { name: 'Health Analytics Dashboard', tech: 'Python · Pandas · TensorFlow · Streamlit', desc: 'Interactive data visualization platform for patient health metrics with predictive ML models.', color: 'purple' },
    { name: 'Real-Time Chat Application', tech: 'React · Socket.io · Express · JWT Auth', desc: 'WhatsApp-style messaging app with real-time communication, file sharing, and end-to-end encryption.', color: 'emerald' }
  ];

  const howItWorksSteps = [
    { step: '01', title: 'Enroll & Join', desc: 'Register online, complete payment, and instantly get access to our private community and cohort schedule.', icon: 'how_to_reg' },
    { step: '02', title: 'Learn & Build', desc: 'Attend 100% live classes Mon–Fri. Code along with live feedback, complete weekly projects, and get real-time doubt resolution.', icon: 'rocket_launch' },
    { step: '03', title: 'Get Placed', desc: 'Build your professional portfolio, ace mock interviews, and get direct referrals and career coaching support.', icon: 'emoji_events' }
  ];

  const faqs = [
    { question: 'Is this bootcamp suitable for absolute beginners?', answer: 'Yes! Both bootcamps start with the absolute fundamentals. You do not need any prior coding experience. We build logic step-by-step before diving into complex projects.' },
    { question: 'How do the live classes and doubt solving work?', answer: 'Classes are conducted 100% live. You can ask questions in real-time. If you get stuck on assignments, we hold weekend live doubt-solving sessions and provide support on our community server.' },
    { question: 'What is the placement assistance policy?', answer: 'We help you build a professional portfolio, optimize your resume and LinkedIn profile, host mock interviews with industry experts, and refer your profile directly to our extensive hiring network.' },
    { question: 'What happens if I miss a live class?', answer: 'Do not worry! Every live class is recorded. You will get lifetime access to the class recordings, code files, and homework assignments inside our student portal.' },
    { question: 'What tools and software will I need?', answer: 'Any standard laptop with 4GB+ RAM and stable internet is sufficient. We use free tools: VS Code for coding, video calls for classes, Discord for community support, GitHub for version control, and MongoDB Atlas for databases.' },
    { question: 'Is there a refund policy?', answer: 'Yes. If you are unsatisfied within the first 7 days of the batch, you can request a full refund — no questions asked. We are confident in the quality of our teaching.' },
    { question: 'Do you provide internship or experience letters?', answer: 'Yes! Upon completing the required portfolio projects and assignments, you will receive an official course completion certificate and a verifiable internship experience letter that you can showcase on your resume and LinkedIn.' },
    { question: 'How is KodeToCareer different from Udemy or Coursera?', answer: 'Unlike pre-recorded platforms, we offer 100% live interactive classes with live interactive guidance. You get personal mentorship, real-time code reviews, placement support, and a community of peers — all at a fraction of the cost of traditional bootcamps.' }
  ];

  return (
    <div className="bg-[#fafbfc] text-slate-800 font-sans antialiased overflow-hidden">
      
      {/* Dynamic Animated Background Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-blue-400/10 blur-[120px] animate-blob z-0 pointer-events-none"></div>
      <div className="absolute top-96 right-10 w-[450px] h-[450px] rounded-full bg-purple-400/10 blur-[130px] animate-blob animation-delay-2000 z-0 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-28 overflow-hidden z-10">
        <div className="absolute inset-0 technical-grid opacity-[0.22] z-0 pointer-events-none"></div>
        <div className="relative z-10 w-full max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6 md:space-y-8 text-left">
              
              {/* Live Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-md border border-blue-100/60 px-4.5 py-2 rounded-full shadow-sm">
                <span className="text-blue-600 font-extrabold text-[12px] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-500 pulse-dot"></span>
                  100% Live • Interactive • Career Focused
                </span>
              </div>
              
              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-[58px] font-black tracking-tight leading-[1.1] text-slate-900">
                Learn Coding.<br />
                Build Real Projects.<br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Launch Your Tech Career.
                </span>
              </h1>
              
              {/* Paragraph */}
              <p className="text-slate-600 text-[16px] md:text-[18px] max-w-xl leading-relaxed">
                Skip the static video lectures. Join India's top-rated live online coding bootcamps on Google Meet. Build production SaaS products with 100% live classes, real-world portfolio projects, and direct placement support.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-md border border-slate-100/60 rounded-2xl shadow-sm hover:scale-[1.03] transition-all duration-300">
                    <div className={`p-2.5 rounded-xl flex items-center justify-center shrink-0 ${
                      stat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                      stat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                      stat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                      'bg-amber-50 text-amber-500'
                    }`}>
                      <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 600" }}>{stat.icon}</span>
                    </div>
                    <div>
                      <div className="text-[19px] font-extrabold text-slate-900 leading-none">{stat.value}</div>
                      <div className="text-[11px] font-bold text-slate-400 mt-1 leading-tight">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a 
                  onClick={handleExploreCourses}
                  className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center gap-2.5 transition-all shadow-md shadow-blue-500/20 cursor-pointer active:scale-95 text-center justify-center text-sm"
                  href="#courses"
                >
                  Explore Live Courses
                  <span className="material-symbols-outlined text-[18px] font-bold">arrow_forward</span>
                </a>
              </div>

            </div>

            {/* Right Visual Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
                
                {/* Floating Code Editor Mockup */}
                <div className="absolute -top-12 -right-16 w-[310px] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 hidden sm:block">
                  {/* File tab switcher */}
                  <div className="flex items-center justify-between px-3 bg-slate-950 border-b border-slate-850 h-11">
                    <div className="flex gap-1.5 py-1">
                      {Object.keys(codeSnippets).map((tabKey) => (
                        <button
                          key={tabKey}
                          onClick={() => setActiveTab(tabKey)}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-bold font-mono flex items-center gap-1 transition-all ${
                            activeTab === tabKey 
                              ? 'bg-slate-800 text-white shadow-sm border border-slate-700/40' 
                              : 'text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          {tabKey === 'react' && (
                            <svg className="w-3.5 h-3.5 text-[#61dafb] animate-spin" style={{ animationDuration: '8s' }} viewBox="0 0 100 100" fill="currentColor">
                              <path d="M50 38.6c-6.8 0-12.3 5.5-12.3 12.3s5.5 12.3 12.3 12.3 12.3-5.5 12.3-12.3-5.5-12.3-12.3-12.3zm0 21.6c-5.1 0-9.3-4.2-9.3-9.3s4.2-9.3 9.3-9.3 9.3 4.2 9.3 9.3-4.2 9.3-9.3 9.3z" />
                              <path d="M96.7 46.8c-.8-5.3-3.6-10-7.8-13.4-4-3.2-9-5-14.3-5.2-1.9 0-3.8.2-5.7.5C64.6 23.4 57.5 20 50 20s-14.6 3.4-18.9 8.7c-1.9-.3-3.8-.5-5.7-.5-5.3.2-10.3 2-14.3 5.2-4.2 3.4-7 8.1-7.8 13.4-.6 3.9-.3 7.8 1 11.5-.7 1.8-1.2 3.8-1.5 5.7-.2 5.3 1.6 10.3 4.8 14.3 3.4 4.2 8.1 7 13.4 7.8 1.8.2 3.6.3 5.4.3 1.5 0 3-.1 4.5-.3C40.6 86.6 47.7 90 50 90s9.4-3.4 13.7-8.7c1.5.2 3 .3 4.5.3 1.8 0 3.6-.1 5.4-.3 5.3-.8 10-3.6 13.4-7.8 3.2-4 5-9 5.2-14.3-.3-1.9-.8-3.9-1.5-5.7 1.3-3.7 1.6-7.6 1-11.5V46.8z" opacity=".2" />
                            </svg>
                          )}
                          {codeSnippets[tabKey].name}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    </div>
                  </div>

                  {/* Code Area with Syntax Highlighting */}
                  <div className="p-5 font-mono text-[10px] text-slate-300 bg-slate-950 leading-relaxed min-h-[175px] max-h-[175px] overflow-y-auto">
                    <pre 
                      className="whitespace-pre text-left" 
                      dangerouslySetInnerHTML={{ __html: highlightCode(codeSnippets[activeTab].code) }}
                    />
                  </div>
                </div>

                {/* Main Hero Student Image */}
                <div className="relative w-full overflow-hidden rounded-[32px] border border-slate-100/80 shadow-2xl z-20 bg-white">
                  <img 
                    src="/student_hero.png" 
                    alt="Learn MERN stack and Python coding online in India at KodeToCareer bootcamp" 
                    className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>

                {/* Floating Badge: AI-Powered Learning */}
                <div className="absolute top-8 -left-12 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-3 shadow-lg z-30 flex items-center gap-2.5 animate-bounce" style={{ animationDuration: '4s' }}>
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 shadow-inner">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  </div>
                  <div className="text-left">
                    <div className="text-[12px] font-black text-slate-900 leading-none">AI-Powered</div>
                    <div className="text-[10px] font-bold text-slate-500 mt-1">Learning</div>
                  </div>
                </div>

                {/* Floating Badge: Project Deployed */}
                <div className="absolute bottom-16 -right-10 bg-white/90 backdrop-blur-md border border-white/50 rounded-2xl p-4 shadow-xl z-30 flex flex-col gap-1 w-52 text-left">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[12px] font-black">check</span>
                    </div>
                    <div className="text-[11px] font-extrabold text-slate-900 leading-tight">Project Deployed</div>
                  </div>
                  <div className="text-[9px] text-slate-400 font-bold pl-7 mt-0.5">Live on Vercel</div>
                  <hr className="border-slate-100 my-1.5" />
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-[10px] font-extrabold text-blue-600 flex items-center justify-between pl-7 hover:text-blue-700 transition-colors">
                    View Project
                    <span className="material-symbols-outlined text-[10px] font-black">arrow_forward</span>
                  </a>
                </div>

                {/* Technologies Capsule Bar with Brand Glows */}
                <div className="absolute -bottom-6 bg-white/90 backdrop-blur-md border border-slate-100/80 rounded-full px-6 py-3 shadow-lg z-40 flex items-center justify-center gap-6 max-w-md w-full">
                  {technologies.map((tech, idx) => (
                    <div 
                      key={idx}
                      onMouseEnter={() => setHoveredTech(tech.name)}
                      onMouseLeave={() => setHoveredTech(null)}
                      className="flex items-center gap-1.5 text-slate-700 cursor-pointer transition-all duration-300"
                      style={{
                        transform: hoveredTech === tech.name ? 'scale(1.1)' : hoveredTech ? 'scale(0.95) opacity(0.5)' : 'none',
                        color: hoveredTech === tech.name ? tech.color : ''
                      }}
                    >
                      {tech.svg && (
                        <svg className="w-4 h-4" viewBox="0 0 100 100" fill="currentColor">
                          <path d={tech.svg} />
                        </svg>
                      )}
                      {tech.isPill && (
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: tech.color }}></span>
                      )}
                      {tech.isLeaf && (
                        <span className="w-2 h-3.5 rounded-sm" style={{ backgroundColor: tech.color }}></span>
                      )}
                      {tech.textIcon && (
                        <span className="text-[9px] font-black border px-1 rounded" style={{ borderColor: hoveredTech === tech.name ? tech.color : '#475569' }}>
                          {tech.textIcon}
                        </span>
                      )}
                      {tech.pythonSvg && (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 100 100" fill="currentColor">
                          <path d="M50 5C25.1 5 25 16.5 25 16.5h10.4c0 0-.2-4.7 4.8-4.7 5.2 0 7.8 3.1 7.8 7.4v8.3h-18S10 27.5 10 50c0 22.4 17.5 22.5 17.5 22.5h6.3v-8.8c0 0 .1-10.4 10.4-10.4 10.2 0 16.3 0 16.3 0s14.5.1 14.5-13.8v-18S75 5 50 5z" />
                          <path d="M50 95c24.9 0 25-11.5 25-11.5h-10.4c0 0 .2 4.7-4.8 4.7-5.2 0-7.8-3.1-7.8-7.4v-8.3h18s20 .1 20-22.5c0-22.4-17.5-22.5-17.5-22.5h-6.3v8.8c0 0-.1 10.4-10.4 10.4-10.2 0-16.3 0-16.3 0s-14.5-.1-14.5 13.8v18s0 22.5 25 22.5z" />
                        </svg>
                      )}
                      <span className="text-[12px] font-extrabold">{tech.name}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Infinite Tech Marquee Section */}
      <section className="py-8 bg-slate-50 border-t border-b border-slate-100/60 overflow-hidden relative z-10">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>
        <div className="animate-marquee flex gap-12 items-center">
          {[
            { name: 'React.js', icon: 'developer_board', color: 'text-blue-500' },
            { name: 'Node.js', icon: 'settings', color: 'text-green-600' },
            { name: 'Express.js', icon: 'code', color: 'text-slate-600' },
            { name: 'MongoDB', icon: 'database', color: 'text-emerald-600' },
            { name: 'Python', icon: 'terminal', color: 'text-sky-600' },
            { name: 'Pandas', icon: 'table_view', color: 'text-purple-650' },
            { name: 'Machine Learning', icon: 'psychology', color: 'text-rose-500' },
            { name: 'Generative AI', icon: 'smart_toy', color: 'text-indigo-650' },
            { name: 'LangChain', icon: 'link', color: 'text-amber-500' },
            { name: 'FastAPI', icon: 'cloud_sync', color: 'text-teal-600' },
            { name: 'Git & GitHub', icon: 'history', color: 'text-slate-800' },
            { name: 'Cloud Deployment', icon: 'cloud_done', color: 'text-blue-600' }
          ].concat([
            { name: 'React.js', icon: 'developer_board', color: 'text-blue-500' },
            { name: 'Node.js', icon: 'settings', color: 'text-green-600' },
            { name: 'Express.js', icon: 'code', color: 'text-slate-600' },
            { name: 'MongoDB', icon: 'database', color: 'text-emerald-600' },
            { name: 'Python', icon: 'terminal', color: 'text-sky-600' },
            { name: 'Pandas', icon: 'table_view', color: 'text-purple-650' },
            { name: 'Machine Learning', icon: 'psychology', color: 'text-rose-500' },
            { name: 'Generative AI', icon: 'smart_toy', color: 'text-indigo-650' },
            { name: 'LangChain', icon: 'link', color: 'text-amber-500' },
            { name: 'FastAPI', icon: 'cloud_sync', color: 'text-teal-600' },
            { name: 'Git & GitHub', icon: 'history', color: 'text-slate-800' },
            { name: 'Cloud Deployment', icon: 'cloud_done', color: 'text-blue-600' }
          ]).map((tech, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-xl shadow-xs shrink-0 select-none">
              <span className={`material-symbols-outlined text-[20px] ${tech.color}`}>{tech.icon}</span>
              <span className="font-mono text-[11px] font-extrabold text-slate-700 uppercase tracking-wider">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bootcamps Cards Section */}
      <section className="py-20 md:py-24 bg-white" id="courses">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">LIVE BOOTCAMPS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Choose Your Path</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Gain production experience with active code guidance on Zoom &amp; Google Meet.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {courses.map((course, idx) => (
              <div 
                key={course.id} 
                className={`relative bg-white rounded-3xl border border-slate-100/90 shadow-md hover:shadow-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 ${course.glowClass}`}
              >
                
                {/* Most Popular Badge */}
                {course.isPopular && (
                  <div className="absolute top-4 left-4 bg-blue-50 text-blue-600 px-3.5 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold shadow-sm">
                    <span className="material-symbols-outlined text-[14px]">stars</span>
                    Most Popular
                  </div>
                )}

                <div className="pt-6 text-left">
                  {/* Icon Circle */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ${
                    course.icon === 'react' ? 'bg-blue-50/50' : 'bg-purple-50/50'
                  }`}>
                    {course.icon === 'react' ? (
                      <svg className="w-8 h-8" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="8" fill="#61dafb" />
                        <g stroke="#61dafb" strokeWidth="4.5" fill="none">
                          <ellipse rx="38" ry="14.5" transform="translate(50, 50)" />
                          <ellipse rx="38" ry="14.5" transform="translate(50, 50) rotate(60)" />
                          <ellipse rx="38" ry="14.5" transform="translate(50, 50) rotate(120)" />
                        </g>
                      </svg>
                    ) : (
                      <svg className="w-8 h-8 text-purple-600" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 5C25.1 5 25 16.5 25 16.5h10.4c0 0-.2-4.7 4.8-4.7 5.2 0 7.8 3.1 7.8 7.4v8.3h-18S10 27.5 10 50c0 22.4 17.5 22.5 17.5 22.5h6.3v-8.8c0 0 .1-10.4 10.4-10.4 10.2 0 16.3 0 16.3 0s14.5.1 14.5-13.8v-18S75 5 50 5z" />
                        <path d="M50 95c24.9 0 25-11.5 25-11.5h-10.4c0 0 .2 4.7-4.8 4.7-5.2 0-7.8-3.1-7.8-7.4v-8.3h18s20 .1 20-22.5c0-22.4-17.5-22.5-17.5-22.5h-6.3v8.8c0 0-.1 10.4-10.4 10.4-10.2 0-16.3 0-16.3 0s-14.5-.1-14.5 13.8v18s0 22.5 25 22.5z" />
                      </svg>
                    )}
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-[23px] font-black text-slate-900">{course.title}</h3>
                  <p className="text-slate-500 text-sm mt-2 font-medium">{course.desc}</p>

                  {/* Features specs checklist */}
                  <div className="grid grid-cols-2 gap-y-3.5 gap-x-2 py-6 my-6 border-t border-b border-slate-100">
                    {course.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-slate-700 text-xs font-semibold">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                          course.icon === 'react' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                        }`}>
                          <span className="material-symbols-outlined text-[12px] font-black">check</span>
                        </span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[25px] font-black text-slate-900">{course.price}</span>
                    <span className="text-slate-400 line-through text-xs font-semibold">{course.originalPrice}</span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black ${
                      course.icon === 'react' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                    }`}>{course.discount}</span>
                  </div>
                  <Link 
                    to={course.link} 
                    className={`px-5 py-3.5 rounded-xl text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm active:scale-95 shrink-0 ${
                      course.icon === 'react' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'
                    }`}
                  >
                    {course.btnText}
                    <span className="material-symbols-outlined text-[14px] font-bold">arrow_forward</span>
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Section (Bento Grid) */}
      <section className="py-20 bg-slate-50/50 border-t border-b border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">METHODOLOGY</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why KodeToCareer?</h2>
            <p className="text-slate-655 max-w-xl mx-auto text-sm font-medium">Engineered to bridge the gap from technical learning to high-impact placement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-5xl mx-auto text-left">
            {/* Bento Card 1 */}
            <div className="md:col-span-3 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-blue-400 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Live Interactive Sessions</h4>
                <p className="text-slate-500 text-sm leading-relaxed">No static video playbacks. Connect daily on Google Meet, code along with live interactive sessions, share screens, and get bugs solved in real-time.</p>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="md:col-span-3 bg-slate-900 text-white p-8 rounded-3xl flex flex-col justify-between hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Industry-Aligned Curriculum</h4>
                <p className="text-slate-400 text-sm leading-relaxed">Syllabus built by architects at top tech firms. We skip dry theory to teach active development, API bindings, and deployment workflows used in production today.</p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="md:col-span-2 bg-[#d8e2ff] p-8 rounded-3xl border border-[#b2c8ff] flex flex-col justify-between hover:scale-[1.02] transition-all duration-300">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">1-on-1 Mentorship</h4>
                <p className="text-slate-700 text-xs leading-relaxed">Personal office hours and Slack chats to debug syntax mistakes, review code files, and keep you accountable throughout the cohort.</p>
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className="md:col-span-4 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-emerald-400 hover:shadow-md transition-all duration-300">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-2xl">work_history</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Career Readiness &amp; Assistance</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-md">ATS resume optimization, LinkedIn tag reviews, mock interviews, and direct placement connections with our extensive network.</p>
                </div>
              </div>
              <div className="absolute right-4 bottom-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <span className="material-symbols-outlined text-[150px]">trending_up</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliberate Practice Comparison Section */}
      <section className="py-20 bg-white border-b border-slate-100 relative z-10">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">THE ROADMAP</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Escape "Tutorial Hell"</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">Why watching passive pre-recorded courses doesn't work, and how active deliberate practice fixes it.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {/* Passive Learning Card */}
            <div className="p-6 md:p-8 rounded-3xl border border-rose-100 bg-rose-50/20 relative overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="absolute -top-4 -right-4 text-rose-500/5 select-none pointer-events-none">
                <span className="material-symbols-outlined text-[120px] font-bold">cancel</span>
              </div>
              <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">visibility_off</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">Passive Course Videos</h3>
              <ul className="space-y-4">
                {[
                  'Watching lectures on 1.5x speed without typing a single line of code.',
                  'No code review. Writing messy code that is never corrected by experts.',
                  'Stuck on environment setup with outdated versions, leading to frustration.',
                  'Pre-recorded videos teaching libraries and frameworks from 3 years ago.'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-slate-650 text-xs font-semibold leading-relaxed">
                    <span className="material-symbols-outlined text-rose-550 text-base font-black shrink-0">remove</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Deliberate Practice Card */}
            <div className="p-6 md:p-8 rounded-3xl border border-emerald-100 bg-emerald-50/25 relative overflow-hidden transition-all duration-300 hover:shadow-md">
              <div className="absolute -top-4 -right-4 text-emerald-500/5 select-none pointer-events-none">
                <span className="material-symbols-outlined text-[120px] font-bold">check_circle</span>
              </div>
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-2xl">code</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-4">Our Deliberate Practice</h3>
              <ul className="space-y-4">
                {[
                  '100% Live sessions on Google Meet. Active code-along and instant feedback.',
                  'Direct Git pull-request review ensuring industry-standard clean practices.',
                  'Live setup debugging and weekend office hours so you never get stuck.',
                  'Modern curriculum teaching Generative AI integrations (Gemini & OpenAI).'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-slate-800 text-xs font-bold leading-relaxed">
                    <span className="material-symbols-outlined text-emerald-600 text-base font-black shrink-0">check</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works — 3-Step Journey */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">YOUR JOURNEY</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">How It Works</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">Three simple steps from enrollment to your first tech job.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {howItWorksSteps.map((item, idx) => (
              <div key={idx} className={`relative text-center stagger-${idx + 1}`}>
                {/* Connector Line */}
                {idx < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-slate-200 z-0"></div>
                )}
                <div className="relative z-10 flex flex-col items-center gap-5">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                  </div>
                  <span className="text-blue-600 font-mono text-xs font-black tracking-widest">STEP {item.step}</span>
                  <h4 className="text-lg font-extrabold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Portfolio Showcase */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-100">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">REAL PROJECTS</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">What You'll Build</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium">Students build production-grade applications during the bootcamp — not toy projects.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {portfolioProjects.map((project, idx) => (
              <div key={idx} className={`portfolio-card rounded-3xl border border-slate-100 shadow-sm overflow-hidden cursor-pointer stagger-${idx + 1}`}>
                <div className={`aspect-[4/3] flex items-center justify-center ${
                  project.color === 'blue' ? 'bg-gradient-to-br from-blue-50 to-blue-100' :
                  project.color === 'purple' ? 'bg-gradient-to-br from-purple-50 to-purple-100' :
                  'bg-gradient-to-br from-emerald-50 to-emerald-100'
                }`}>
                  <div className="text-center p-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      project.color === 'blue' ? 'bg-blue-500 text-white' :
                      project.color === 'purple' ? 'bg-purple-500 text-white' :
                      'bg-emerald-500 text-white'
                    }`}>
                      <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {project.color === 'blue' ? 'shopping_cart' : project.color === 'purple' ? 'monitoring' : 'chat'}
                      </span>
                    </div>
                    <span className={`font-mono text-xs font-bold ${
                      project.color === 'blue' ? 'text-blue-400' :
                      project.color === 'purple' ? 'text-purple-400' :
                      'text-emerald-400'
                    }`}>{project.tech}</span>
                  </div>
                  <div className="portfolio-overlay">
                    <p className="text-white text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <h4 className="font-extrabold text-slate-900 text-base mb-1.5">{project.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar Section */}
      <section className="pb-16 bg-white">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          
          <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-md max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {features.map((feat, idx) => (
                <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2.5 sm:px-3 pt-4 sm:pt-0 first:pt-0 first:pl-0">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    feat.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                    feat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                    feat.color === 'amber' ? 'bg-amber-50 text-amber-500' :
                    feat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                    feat.color === 'red' ? 'bg-red-50 text-red-500' :
                    'bg-sky-50 text-sky-600'
                  }`}>
                    <span className="material-symbols-outlined text-[20px]">{feat.icon}</span>
                  </div>
                  <div>
                    <div className="text-[12px] font-extrabold text-slate-900 leading-tight">{feat.title}</div>
                    <div className="text-[10px] font-semibold text-slate-500 mt-0.5">{feat.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Success Stories Testimonials Section with Controls */}
      <section className="py-20 md:py-24 bg-slate-50/50 border-t border-slate-100" id="testimonials">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest animate-pulse">ALUMNI TRANSFORMATION</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Success Stories</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Real stories from engineers who landed tech roles and career transitions.</p>
          </div>
          
          {/* Testimonial Active Display Card */}
          <div className="max-w-3xl mx-auto bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-lg relative flex flex-col justify-between text-left transition-all duration-500">
            <div className={`space-y-6 transition-all duration-300 ${isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <div className="flex justify-between items-center">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="material-symbols-outlined text-4xl text-slate-100 font-bold pointer-events-none">format_quote</span>
              </div>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed italic font-medium">
                "{testimonials[activeTestimonial].text}"
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-8 pt-6 border-t border-slate-100">
              <div className={`flex items-center gap-4 transition-all duration-300 ${isFading ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                <img 
                  className="w-12 h-12 rounded-full object-cover border border-slate-100" 
                  alt={testimonials[activeTestimonial].name} 
                  src={testimonials[activeTestimonial].img} 
                />
                <div>
                  <h5 className="font-extrabold text-slate-900 text-base">{testimonials[activeTestimonial].name}</h5>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              
              {/* Carousel Indicators & controls */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <button 
                  onClick={() => handleTestimonialChange(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors active:scale-90"
                >
                  <span className="material-symbols-outlined text-sm font-bold">arrow_back</span>
                </button>
                <div className="flex gap-1.5">
                  {testimonials.map((_, tIdx) => (
                    <button 
                      key={tIdx} 
                      onClick={() => handleTestimonialChange(tIdx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeTestimonial === tIdx ? 'w-5 bg-blue-600' : 'w-2 bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
                <button 
                  onClick={() => handleTestimonialChange(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
                  className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors active:scale-90"
                >
                  <span className="material-symbols-outlined text-sm font-bold">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-150">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-blue-600 font-mono text-sm font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">Everything you need to know about our cohorts and classes.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 text-left">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-slate-800 hover:text-blue-600 transition-colors"
                >
                  <span className="text-[15px] md:text-base pr-4">{faq.question}</span>
                  <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${
                    activeFaq === idx ? 'rotate-180 text-blue-600' : ''
                  }`}>
                    expand_more
                  </span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${
                    activeFaq === idx ? 'max-h-48 border-t border-slate-50' : 'max-h-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 py-5 text-sm text-slate-600 leading-relaxed bg-[#fafbfc]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Banner — Final Call to Action */}
      <section className="py-20 md:py-24">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="cta-banner rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-6 left-8 w-20 h-20 rounded-full bg-white/5 blur-xl"></div>
            <div className="absolute bottom-6 right-8 w-32 h-32 rounded-full bg-white/5 blur-2xl"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot"></span>
                LIMITED SEATS — NEXT BATCH STARTING SOON
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                Start Your Coding Journey Today
              </h2>
              <p className="text-white/80 text-sm md:text-base mb-8 leading-relaxed max-w-lg mx-auto">
                Join 500+ students who transformed their careers with KodeToCareer. Affordable live bootcamps with real placement support — no excuses, just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#courses" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all active:scale-95 shadow-lg shadow-black/10 flex items-center justify-center gap-2 text-sm"
                >
                  Explore Bootcamps
                  <span className="material-symbols-outlined text-base font-bold">arrow_forward</span>
                </a>
                <a 
                  href="https://wa.me/919667975616" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center gap-2 text-sm"
                >
                  <span className="material-symbols-outlined text-base">chat</span>
                  Chat on WhatsApp
                </a>
              </div>
              <p className="text-white/50 text-xs font-medium mt-6">No contracts · 7-day refund policy · ₹3,999 one-time fee</p>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Home
