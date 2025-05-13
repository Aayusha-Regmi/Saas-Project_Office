import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PrimaryHeader = () => {
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
        
        </nav>
      </div>
    </header>
  );
};

export default PrimaryHeader;