import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const PrimaryHeader = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  return (
    <header className="w-full fixed top-[30px] left-0 z-40">
      {/* Main navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="block">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-16 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-bold flex items-center ${isActive('/') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Home
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link
              to="/industries"
              className={`font-bold flex items-center ${isActive('/industries') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link
              to="/services"
              className={`font-bold flex items-center ${isActive('/services') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Services
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link
              to="/teams"
              className={`font-bold ${isActive('/teams') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Teams
            </Link>
            <Link
              to="/calculations"
              className={`font-bold flex items-center ${isActive('/calculations') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Calculations
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link
              to="/insights"
              className={`font-bold flex items-center ${isActive('/insights') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              Insights
              <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
            </Link>
            <Link
              to="/about"
              className={`font-bold ${isActive('/about') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
            >
              About
            </Link>
            <button className="ml-4">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button>
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
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-bold flex items-center justify-between ${isActive('/') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Home
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link
                to="/industries"
                className={`font-bold flex items-center justify-between ${isActive('/industries') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Industries
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link
                to="/services"
                className={`font-bold flex items-center justify-between ${isActive('/services') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Services
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link
                to="/teams"
                className={`font-bold ${isActive('/teams') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Teams
              </Link>
              <Link
                to="/calculations"
                className={`font-bold flex items-center justify-between ${isActive('/calculations') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Calculations
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link
                to="/insights"
                className={`font-bold flex items-center justify-between ${isActive('/insights') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
              >
                Insights
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6" />
              </Link>
              <Link
                to="/about"
                className={`font-bold ${isActive('/about') ? 'text-[#22a8ff]' : 'text-[#071e45]'}`}
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