import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Download, Menu, X, UserPlus, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showTopBar, setShowTopBar] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActiveSection('home');
    else if (path === '/courses') setActiveSection('courses');
    else if (path === '/services') setActiveSection('services');
    else if (path === '/about') setActiveSection('about');
    else if (path === '/contact') setActiveSection('contact');
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBar(window.scrollY <= 80);
      
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/courses', label: 'Courses', id: 'courses' },
    { href: '/services', label: 'Services', id: 'services' },
    { href: '/about', label: 'About', id: 'about' },
    { href: '/contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <div
        className={`w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white transition-all duration-300 ease-in-out transform shadow-md hidden md:block ${
          showTopBar ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 flex items-center justify-between">
          <div className="flex items-center gap-4 lg:gap-6 text-xs sm:text-sm">
            <a href="tel:+911111222333" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
              <Phone size={16} className="group-hover:rotate-12 transition-transform" />
              <span className="hidden lg:inline">+91-1111-222-333</span>
            </a>
            <a href="mailto:thecodespark@gmail.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
              <Mail size={16} className="group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">thecodespark@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1.5 sm:gap-2 border-r border-gray-600 pr-2 sm:pr-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-all hover:scale-110">
                <Facebook size={16} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-all hover:scale-110">
                <Twitter size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-all hover:scale-110">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-all hover:scale-110">
                <Linkedin size={16} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-all hover:scale-110">
                <Youtube size={16} />
              </a>
            </div>
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:scale-105 transition-all">
              <Download size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Download Brochure</span>
              <span className="sm:hidden">Brochure</span>
            </button>
          </div>
        </div>
      </div>

      <nav
        className="bg-white/98 backdrop-blur-md z-50 shadow-xl border-b-2 border-orange-100 sticky transition-all duration-300"
        style={{ top: '0' }}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/95">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 transition-all duration-150 ease-out shadow-lg shadow-orange-500/50"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-2.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src="/Gemini_Generated_Image_9nq63t9nq63t9nq6-removebg-preview.png" alt="The Code Spark" className="h-11 w-auto object-contain drop-shadow-lg" />
          </div>
          
          <div className="hidden lg:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`font-semibold text-[15px] transition-all relative group py-1 ${
                  activeSection === link.id ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-2.5 rounded-full font-semibold text-[15px] flex items-center gap-2 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all" onClick={() => window.location.href='/register'}>
              <UserPlus size={18} />
              Register Now
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-700 hover:text-orange-600 transition-colors p-1">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-4 pb-4 border-t border-orange-100 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-semibold text-base py-2 px-4 rounded-lg transition-all ${
                  activeSection === link.id ? 'text-orange-600 bg-orange-50' : 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 justify-center hover:shadow-xl transition-all" onClick={() => window.location.href='/register'}>
              <UserPlus size={18} />
              Register Now
            </button>
          </div>
        )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
