import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  // Detect if we're on the home page with hero section
  const [isOnHeroPage, setIsOnHeroPage] = useState(false);
  // Add state for mobile dropdowns
  const [mobileDropdowns, setMobileDropdowns] = useState({
    industries: false,
    services: false,
    calculations: false,
    insights: false,
    about: false
  });

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
  }, [isMenuOpen]);  // Handle responsive menu behavior
  useEffect(() => {
    const handleResize = () => {
      // Close menu when switching to desktop
      if (window.innerWidth >= 1024) { // lg breakpoint
        setIsMenuOpen(false);
        // Reset any open mobile dropdowns when screen size changes
        setMobileDropdowns({
          industries: false,
          services: false,
          calculations: false,
          insights: false,
          about: false
        });
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    // Detect if we're on the home page with hero section
  useEffect(() => {
    const checkHeroPage = () => {
      setIsOnHeroPage(document.body.classList.contains('has-hero-section'));
    };
    
    // Check initially
    checkHeroPage();
    
    // Fallback for browsers that don't support MutationObserver
    if (typeof MutationObserver === 'undefined') {
      // Use a timer as fallback
      const interval = setInterval(checkHeroPage, 500);
      return () => clearInterval(interval);
    }
    
    // Set up a mutation observer to detect when body classes change
    const observer = new MutationObserver(checkHeroPage);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Add function to toggle mobile dropdowns
  const toggleMobileDropdown = (name) => {
    setMobileDropdowns(prev => {
      // Create a new state object with all dropdowns closed
      const newState = {
        industries: false,
        services: false,
        calculations: false,
        insights: false,
        about: false
      };
      // Toggle only the selected dropdown
      newState[name] = !prev[name];
      return newState;
    });
  };
  
  return (    <header 
      className={`sticky top-0 z-50 py-1 sm:py-2 md:py-3 transition-all duration-300 ${
        isOnHeroPage ? '' : 'bg-white'
      } ${
        scrolled ? (isOnHeroPage ? 'scrolled' : 'shadow-md') : ''
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center" aria-label="Go to homepage">
            <img 
              src="/images/img_saas_logo_101_1.png" 
              alt="SAAS Logo" 
              className="h-[50px] sm:h-[60px] md:h-[70px] lg:h-[90px] w-auto transition-all duration-300" 
            />
          </Link>
        </div>{/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2 xl:space-x-5">
          <Link to="/" className="text-sm xl:text-base font-bold text-blue-500 hover:text-blue-600 transition-colors">
            Home
          </Link>          <div className="relative group nav-group">
            <Link to="/industries" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors cursor-pointer">
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop Industries Dropdown */}
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 nav-dropdown">
              <div className="py-1">
                <Link to="/industries/banking" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Banking & Financial Service
                </Link>
                <Link to="/industries/manufacturing" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Manufacturing
                </Link>
                <Link to="/industries/ngo-ingo" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  NGO/INGO
                </Link>
                <Link to="/industries/electronics" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Electronics & Communication Industry
                </Link>
                <Link to="/industries/trading" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Trading & Retail
                </Link>
                <Link to="/industries/travel" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Travel, Tourism & Hotel
                </Link>
                <Link to="/industries/hospital" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Hospital and Education Industry
                </Link>
                <Link to="/industries/hydropower" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Hydropower & Construction
                </Link>
              </div>
            </div>
          </div>            <div className="relative group nav-group">
            <Link to="/services" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors cursor-pointer">
              Services
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop Services Dropdown */}
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 nav-dropdown">
              <div className="py-1">
                <Link to="/caseStudy/personal-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Personal Tax
                </Link>
                <Link to="/caseStudy/tax-audit-support" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Tax Audit Support
                </Link>
                <Link to="/caseStudy/international-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  International Tax
                </Link>
                <Link to="/caseStudy/tax-advisory" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Tax Advisory
                </Link>
                <Link to="/caseStudy/investment-advisor" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Investment Advisor
                </Link>
                <Link to="/caseStudy/insurance-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Insurance Tax
                </Link>
              </div>
            </div>
          </div>
          <Link to="/teams" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 transition-colors">
            Teams
          </Link>          <div className="relative group nav-group">
            <Link to="/calculations" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors cursor-pointer">
              Calculations
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop Calculations Dropdown */}
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 nav-dropdown">
              <div className="py-1">
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Tax Calculator
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  ROI Calculator
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Pricing Models
                </Link>
              </div>
            </div>
          </div>            <div className="relative group nav-group">
            <Link to="/insights" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors cursor-pointer">
              Insights
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop Insights Dropdown */}
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 nav-dropdown">
              <div className="py-1">
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Blog
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Case Studies
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Resources
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Events
                </Link>
              </div>
            </div>
          </div>            <div className="relative group nav-group">
            <Link to="/about" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors cursor-pointer">
              About
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop About Dropdown */}
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50 nav-dropdown">
              <div className="py-1">
                <Link to="/about/company" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Our Company
                </Link>
                <Link to="/about/team" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Leadership Team
                </Link>
                <Link to="/about/careers" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Careers
                </Link>
                <Link to="/about/contact" className="block px-4 py-2 text-sm text-blue-800 hover:bg-gray-100">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          {/* <button className="p-1" aria-label="Search">
            <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 xl:w-5 xl:h-5" />
          </button> */}
          <div className="flex items-center">
            <img src="/images/img_group_1171275967.svg" alt="Call" className="w-7 h-7 xl:w-8 xl:h-8" />
            <div className="ml-2">
              <p className="text-xs font-bold text-blue-500">Call 24/7</p>
              <p className="text-xs font-bold text-blue-800">+977 9802374215</p>
            </div>
          </div>
        </div>        {/* Mobile Controls with Toggle Button */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Call button on mobile - make it compact */}
          <a 
            href="tel:+9779802374215" 
            className="flex items-center justify-center bg-blue-50 rounded-full p-2"
            aria-label="Call us"
          >
            <img 
              src="/images/img_group_1171275967.svg" 
              alt="Call" 
              className="w-6 h-6" 
            />
          </a>
          
          <button 
            className="p-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 focus:outline-none mobile-toggle-button touch-manipulation" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-blue-800" 
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
      </div>      {/* Mobile Navigation - Full Screen Overlay */}      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 lg:hidden mobile-menu ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${isOnHeroPage ? 'home-mobile-menu' : ''}`}
        style={{ 
          top: scrolled ? '57px' : '65px', 
          overscrollBehavior: 'contain',
          touchAction: 'pan-y', 
          boxShadow: isMenuOpen ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none'
        }}
      ><div className="container mx-auto px-4 sm:px-6 py-2 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-2 sticky top-0 bg-white z-10 pb-2">
            <h2 className="text-xl font-bold text-blue-800">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
              className="p-2 rounded-full hover:bg-gray-100 focus:outline-none touch-manipulation"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-blue-800" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>          <nav className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="text-lg font-bold text-blue-500 hover:text-blue-600 border-b border-gray-100 py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
              {/* Mobile Industries Dropdown */}
            <div className="border-b border-gray-100 pb-2">              <div 
                className="flex justify-between items-center py-3 cursor-pointer hover:bg-blue-50/50 active:bg-blue-50/70 rounded-md px-3 transition-colors"
              >
                <Link 
                  to="/industries" 
                  className="text-lg font-bold text-blue-800 flex-grow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Industries
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown('industries');
                  }}
                  aria-label="Toggle Industries dropdown"
                  className="focus:outline-none p-2 -mr-2 touch-manipulation"
                >
                  <img 
                    src="/images/img_expanddown.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.industries ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.industries ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>                  <Link 
                  to="/industries/banking" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Banking & Financial Service
                </Link>
                <Link 
                  to="/industries/manufacturing" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Manufacturing
                </Link>
                <Link 
                  to="/industries/ngo-ingo" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NGO/INGO
                </Link>
                <Link 
                  to="/industries/electronics" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Electronics & Communication Industry
                </Link>
                <Link 
                  to="/industries/trading" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trading & Retail
                </Link>
                <Link 
                  to="/industries/travel" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Travel, Tourism & Hotel
                </Link>
                <Link 
                  to="/industries/hospital" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hospital and Education Industry
                </Link>
                <Link 
                  to="/industries/hydropower" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hydropower & Construction
                </Link>
              </div>
            </div>
              {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <div 
                className="flex justify-between items-center py-3 cursor-pointer hover:bg-blue-50/50 active:bg-blue-50/70 rounded-md px-3 transition-colors"
              >
                <Link 
                  to="/services" 
                  className="text-lg font-bold text-blue-800 flex-grow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown('services');
                  }}
                  aria-label="Toggle Services dropdown"
                  className="focus:outline-none p-2 -mr-2 touch-manipulation"
                >
                  <img 
                    src="/images/img_expanddown_24x24.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.services ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.services ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>                
                <Link 
                  to="/caseStudy/personal-tax" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Personal Tax
                </Link>
                <Link 
                  to="/caseStudy/tax-audit-support" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Audit Support
                </Link>
                <Link 
                  to="/caseStudy/international-tax" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  International Tax
                </Link>
                <Link 
                  to="/caseStudy/tax-advisory" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Advisory
                </Link>
                <Link 
                  to="/caseStudy/investment-advisor" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investment Advisor
                </Link>
                <Link 
                  to="/caseStudy/insurance-tax" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insurance Tax
                </Link>
              </div>
            </div>
            
            <Link 
              to="/teams" 
              className="text-lg font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 py-3 px-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
              {/* Mobile Calculations Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <div 
                className="flex justify-between items-center py-3 cursor-pointer hover:bg-blue-50/50 active:bg-blue-50/70 rounded-md px-3 transition-colors"
              >
                <Link 
                  to="/calculations" 
                  className="text-lg font-bold text-blue-800 flex-grow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Calculations
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown('calculations');
                  }}
                  aria-label="Toggle Calculations dropdown"
                  className="focus:outline-none p-2 -mr-2 touch-manipulation"
                >
                  <img 
                    src="/images/img_expanddown_24x24.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.calculations ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.calculations ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>                
                <Link 
                  to="#" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Calculator
                </Link>
                <Link 
                  to="#" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ROI Calculator
                </Link>
                <Link 
                  to="#" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing Models
                </Link>
              </div>
            </div>
              {/* Mobile Insights Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <div 
                className="flex justify-between items-center py-3 cursor-pointer hover:bg-blue-50/50 active:bg-blue-50/70 rounded-md px-3 transition-colors"
              >
                <Link 
                  to="/insights" 
                  className="text-lg font-bold text-blue-800 flex-grow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insights
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown('insights');
                  }}
                  aria-label="Toggle Insights dropdown"
                  className="focus:outline-none p-2 -mr-2 touch-manipulation"
                >
                  <img 
                    src="/images/img_expanddown_24x24.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.insights ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.insights ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>                
                <Link 
                  to="#" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="#" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="#" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link 
                  to="#" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              </div>
            </div>
              {/* Mobile About Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <div 
                className="flex justify-between items-center py-3 cursor-pointer hover:bg-blue-50/50 active:bg-blue-50/70 rounded-md px-3 transition-colors"
              >
                <Link 
                  to="/about" 
                  className="text-lg font-bold text-blue-800 flex-grow"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMobileDropdown('about');
                  }}
                  aria-label="Toggle About dropdown"
                  className="focus:outline-none p-2 -mr-2 touch-manipulation"
                >
                  <img 
                    src="/images/img_expanddown_24x24.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.about ? 'rotate-180' : ''}`} 
                  />
                </button>
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.about ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}>                
                <Link 
                  to="/about/company" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Company
                </Link>
                <Link 
                  to="/about/team" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leadership Team
                </Link>
                <Link 
                  to="/about/careers" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/about/contact" 
                  className="block py-3 text-base text-blue-800 hover:text-blue-600 mobile-menu-item px-3 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Call Info */}
            <div className="flex items-center pt-4 mt-2 border-t border-gray-200">
              <img src="/images/img_group_1171275967.svg" alt="Call" className="w-8 h-8" />
              <div className="ml-3">
                <p className="text-sm font-bold text-blue-500">Call 24/7</p>
                <a href="tel:+9779802374215" className="text-sm font-bold text-blue-800 hover:underline">+977 9802374215</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;