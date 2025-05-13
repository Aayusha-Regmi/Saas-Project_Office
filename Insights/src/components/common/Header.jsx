import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0a1e43] text-white py-4">
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
              <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-2" />
              <span className="text-base font-bold">Language</span>
              <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
            </div>
            
            <div className="flex items-center">
              <span className="text-base font-bold mr-4">Follow Us:</span>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                <img src="/images/img_image_1.png" alt="Instagram" className="w-6 h-6 rounded" />
                <div className="w-5.5 h-5.5 bg-white rounded flex items-center justify-center">
                  <span className="text-[#22a8ff] text-sm">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <img src="/images/img_saas_logo_101_1.png" alt="SAA Logo" className="h-16 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center">
              <span className={`text-lg font-bold ${isActive('/') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Home</span>
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/industries" className="flex items-center">
              <span className={`text-lg font-bold ${isActive('/industries') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Industries</span>
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/services" className="flex items-center">
              <span className={`text-lg font-bold ${isActive('/services') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Services</span>
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/teams" className="flex items-center">
              <span className={`text-lg font-bold ${isActive('/teams') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Teams</span>
            </Link>
            
            <Link to="/calculations" className="flex items-center">
              <span className={`text-lg font-bold ${isActive('/calculations') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Calculations</span>
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/insights" className="flex items-center">
              <span className={`text-lg font-bold ${isActive('/insights') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>Insights</span>
              <img src={isActive('/insights') ? "/images/img_expanddown_24x24.svg" : "/images/img_expanddown.svg"} alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            
            <Link to="/about" className="flex items-center">
              <span className={`text-lg font-bold ${isActive('/about') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}>About</span>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="p-1">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button>
            
            <Button 
              variant="primary" 
              className="rounded-md"
              onClick={() => console.log('Let\'s Talk clicked')}
            >
              Let's Talk
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
            </Button>
            
            <button 
              className="md:hidden flex flex-col space-y-1"
              onClick={toggleMenu}
            >
              <div className="w-9 h-0.5 bg-black"></div>
              <div className="w-6.5 h-0.5 bg-black"></div>
              <div className="w-4.5 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-lg font-bold text-[#071e45]">Home</Link>
              <Link to="/industries" className="text-lg font-bold text-[#071e45]">Industries</Link>
              <Link to="/services" className="text-lg font-bold text-[#071e45]">Services</Link>
              <Link to="/teams" className="text-lg font-bold text-[#071e45]">Teams</Link>
              <Link to="/calculations" className="text-lg font-bold text-[#071e45]">Calculations</Link>
              <Link to="/insights" className="text-lg font-bold text-[#22a8ff]">Insights</Link>
              <Link to="/about" className="text-lg font-bold text-[#071e45]">About</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;