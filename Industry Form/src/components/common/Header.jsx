import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [language, setLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  return (
    <header>
      {/* Top bar */}
      <div className="bg-[#0a1e43] text-white py-[23px]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="flex items-center">
              <img src="/images/img_messagelight.svg" alt="Email" className="w-6 h-6 mr-2" />
              <span className="text-[14px] font-bold">Info@example.com</span>
            </div>
            <div className="flex items-center">
              <img src="/images/img_vector.svg" alt="Phone" className="w-[14px] h-[12px] mr-2" />
              <span className="text-[14px] font-bold">+977 9802374215</span>
            </div>
            <div className="flex items-center">
              <img src="/images/img_clock.svg" alt="Hours" className="w-6 h-6 mr-2" />
              <span className="text-[14px] font-bold">Sun-Fri(08AM-10PM)</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                className="flex items-center text-[16px] font-bold"
                onClick={toggleLanguageDropdown}
              >
                <img src="/images/img_globe.svg" alt="Language" className="w-[22px] h-[22px] mr-1" />
                Language
                <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">English</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">Nepali</li>
                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800">Hindi</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="flex items-center">
              <span className="text-[16px] font-bold mr-4">Follow Us:</span>
              <div className="flex space-x-3">
                <div className="w-[25px] h-[25px] bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#22a8ff]">f</span>
                </div>
                <img src="/images/img_image_1.png" alt="Instagram" className="w-[23px] h-[23px] rounded-[5px]" />
                <div className="w-[22px] h-[23px] bg-white rounded-[3px] flex items-center justify-center">
                  <span className="text-[#22a8ff] text-[14px] font-normal">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <img src="/images/img_saas_logo_101_1.png" alt="SAA Logo" className="w-[180px] h-[180px]" />
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link to="/" className="text-[18px] font-bold text-[#071e45] flex items-center">
            Home
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/industries" className="text-[18px] font-bold text-[#22a8ff] flex items-center">
            Industries
            <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/services" className="text-[18px] font-bold text-[#071e45] flex items-center">
            Services
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/teams" className="text-[18px] font-bold text-[#071e45]">
            Teams
          </Link>
          <Link to="/calculations" className="text-[18px] font-bold text-[#071e45] flex items-center">
            Calculations
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/insights" className="text-[18px] font-bold text-[#071e45] flex items-center">
            Insights
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          <Link to="/about" className="text-[18px] font-bold text-[#071e45]">
            About
          </Link>
          <button className="ml-4">
            <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
          </button>
          
          <Link to="/contact" className="bg-[#32b5fd] text-white py-[6px] px-4 rounded-[7px] flex items-center ml-4">
            <span className="text-[18px] font-semibold mr-2">Let's Talk</span>
            <img src="/images/img_vector_13x13.svg" alt="Arrow" className="w-[13px] h-[13px]" />
          </Link>
          
          <button className="flex flex-col space-y-[11px] ml-4">
            <div className="w-[36px] h-[2px] bg-black"></div>
            <div className="w-[26px] h-[2px] bg-black"></div>
            <div className="w-[18px] h-[2px] bg-black"></div>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;