import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import Logo from './Logo'

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const handleCoursesClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('courses');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToCourses: true } });
    }
  };

  const handleSuccessStoriesClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const element = document.getElementById('testimonials');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollToTestimonials: true } });
    }
  };

  const navLinkClass = ({ isActive }) => 
    `text-[15px] font-semibold transition-colors duration-200 py-2 ${
      isActive 
        ? 'text-blue-600 font-bold' 
        : 'text-slate-600 hover:text-blue-600'
    }`;

  return (
    <header className={`bg-white/95 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <nav className="flex justify-between items-center w-full px-4 md:px-gutter max-w-container-max mx-auto h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo size={32} />
          <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center">
            KodeToCareer
          </span>
        </Link>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Courses Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              onClick={handleCoursesClick}
              className="flex items-center gap-1 text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors py-2"
            >
              Courses
              <span className="material-symbols-outlined text-[16px] transition-transform duration-200" style={{ fontVariationSettings: "'wght' 600" }}>
                expand_more
              </span>
            </button>
            
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-0.5 w-56 bg-white border border-slate-100 rounded-xl shadow-lg py-2 z-50 animate-fade-in-up">
                <Link 
                  to="/courses/mern-with-ai" 
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium"
                >
                  MERN Stack with AI
                </Link>
                <Link 
                  to="/courses/python-with-ai" 
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors font-medium"
                >
                  Python with AI
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>
          
          <a 
            href="#testimonials" 
            onClick={handleSuccessStoriesClick}
            className="text-[15px] font-semibold text-slate-600 hover:text-blue-600 transition-colors py-2 cursor-pointer"
          >
            Success Stories
          </a>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a 
            href="#courses"
            onClick={handleCoursesClick}
            className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-150 active:scale-95 flex items-center gap-2 shadow-sm text-sm"
          >
            Explore Courses
            <span className="material-symbols-outlined text-[16px] font-bold">arrow_forward</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileOpen(!isMobileOpen)} 
          className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white border-t border-slate-100 shadow-inner overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileOpen ? 'max-h-[450px] opacity-100 py-4 px-4' : 'max-h-0 opacity-0 py-0 px-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          <div className="font-semibold text-slate-400 text-xs uppercase tracking-wider">Courses</div>
          <Link 
            to="/courses/mern-with-ai" 
            className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 pl-3 py-1.5"
          >
            MERN Stack with AI
          </Link>
          <Link 
            to="/courses/python-with-ai" 
            className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 pl-3 py-1.5"
          >
            Python with AI
          </Link>
          
          <hr className="border-slate-100 my-1" />

          <NavLink to="/about" className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 py-2">
            About Us
          </NavLink>
          <a 
            href="#testimonials" 
            onClick={(e) => { handleSuccessStoriesClick(e); setIsMobileOpen(false); }}
            className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 py-2"
          >
            Success Stories
          </a>
          <Link to="/contact" className="text-[15px] font-semibold text-slate-700 hover:text-blue-600 py-2">
            Contact
          </Link>
          <a 
            href="#courses"
            onClick={(e) => { handleCoursesClick(e); setIsMobileOpen(false); }}
            className="mt-3 px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold text-center hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
          >
            Explore Courses
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header
