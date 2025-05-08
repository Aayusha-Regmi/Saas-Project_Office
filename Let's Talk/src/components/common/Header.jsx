import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary-blue text-white">
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-6">
            <div className="flex items-center">
              <img src="/images/img_messagelight.svg" alt="Email" className="w-6 h-6 mr-2" />
              <span className="text-sm font-bold">info@example.com</span>
            </div>
            <div className="flex items-center">
              <img src="/images/img_vector.svg" alt="Phone" className="w-3.5 h-3 mr-2" />
              <span className="text-sm font-bold">+977 9802374215</span>
            </div>
            <div className="flex items-center">
              <img src="/images/img_clock.svg" alt="Hours" className="w-6 h-6 mr-2" />
              <span className="text-sm font-bold">Sun-Fri(08AM-10PM)</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button 
                className="flex items-center text-white font-bold"
                onClick={toggleLanguage}
              >
                <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-1" />
                <span className="text-base">Language</span>
                <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
              </button>
              
              {isLanguageOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white text-primary-blue rounded shadow-lg py-2 w-32 z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">English</button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">Nepali</button>
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              <span className="text-base font-bold mr-4">Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-6 h-6 bg-white rounded-full flex items-center justify-center"></a>
                <a href="#" className="w-6 h-6">
                  <img src="/images/img_image_1.png" alt="Instagram" className="w-6 h-6 rounded" />
                </a>
                <a href="#" className="w-6 h-6 bg-white rounded flex items-center justify-center text-primary-lightBlue font-normal">
                  in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto" />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="flex items-center text-lg font-bold text-primary-darkBlue">
            Home
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/industries" className="flex items-center text-lg font-bold text-primary-darkBlue">
            Industries
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/services" className="flex items-center text-lg font-bold text-primary-darkBlue">
            Services
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/teams" className="text-lg font-bold text-primary-darkBlue">
            Teams
          </Link>
          <Link to="/calculations" className="flex items-center text-lg font-bold text-primary-darkBlue">
            Calculations
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/insights" className="flex items-center text-lg font-bold text-primary-darkBlue">
            Insights
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/about" className="text-lg font-bold text-primary-darkBlue">
            About
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="p-2">
            <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
          </button>
          
          <Link to="/contact" className="bg-primary-lightBlue text-white font-semibold py-2 px-4 rounded-md flex items-center">
            Let's Talk
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
          </Link>
          
          <button 
            className="lg:hidden flex flex-col space-y-1"
            onClick={toggleMobileMenu}
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-5 h-0.5 bg-black"></span>
            <span className="w-4 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center justify-between text-lg font-bold text-primary-darkBlue">
              Home
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
            </Link>
            <Link to="/industries" className="flex items-center justify-between text-lg font-bold text-primary-darkBlue">
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
            </Link>
            <Link to="/services" className="flex items-center justify-between text-lg font-bold text-primary-darkBlue">
              Services
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
            </Link>
            <Link to="/teams" className="text-lg font-bold text-primary-darkBlue">
              Teams
            </Link>
            <Link to="/calculations" className="flex items-center justify-between text-lg font-bold text-primary-darkBlue">
              Calculations
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
            </Link>
            <Link to="/insights" className="flex items-center justify-between text-lg font-bold text-primary-darkBlue">
              Insights
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
            </Link>
            <Link to="/about" className="text-lg font-bold text-primary-darkBlue">
              About
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;