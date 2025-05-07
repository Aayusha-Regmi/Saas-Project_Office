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
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0a1e43] text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <img src="/images/img_messagelight.svg" alt="Email" className="w-6 h-6 mr-2" />
              <span className="text-sm font-bold">Info@example.com</span>
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
                className="flex items-center text-white"
                onClick={toggleLanguageDropdown}
              >
                <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-1" />
                <span className="text-base font-bold">Language</span>
                <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-1 bg-white text-gray-800 shadow-md rounded-md py-2 z-50">
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
              <span className="text-base font-bold mr-2">Follow Us:</span>
              <div className="flex items-center space-x-2">
                <a href="#" className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#22a8ff] text-xs">in</span>
                </a>
                <a href="#">
                  <img src="/images/img_image_1.png" alt="Social" className="w-6 h-6 rounded" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/img_saas_logo_101_1.png" alt="Logo" className="h-16 w-auto" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Link to="/" className="flex items-center text-lg font-bold text-[#071e45]">
                Home
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            
            <div className="relative group">
              <Link to="/industries" className="flex items-center text-lg font-bold text-[#071e45]">
                Industries
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            
            <div className="relative group">
              <Link to="/services" className="flex items-center text-lg font-bold text-[#071e45]">
                Services
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            
            <Link to="/teams" className="text-lg font-bold text-[#071e45]">
              Teams
            </Link>
            
            <div className="relative group">
              <Link to="/calculations" className="flex items-center text-lg font-bold text-[#071e45]">
                Calculations
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            
            <div className="relative group">
              <Link to="/insights" className="flex items-center text-lg font-bold text-[#071e45]">
                Insights
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            
            <Link to="/about" className="text-lg font-bold text-[#22a8ff]">
              About
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button>
            
            <Button className="flex items-center bg-[#32b5fd] text-white px-4 py-2 rounded-md">
              Let's Talk
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
            </Button>
            
            <button className="md:hidden flex flex-col space-y-1">
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-5 h-0.5 bg-black"></span>
              <span className="block w-4 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;