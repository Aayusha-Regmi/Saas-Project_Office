import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';     

const PrimaryHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  // Track which dropdown is currently open in mobile view
  const [mobileDropdowns, setMobileDropdowns] = useState({
    industries: false,
    services: false,
    calculations: false,
    insights: false
  });
  
  // Save scroll position when navigating away
  useEffect(() => {
    window.addEventListener('scroll', saveScrollPosition);
    return () => window.removeEventListener('scroll', saveScrollPosition);
  }, []);

  const saveScrollPosition = () => {
    setScrollPosition(window.scrollY);
  };

  // Restore scroll position when returning to a page
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [location.pathname]);

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleMobileDropdown = (menu) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };  return (
    <header className="w-full fixed top-10 left-0 z-40">
      {/* Main navigation with full-width glass effect */}
      <div className="w-full bg-white/60 backdrop-blur-md py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="block"
          >
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto" />
          </Link>
            <nav className="hidden md:flex items-center space-x-6">
            {/* Home (no dropdown) */}
            <Link
              to="/"
              onClick={(e) => {
                if (window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}              className={`font-bold transition-all duration-300 hover:text-[#22a8ff] ${isActive('/') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Home
            </Link>
            
            {/* Industries Dropdown */}
            <div className="relative group">
              <Link
                to="/industries"
                onClick={(e) => {
                  if (window.location.pathname === '/industries') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`font-bold flex items-center ${isActive('/industries') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Industries
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-50">
                <div className="py-2">
                <Link to="/industries/banking" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Banking & Financial Service</Link>
                  <Link to="/industries/manufacturing" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Manufacturing</Link>
                  <Link to="/industries/ngo-ingo" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">NGO/INGO</Link>
                  <Link to="/industries/electronics" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Electronics & Communication Industry</Link>
                  <Link to="/industries/trading" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Trading & Retail</Link>
                  <Link to="/industries/travel" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Travel, Tourism & Hotel</Link>
                  <Link to="/industries/hospital" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Hospital and Education Industry</Link>
                  <Link to="/industries/hydropower" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Hydropower & Construction</Link>
                </div>
              </div>
            </div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                to="/services"
                onClick={(e) => {
                  if (window.location.pathname === '/services') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`font-bold flex items-center ${isActive('/services') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Services
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-50">
                <div className="py-2">
                  <Link to="/caseStudy/personal-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Personal Tax</Link>
                  <Link to="/caseStudy/tax-audit-support" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Tax Audit Support</Link>
                  <Link to="/caseStudy/international-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">International Tax</Link>
                  <Link to="/caseStudy/tax-advisory" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Tax Advisory</Link>
                  <Link to="/caseStudy/investment-advisor" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Investment Advisor</Link>
                  <Link to="/caseStudy/insurance-tax" className="block px-4 py-2 text-sm text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">Insurance Tax</Link>
                </div>
              </div>
            </div>
              {/* Teams (no dropdown) */}
            <Link
              to="/teams"
              onClick={(e) => {
                if (window.location.pathname === '/teams') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}  className={`font-bold transition-all duration-300 hover:text-[#22a8ff] ${isActive('/teams') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Teams
            </Link>
            
            {/* Calculations Dropdown */}
            <div className="relative group">
              <Link
                to="/calculations"
                onClick={(e) => {
                  if (window.location.pathname === '/calculations') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`font-bold flex items-center ${isActive('/calculations') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Calculations
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-50">
                <div className="py-2">
                  <Link to="#" className="block px-4 py-2 text-sm text-[#071e45] hover:bg-blue-50 hover:text-[#22a8ff] transition-colors">Tax Calculator</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-[#071e45] hover:bg-blue-50 hover:text-[#22a8ff] transition-colors">ROI Calculator</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-[#071e45] hover:bg-blue-50 hover:text-[#22a8ff] transition-colors">Pricing Models</Link>
                </div>
              </div>
            </div>
            
            {/* Insights Dropdown */}
            <div className="relative group">
              <Link
                to="/insights"
                onClick={(e) => {
                  if (window.location.pathname === '/insights') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`font-bold flex items-center ${isActive('/insights') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Insights
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              {/* Dropdown menu */}
              <div className="absolute top-full left-0 w-60 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 z-50">
                <div className="py-2">
                  <Link to="#" className="block px-4 py-2 text-sm text-[#071e45] hover:bg-blue-50 hover:text-[#22a8ff] transition-colors">Blog</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-[#071e45] hover:bg-blue-50 hover:text-[#22a8ff] transition-colors">Case Studies</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-[#071e45] hover:bg-blue-50 hover:text-[#22a8ff] transition-colors">Resources</Link>
                  <Link to="#" className="block px-4 py-2 text-sm text-[#071e45] hover:bg-blue-50 hover:text-[#22a8ff] transition-colors">Events</Link>
                </div>
              </div>
            </div>
            
            {/* About (no dropdown) */}
            <Link
              to="/about"
              onClick={(e) => {
                if (window.location.pathname === '/about') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}              className={`font-bold transition-all duration-300 hover:text-[#22a8ff] ${isActive('/about') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              About
            </Link>
            {/* <button className="ml-4">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button> */}
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="primary" 
              className="hidden md:flex"
              onClick={handleContactClick}
            >
              Let's Talk
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
            </Button>
            
            <button 
              className="md:hidden flex flex-col space-y-1"
              onClick={toggleMenu}
            >
              <span className="w-6 h-0.5 bg-black"></span>
              <span className="w-5 h-0.5 bg-black"></span>
              <span className="w-4 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>      </div>        {/* Mobile menu with full-width glass effect */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white/80 backdrop-blur-md shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">              {/* Home (no dropdown) */}
              <Link
                to="/"
                className={`font-bold border-b border-gray-100 pb-2 block ${isActive('/') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Industries Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown('industries')}
                >
                  <span className={`font-bold ${isActive('/industries') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Industries</span>
                  <img 
                    src="/images/img_expanddown.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.industries ? 'rotate-180' : ''}`} 
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
                          <div className="border-b border-gray-100 pb-2">
                            <div 
                              className="flex justify-between items-center"
                              onClick={() => toggleMobileDropdown('services')}
                            >
                             <span className={`font-bold ${isActive('/services') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Services</span>
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
                {/* Teams (no dropdown) */}
              <Link 
                to="/teams" 
                className={`font-bold border-b border-gray-100 pb-2 ${isActive('/teams') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Teams
              </Link>
              
              {/* Calculations Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown('calculations')}
                >
                  <span className={`font-bold ${isActive('/calculations') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Calculations</span>
                  <img 
                    src="/images/img_expanddown.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.calculations ? 'rotate-180' : ''}`} 
                  />
                </div>
                <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                  mobileDropdowns.calculations ? 'max-h-36 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link 
                    to="#" 
                    className="block py-2 text-sm text-[#071e45] hover:text-[#22a8ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Tax Calculator
                  </Link>
                  <Link 
                    to="#" 
                    className="block py-2 text-sm text-[#071e45] hover:text-[#22a8ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ROI Calculator
                  </Link>
                  <Link 
                    to="#" 
                    className="block py-2 text-sm text-[#071e45] hover:text-[#22a8ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing Models
                  </Link>
                </div>
              </div>
              
              {/* Insights Dropdown */}
              <div className="border-b border-gray-100 pb-2">
                <div 
                  className="flex justify-between items-center"
                  onClick={() => toggleMobileDropdown('insights')}
                >
                  <span className={`font-bold ${isActive('/insights') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Insights</span>
                  <img 
                    src="/images/img_expanddown.svg" 
                    alt="Expand" 
                    className={`w-6 h-6 transition-transform duration-300 ${mobileDropdowns.insights ? 'rotate-180' : ''}`} 
                  />
                </div>
                <div className={`mt-2 ml-4 overflow-hidden transition-all duration-300 ${
                  mobileDropdowns.insights ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <Link 
                    to="#" 
                    className="block py-2 text-sm text-[#071e45] hover:text-[#22a8ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    to="#" 
                    className="block py-2 text-sm text-[#071e45] hover:text-[#22a8ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="#" 
                    className="block py-2 text-sm text-[#071e45] hover:text-[#22a8ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link 
                    to="#" 
                    className="block py-2 text-sm text-[#071e45] hover:text-[#22a8ff]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Events
                  </Link>
                </div>
              </div>
              
              {/* About (no dropdown) */}
              <Link
                to="/about"
                className={`font-bold border-b border-gray-100 pb-2 ${isActive('/about') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="pt-2">
                <Button variant="primary" className="w-full" onClick={handleContactClick}>
                  Let's Talk
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default PrimaryHeader;