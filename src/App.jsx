import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import MernWithAi from './pages/MernWithAi'
import PythonWithAi from './pages/PythonWithAi'
import Contact from './pages/Contact'

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getNextTargetDate = () => {
      const now = new Date();
      const target = new Date();
      target.setDate(now.getDate() + ((7 - now.getDay()) % 7 || 7));
      target.setHours(20, 0, 0, 0);
      if (target < now) {
        target.setDate(target.getDate() + 7);
      }
      return target;
    };

    const targetDate = getNextTargetDate();

    const updateTimer = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const m = Math.floor((difference / 1000 / 60) % 60);
      const s = Math.floor((difference / 1000) % 60);
      
      setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLockSeat = (e) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      window.location.href = '/#courses';
    } else {
      const element = document.getElementById('courses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Real-time Urgency Countdown Clock Ribbon */}
        <div className="bg-slate-900 text-white py-2.5 px-4 text-[11px] md:text-xs font-semibold text-center z-50 flex items-center justify-center gap-3 flex-wrap relative border-b border-slate-850">
          <span className="flex items-center gap-1.5 text-blue-400 font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            ⚡ Next Cohort Starts Soon:
          </span>
          <span className="text-slate-300">Batch starting next Sunday! Use code <strong className="text-amber-400">KTC10</strong> for an extra 10% off.</span>
          <div className="flex items-center gap-1 font-mono bg-white/10 px-2.5 py-0.5 rounded-lg text-[10px] md:text-[11px] font-bold text-white">
            <span>{String(timeLeft.days).padStart(2, '0')}d</span>:
            <span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
            <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
            <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
          </div>
          <a 
            href="#courses" 
            onClick={handleLockSeat} 
            className="underline text-blue-400 hover:text-blue-300 transition-colors text-[10px] md:text-[11px] font-bold uppercase tracking-wider"
          >
            Lock Seat Now
          </a>
        </div>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses/mern-with-ai" element={<MernWithAi />} />
            <Route path="/courses/python-with-ai" element={<PythonWithAi />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
