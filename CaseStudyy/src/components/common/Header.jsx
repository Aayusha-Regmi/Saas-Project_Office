import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-blue-700 text-white py-4">
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
            <div className="flex items-center">
              <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-2" />
              <span className="text-base font-bold">Language</span>
              <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
            </div>
            <div>
              <span className="text-base font-bold">Follow Us:</span>
              <div className="flex items-center ml-2 space-x-3 inline-flex">
                <div className="w-6 h-6 bg-white rounded-full"></div>
                <img src="/images/img_image_1.png" alt="Instagram" className="w-6 h-6 rounded" />
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
                  <span className="text-blue-600 text-sm font-normal">in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-2 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <img src="/images/img_saas_logo_101_1.png" alt="SAA Logo" className="h-16 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <Link to="/" className="nav-link flex items-center">
                Home
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            <div className="relative group">
              <Link to="/industries" className="nav-link flex items-center">
                Industries
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            <div className="relative group">
              <Link to="/services" className="nav-link-active flex items-center">
                Services
                <img src="/images/img_expanddown_24x24.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            <Link to="/teams" className="nav-link">
              Teams
            </Link>
            <div className="relative group">
              <Link to="/calculations" className="nav-link flex items-center">
                Calculations
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            <div className="relative group">
              <Link to="/insights" className="nav-link flex items-center">
                Insights
                <img src="/images/img_expanddown.svg" alt="Expand" className="w-6 h-6 ml-1" />
              </Link>
            </div>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <button className="ml-2">
              <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            </button>
          </nav>

          <div className="flex items-center">
            <div className="bg-blue-600 text-white px-4 py-2 rounded flex items-center cursor-pointer">
              <span className="text-base font-semibold">Let's Talk</span>
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
            </div>
            <button className="ml-4 md:hidden" onClick={toggleMenu}>
              <div className="w-6 h-0.5 bg-black mb-1"></div>
              <div className="w-5 h-0.5 bg-black mb-1"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/industries" className="nav-link">Industries</Link>
              <Link to="/services" className="nav-link-active">Services</Link>
              <Link to="/teams" className="nav-link">Teams</Link>
              <Link to="/calculations" className="nav-link">Calculations</Link>
              <Link to="/insights" className="nav-link">Insights</Link>
              <Link to="/about" className="nav-link">About</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;