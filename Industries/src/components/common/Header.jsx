import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

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
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary-dark-blue h-[71px] flex items-center justify-between px-[110px] relative">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img src="/images/img_messagelight.svg" alt="Email icon" className="w-6 h-6 mr-2" />
            <span className="text-white font-bold text-sm">Info@example.com</span>
          </div>
          
          <div className="flex items-center">
            <img src="/images/img_vector.svg" alt="Phone icon" className="w-3.5 h-3 mr-2" />
            <span className="text-white font-bold text-sm">+977 9802374215</span>
          </div>
          
          <div className="flex items-center">
            <img src="/images/img_clock.svg" alt="Clock icon" className="w-6 h-6 mr-2" />
            <span className="text-white font-bold text-sm">Sun-Fri(08AM-10PM)</span>
          </div>
        </div>
        
        <div className="absolute right-0 top-0 h-full">
          <div className="bg-primary-bright-blue h-full rounded-l-[35px] w-[587px] flex items-center justify-end pr-[110px]">
            <div className="flex items-center space-x-8">
              <div className="flex items-center cursor-pointer relative" onClick={toggleLanguageDropdown}>
                <img src="/images/img_globe.svg" alt="Globe icon" className="w-5.5 h-5.5 mr-1" />
                <span className="text-white font-bold text-base">Language</span>
                <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown arrow" className="w-6 h-6 ml-1" />
                
                {showLanguageDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md py-2 z-10">
                    <div 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectLanguage('English')}
                    >
                      English
                    </div>
                    <div 
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => selectLanguage('Nepali')}
                    >
                      Nepali
                    </div>
                  </div>
                )}
              </div>
              
              <div className="flex items-center">
                <span className="text-white font-bold text-base">Follow Us:</span>
                <div className="flex items-center ml-4 space-x-3">
                  <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-primary-light-blue text-sm">in</span>
                  </div>
                  <img src="/images/img_image_1.png" alt="Social media" className="w-6 h-6 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="flex items-center justify-between px-[110px] py-4">
        <Link to="/">
          <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="w-[180px] h-[180px]" />
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link to="/" className="text-primary-blue font-bold text-lg flex items-center">
            Home
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          
          <Link to="/industries" className="text-primary-light-blue font-bold text-lg flex items-center">
            Industries
            <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          
          <Link to="/services" className="text-primary-blue font-bold text-lg flex items-center">
            Services
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          
          <Link to="/teams" className="text-primary-blue font-bold text-lg">
            Teams
          </Link>
          
          <Link to="/calculations" className="text-primary-blue font-bold text-lg flex items-center">
            Calculations
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          
          <Link to="/insights" className="text-primary-blue font-bold text-lg flex items-center">
            Insights
            <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
          </Link>
          
          <Link to="/about" className="text-primary-blue font-bold text-lg">
            About
          </Link>
          
          <button className="focus:outline-none">
            <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
          </button>
        </nav>
        
        <div className="flex items-center">
          <Button 
            className="bg-primary-bright-blue text-white font-semibold text-lg rounded-md px-4 py-1.5 flex items-center"
          >
            Let's Talk
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
          </Button>
          
          <button className="ml-4 flex flex-col items-end space-y-1">
            <div className="w-9 h-0.5 bg-black"></div>
            <div className="w-6.5 h-0.5 bg-black"></div>
            <div className="w-4.5 h-0.5 bg-black"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;