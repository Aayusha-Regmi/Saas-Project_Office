import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({
    industries: false,
    services: false,
    calculations: false,
    insights: false,
    about: false
  });
  const [headerHeight, setHeaderHeight] = useState(0);
  const menuRef = useRef(null);
  const headerRef = useRef(null);

  // Toggle mobile dropdown menus
  const toggleMobileDropdown = (key) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

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

  // Measure header height for mobile menu positioning
  useEffect(() => {
    if (headerRef.current) {
      const measureHeaderHeight = () => {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
      };
      
      measureHeaderHeight();
      window.addEventListener('resize', measureHeaderHeight);
      
      return () => {
        window.removeEventListener('resize', measureHeaderHeight);
      };
    }
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
      ref={headerRef}
      className={`sticky top-0 z-50 py-1 sm:py-2 md:py-3 transition-all duration-300 ${
        scrolled 
          ? 'shadow-md bg-white/85 backdrop-blur-md' 
          : 'bg-white/70 backdrop-blur-sm'
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
            {/* Desktop dropdown menu */}
            <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-50 border border-gray-100">
              <div className="py-2">
                <Link to="/industries/banking" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Banking & Finance
                </Link>
                <Link to="/industries/manufacturing" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Manufacturing
                </Link>
                <Link to="/industries/ngo-ingo" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  NGO/INGO
                </Link>
                <Link to="/industries/electronics" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Electronics & Communication Industry
                </Link>
                <Link to="/industries/trading" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Trading & Retail
                </Link>
                <Link to="/industries/travel" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Travel, Tourism & Hospitality
                </Link>
                <Link to="/industries/hospital" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Hospital and Education Industry
                </Link>
                <Link to="/industries/hydropower" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Hydropower & Construction
                </Link>
              </div>
            </div>
          </div>          <div className="relative group">
            <Link to="/services" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              Services
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop dropdown menu */}
            <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-50 border border-gray-100">
              <div className="py-2">
                <Link to="/caseStudy/personal-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Personal Tax
                </Link>
                <Link to="/caseStudy/tax-audit-support" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Tax Audit Support
                </Link>
                <Link to="/caseStudy/international-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  International Tax
                </Link>
                <Link to="/caseStudy/tax-advisory" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Tax Advisory
                </Link>
                <Link to="/caseStudy/investment-advisor" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Investment Advisor
                </Link>
                <Link to="/caseStudy/insurance-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Insurance Tax
                </Link>
              </div>
            </div>
          </div>
          <Link to="/teams" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 transition-colors">
            Teams
          </Link>          <div className="relative group">
            <Link to="/calculations" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              Calculations
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop dropdown menu */}
            <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-50 border border-gray-100">
              <div className="py-2">
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Tax Calculator
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  ROI Calculator
                </Link>
                <Link to="#" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Pricing Models
                </Link>
              </div>
            </div>
          </div>          <div className="relative group">
            <Link to="/insights" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              Insights
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop dropdown menu */}
            <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-50 border border-gray-100">
              <div className="py-2">
                <Link to="/insights/blog" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Blog
                </Link>
                <Link to="/insights/case-studies" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Case Studies
                </Link>
                <Link to="/insights/resources" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Resources
                </Link>
                <Link to="/insights/events" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Events
                </Link>
              </div>
            </div>
          </div>          <div className="relative group">
            <Link to="/about" className="text-sm xl:text-base font-bold text-blue-800 hover:text-blue-600 flex items-center transition-colors">
              About
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-4 h-4 xl:w-5 xl:h-5" />
            </Link>
            {/* Desktop dropdown menu */}
            <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md overflow-hidden transform opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-50 border border-gray-100">
              <div className="py-2">
                <Link to="/about/company" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Our Company
                </Link>
                <Link to="/about/team" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Leadership Team
                </Link>
                <Link to="/about/careers" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
                  Careers
                </Link>
                <Link to="/about/contact" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600">
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
        </div>        {/* Mobile Controls (Search and Menu) */}
        <div className="flex items-center space-x-2 lg:hidden">
          {/* <button className="p-1" aria-label="Search">
            <img src="/images/img_search.svg" alt="Search" className="w-4 h-4 sm:w-5 sm:h-5" />
          </button> */}
          
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
      </div>      {/* Mobile Navigation - Full Screen Overlay */}      <div 
        ref={menuRef}
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: `${headerHeight}px` }}
      >
        <div className="container mx-auto px-4 py-4 h-full overflow-y-auto">
          <nav className="flex flex-col space-y-4">            <Link 
              to="/" 
              className="text-base font-bold text-blue-500 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
              {/* Mobile Industries Dropdown */}
            <div className="border-b border-gray-100 pb-2">              <div 
                className="flex justify-between items-center py-2 px-3 cursor-pointer hover:bg-blue-50/50 rounded-md transition-colors duration-150 ease-in-out"
                onClick={() => toggleMobileDropdown('industries')}
              >
                <span className="text-base font-bold text-blue-800">Industries</span>
                <img 
                  src="/images/img_expanddown.svg" 
                  alt="Expand" 
                  className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.industries ? 'rotate-180' : ''}`} 
                />
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.industries ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  to="/industries/banking" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Banking & Finance
                </Link>
                <Link 
                  to="/industries/manufacturing" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Manufacturing
                </Link>
                <Link 
                  to="/industries/ngo-ingo" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  NGO/INGO
                </Link>
                <Link 
                  to="/industries/electronics" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Electronics & Communication Industry
                </Link>
                <Link 
                  to="/industries/trading" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Trading & Retail
                </Link>
                <Link 
                  to="/industries/travel" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Travel, Tourism & Hospitality
                </Link>
                <Link 
                  to="/industries/hospital" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hospital and Education Industry
                </Link>
                <Link 
                  to="/industries/hydropower" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Hydropower & Construction
                </Link>
              </div>
            </div>
            
            {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-100 pb-2">              <div 
                className="flex justify-between items-center py-2 px-3 cursor-pointer hover:bg-blue-50/50 rounded-md transition-colors duration-150 ease-in-out"
                onClick={() => toggleMobileDropdown('services')}
              >
                <span className="text-base font-bold text-blue-800">Services</span>
                <img 
                  src="/images/img_expanddown_24x24.svg" 
                  alt="Expand" 
                  className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.services ? 'rotate-180' : ''}`} 
                />
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.services ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  to="/caseStudy/personal-tax" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Personal Tax
                </Link>
                <Link 
                  to="/caseStudy/tax-audit-support" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Audit Support
                </Link>
                <Link 
                  to="/caseStudy/international-tax" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  International Tax
                </Link>
                <Link 
                  to="/caseStudy/tax-advisory" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Advisory
                </Link>
                <Link 
                  to="/caseStudy/investment-advisor" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Investment Advisor
                </Link>
                <Link 
                  to="/caseStudy/insurance-tax" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Insurance Tax
                </Link>
              </div>
            </div>
            
            <Link 
              to="/teams" 
              className="text-base font-bold text-blue-800 hover:text-blue-600 border-b border-gray-100 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Teams
            </Link>
            
            {/* Mobile Calculations Dropdown */}
            <div className="border-b border-gray-100 pb-2">              <div 
                className="flex justify-between items-center py-2 px-3 cursor-pointer hover:bg-blue-50/50 rounded-md transition-colors duration-150 ease-in-out"
                onClick={() => toggleMobileDropdown('calculations')}
              >
                <span className="text-base font-bold text-blue-800">Calculations</span>
                <img 
                  src="/images/img_expanddown_24x24.svg" 
                  alt="Expand" 
                  className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.calculations ? 'rotate-180' : ''}`} 
                />
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.calculations ? 'max-h-36 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  to="#" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tax Calculator
                </Link>
                <Link 
                  to="#" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ROI Calculator
                </Link>
                <Link 
                  to="#" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing Models
                </Link>
              </div>
            </div>
            
            {/* Mobile Insights Dropdown */}
            <div className="border-b border-gray-100 pb-2">              <div 
                className="flex justify-between items-center py-2 px-3 cursor-pointer hover:bg-blue-50/50 rounded-md transition-colors duration-150 ease-in-out"
                onClick={() => toggleMobileDropdown('insights')}
              >
                <span className="text-base font-bold text-blue-800">Insights</span>
                <img 
                  src="/images/img_expanddown_24x24.svg" 
                  alt="Expand" 
                  className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.insights ? 'rotate-180' : ''}`} 
                />
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.insights ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  to="/insights/blog" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
                <Link 
                  to="/insights/case-studies" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link 
                  to="/insights/resources" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resources
                </Link>
                <Link 
                  to="/insights/events" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              </div>
            </div>
            
            {/* Mobile About Dropdown */}
            <div className="border-b border-gray-100 pb-2">
              <div 
                className="flex justify-between items-center"
                onClick={() => toggleMobileDropdown('about')}
              >
                <span className="text-base font-bold text-blue-800">About</span>
                <img 
                  src="/images/img_expanddown_24x24.svg" 
                  alt="Expand" 
                  className={`w-5 h-5 transition-transform duration-300 ${mobileDropdowns.about ? 'rotate-180' : ''}`} 
                />
              </div>
              <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                mobileDropdowns.about ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <Link 
                  to="/about/company" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Company
                </Link>
                <Link 
                  to="/about/team" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Leadership Team
                </Link>
                <Link 
                  to="/about/careers" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link 
                  to="/about/contact" 
                  className="block py-2 text-sm text-blue-800 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
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