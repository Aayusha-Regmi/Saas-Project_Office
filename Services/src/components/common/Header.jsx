import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0A1E43] text-white py-5">
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
            <div className="flex items-center">
              <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-1" />
              <span className="text-base font-bold mr-1">Language</span>
              <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6" />
            </div>
            
            <div className="flex items-center">
              <span className="text-base font-bold mr-2">Follow Us:</span>
              <div className="flex space-x-3">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                <img src="/images/img_image_1.png" alt="Instagram" className="w-6 h-6 rounded" />
                <div className="w-6 h-6 flex items-center justify-center text-[#22A8FF]">
                  <span className="text-sm font-normal">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center text-lg font-bold text-[#071E45]">
              Home
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/industries" className="flex items-center text-lg font-bold text-[#071E45]">
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/services" className="flex items-center text-lg font-bold text-[#22A8FF]">
              Services
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/teams" className="text-lg font-bold text-[#071E45]">
              Teams
            </Link>
            
            <Link to="/calculations" className="flex items-center text-lg font-bold text-[#071E45]">
              Calculations
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/insights" className="flex items-center text-lg font-bold text-[#071E45]">
              Insights
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/about" className="text-lg font-bold text-[#071E45]">
              About
            </Link>
            
            <button className="ml-4">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button>
            
            <Button className="ml-2 rounded-md">
              Let's Talk
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
            </Button>
          </nav>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2">
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-5 h-0.5 bg-black mb-1"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-lg font-bold text-[#071E45]">Home</Link>
              <Link to="/industries" className="text-lg font-bold text-[#071E45]">Industries</Link>
              <Link to="/services" className="text-lg font-bold text-[#22A8FF]">Services</Link>
              <Link to="/teams" className="text-lg font-bold text-[#071E45]">Teams</Link>
              <Link to="/calculations" className="text-lg font-bold text-[#071E45]">Calculations</Link>
              <Link to="/insights" className="text-lg font-bold text-[#071E45]">Insights</Link>
              <Link to="/about" className="text-lg font-bold text-[#071E45]">About</Link>
              <Button className="w-full justify-center rounded-md">
                Let's Talk
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;