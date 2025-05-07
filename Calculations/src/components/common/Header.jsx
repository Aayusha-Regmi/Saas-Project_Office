import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  
  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-dark-blue text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-8">
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
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                className="flex items-center text-white"
                onClick={toggleLanguageDropdown}
              >
                <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-1" />
                <span className="text-base font-bold mr-1">Language</span>
                <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-1 bg-white text-gray-800 shadow-md rounded-md py-2 z-10">
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setLanguage('English');
                      setShowLanguageDropdown(false);
                    }}
                  >
                    English
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => {
                      setLanguage('Nepali');
                      setShowLanguageDropdown(false);
                    }}
                  >
                    Nepali
                  </button>
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              <span className="text-base font-bold mr-4">Follow Us:</span>
              <div className="flex space-x-3">
                <a href="#" className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="w-6 h-6">
                  <img src="/images/img_image_1.png" alt="Instagram" className="w-full h-full rounded" />
                </a>
                <a href="#" className="bg-white rounded p-0.5 flex items-center justify-center">
                  <span className="text-primary-light-blue text-sm">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="py-4 bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto" />
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-lg font-bold text-primary-blue flex items-center">
              Home
              <img src="/images/img_expanddown.svg" alt="" className="ml-1 w-6 h-6" />
            </Link>
            <Link to="/industries" className="text-lg font-bold text-primary-blue flex items-center">
              Industries
              <img src="/images/img_expanddown.svg" alt="" className="ml-1 w-6 h-6" />
            </Link>
            <Link to="/services" className="text-lg font-bold text-primary-blue flex items-center">
              Services
              <img src="/images/img_expanddown.svg" alt="" className="ml-1 w-6 h-6" />
            </Link>
            <Link to="/teams" className="text-lg font-bold text-primary-blue">
              Teams
            </Link>
            <Link to="/calculations" className="text-lg font-bold text-primary-light-blue flex items-center">
              Calculations
              <img src="/images/img_expanddown_24x24.svg" alt="" className="ml-1 w-6 h-6" />
            </Link>
            <Link to="/insights" className="text-lg font-bold text-primary-blue flex items-center">
              Insights
              <img src="/images/img_expanddown.svg" alt="" className="ml-1 w-6 h-6" />
            </Link>
            <Link to="/about" className="text-lg font-bold text-primary-blue">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button>
            
            <Button 
              variant="primary" className="rounded-md flex items-center"
            >
              Let's Talk
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-1 w-6 h-6" />
            </Button>
            
            <button className="md:hidden">
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-5 h-0.5 bg-black mb-1"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;