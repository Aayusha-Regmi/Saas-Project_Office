import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header 
      className={`sticky top-0 z-50 py-1 sm:py-2 md:py-3 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/images/img_saas_logo_101_1.png" 
              alt="SAAS Logo" 
              className="h-[60px] sm:h-[70px] md:h-[90px] w-auto transition-all duration-300" 
            />
          </Link>
        </div>        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-5">
          <Link to="/" className="text-sm xl:text-base font-bold text-blue-500 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <div className="relative group">
            <Link to="/industries" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Dropdown can be added here */}
          </div>          <div className="relative group">
            <Link to="/services" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              Services
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
          </div>
          <Link to="/teams" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 transition-colors">
            Teams
          </Link>
          <div className="relative group">
            <Link to="/calculations" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              Calculations
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
          </div>          <div className="relative group">
            <Link to="/insights" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              Insights
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
          </div>
          <div className="relative group">
            <Link to="/about" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              About
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
          </div>
        </nav>        <div className="hidden lg:flex items-center space-x-4">
          <button className="p-1" aria-label="Search">
            <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 xl:w-5 xl:h-5" />
          </button>
          <div className="flex items-center">
            <img src="/images/img_group_1171275967.svg" alt="Call" className="w-7 h-7 xl:w-8 xl:h-8" />
            <div className="ml-2">
              <p className="text-xs font-bold text-blue-500">Call 24/7</p>
              <p className="text-xs font-bold text-blue-800">+977 9802374215</p>
            </div>
          </div>
        </div>        {/* Mobile Controls (Search and Menu) */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button className="p-1" aria-label="Search">
            <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          <button 
            className="p-1 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-blue-800" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>      {/* Mobile Navigation - Full Screen Overlay */}
      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '60px' }} // Adjusted to match smaller header
      >
        <div className="container mx-auto px-4 py-4 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-4">            <Link 
              to="/" 
              className="text-base font-bold text-blue-500 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/industries" 
              className="text-base font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 pb-2 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-5 h-5" />
            </Link>            <Link 
              to="/services" 
              className="text-base font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 pb-2 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-5 h-5" />
            </Link>
            <Link 
              to="/teams" 
              className="text-base font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
            <Link 
              to="/calculations" 
              className="text-base font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 pb-2 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Calculations
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-5 h-5" />
            </Link>            <Link 
              to="/insights" 
              className="text-base font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 pb-2 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="text-base font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 pb-2 flex justify-between items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              About
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-5 h-5" />
            </Link>
            
            {/* Call Info */}
            <div className="flex items-center pt-3 mt-3 border-t border-gray-200">
              <img src="/images/img_group_1171275967.svg" alt="Call" className="w-8 h-8" />
              <div className="ml-2">
                <p className="text-xs font-bold text-blue-500">Call 24/7</p>
                <p className="text-xs font-bold text-blue-800">+977 9802374215</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;