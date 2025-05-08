import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 bg-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="h-[115px] w-[166px]" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-lg font-bold text-blue-500 hover:text-blue-600">
            Home
          </Link>
          <div className="relative group">
            <Link to="/industries" className="text-lg font-bold text-blue-800 hover:text-blue-600 flex items-center">
              Industries
              <img src="/images/img_expanddown.svg" alt="Expand" className="ml-1 w-6 h-6" />
            </Link>
          </div>
          <div className="relative group">
            <Link to="/services" className="text-lg font-bold text-blue-800 hover:text-blue-600 flex items-center">
              Services
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-6 h-6" />
            </Link>
          </div>
          <Link to="/teams" className="text-lg font-bold text-blue-800 hover:text-blue-600">
            Teams
          </Link>
          <div className="relative group">
            <Link to="/calculations" className="text-lg font-bold text-blue-800 hover:text-blue-600 flex items-center">
              Calculations
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-6 h-6" />
            </Link>
          </div>
          <div className="relative group">
            <Link to="/insights" className="text-lg font-bold text-blue-800 hover:text-blue-600 flex items-center">
              Insights
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-6 h-6" />
            </Link>
          </div>
          <div className="relative group">
            <Link to="/about" className="text-lg font-bold text-blue-800 hover:text-blue-600 flex items-center">
              About
              <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="ml-1 w-6 h-6" />
            </Link>
          </div>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="p-1">
            <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
          </button>
          <div className="flex items-center">
            <img src="/images/img_group_1171275967.svg" alt="Call" className="w-10 h-10" />
            <div className="ml-2">
              <p className="text-sm font-bold text-blue-500">Call 24/7</p>
              <p className="text-sm font-bold text-blue-800">+977 9802374215</p>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          >
            <path 
              strokeLinecap="round" strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-lg font-bold text-blue-500 hover:text-blue-600">
              Home
            </Link>
            <Link to="/industries" className="text-lg font-bold text-blue-800 hover:text-blue-600">
              Industries
            </Link>
            <Link to="/services" className="text-lg font-bold text-blue-800 hover:text-blue-600">
              Services
            </Link>
            <Link to="/teams" className="text-lg font-bold text-blue-800 hover:text-blue-600">
              Teams
            </Link>
            <Link to="/calculations" className="text-lg font-bold text-blue-800 hover:text-blue-600">
              Calculations
            </Link>
            <Link to=" /insights" className="text-lg font-bold text-blue-800 hover:text-blue-600">
              Insights
            </Link>
            <Link to="/about" className="text-lg font-bold text-blue-800 hover:text-blue-600">
              About
            </Link>
            <div className="flex items-center pt-2">
              <img src="/images/img_group_1171275967.svg" alt="Call" className="w-10 h-10" />
              <div className="ml-2">
                <p className="text-sm font-bold text-blue-500">Call 24/7</p>
                <p className="text-sm font-bold text-blue-800">+977 9802374215</p>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;