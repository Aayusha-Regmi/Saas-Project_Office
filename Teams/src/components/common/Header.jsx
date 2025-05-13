import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setShowLanguageDropdown(!showLanguageDropdown);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowLanguageDropdown(false);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0a1e43] text-white py-4 relative">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-6">
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
          
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                className="flex items-center text-white"
                onClick={toggleLanguageDropdown}
              >
                <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-2" />
                <span className="font-bold">Language</span>
                <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
              </button>
              
              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 shadow-md rounded-md py-2 z-10">
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => changeLanguage('English')}
                  >
                    English
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => changeLanguage('Nepali')}
                  >
                    Nepali
                  </button>
                </div>
              )}
            </div>
            
            <div>
              <span className="font-bold">Follow Us:</span>
              <div className="flex items-center ml-2 space-x-3 inline-flex">
                <a href="#" className="block">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <span className="text-black">f</span>
                  </div>
                </a>
                <a href="#" className="block">
                  <img src="/images/img_image_1.png" alt="Instagram" className="w-6 h-6 rounded" />
                </a>
                <a href="#" className="block">
                  <div className="text-[#22a8ff] font-normal">
                    in
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blue curved shape */}
        <div className="absolute right-0 top-0 h-full">
          <img src="/images/img_rectangle_42068.svg" alt="Decoration" className="h-full" />
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="block">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-bold text-[#071e45] flex items-center">
              Home
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link to="/industries" className="font-bold text-[#071e45] flex items-center">
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link to="/services" className="font-bold text-[#071e45] flex items-center">
              Services
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link to="/team" className="font-bold text-[#22a8ff]">
              Teams
            </Link>
            <Link to="/calculations" className="font-bold text-[#071e45] flex items-center">
              Calculations
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link to="/insights" className="font-bold text-[#071e45] flex items-center">
              Insights
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link to="/about" className="font-bold text-[#071e45]">
              About
            </Link>
            <button className="ml-4">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="blue" 
              className="hidden md:flex"
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
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="font-bold text-[#071e45] flex items-center justify-between">
                Home
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link to="/industries" className="font-bold text-[#071e45] flex items-center justify-between">
                Industries
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link to="/services" className="font-bold text-[#071e45] flex items-center justify-between">
                Services
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link to="/team" className="font-bold text-[#22a8ff]">
                Teams
              </Link>
              <Link to="/calculations" className="font-bold text-[#071e45] flex items-center justify-between">
                Calculations
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link to="/insights" className="font-bold text-[#071e45] flex items-center justify-between">
                Insights
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link to="/about" className="font-bold text-[#071e45]">
                About
              </Link>
              <div className="pt-2">
                <Button variant="blue" className="w-full">
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

export default Header;