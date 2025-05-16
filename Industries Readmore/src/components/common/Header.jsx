import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/', hasDropdown: true },
    { name: 'Industries', path: '/industries', hasDropdown: true, active: true },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Teams', path: '/teams', hasDropdown: false },
    { name: 'Calculations', path: '/calculations', hasDropdown: true },
    { name: 'Insights', path: '/insights', hasDropdown: true },
    { name: 'About', path: '/about', hasDropdown: false },
  ];

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'Nepali', value: 'np' },
    { label: 'Hindi', value: 'hi' },
  ];

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0a1e43] text-white py-5">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="flex items-center">
              <img src="/images/img_messagelight.svg" alt="Email" className="mr-2 w-6 h-6" />
              <span className="text-sm font-bold">Info@example.com</span>
            </div>
            <div className="flex items-center">
              <img src="/images/img_vector.svg" alt="Phone" className="mr-2 w-3.5 h-3" />
              <span className="text-sm font-bold">+977 9802374215</span>
            </div>
            <div className="flex items-center">
              <img src="/images/img_clock.svg" alt="Hours" className="mr-2 w-6 h-6" />
              <span className="text-sm font-bold">Sun-Fri(08AM-10PM)</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <img src="/images/img_globe.svg" alt="Language" className="mr-1 w-5.5 h-5.5" />
              <span className="text-base font-bold mr-1">Language</span>
              <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6" />
            </div>
            <div className="flex items-center">
              <span className="text-base font-bold mr-4">Follow Us:</span>
              <div className="flex space-x-3">
                <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-[#22a8ff] text-sm">in</span>
                </div>
                <img src="/images/img_image_1.png" alt="Social" className="w-6 h-6 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img src="/images/img_saas_logo_101_1.png" alt="SAAS Logo" className="w-32 h-32" />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center">
                <Link 
                  to={item.path} 
                  className={`text-lg font-bold ${item.active ? 'text-[#22a8ff]' : 'text-[#071e45]'} hover:text-[#22a8ff]`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <img 
                    src={item.active ? "/images/img_expanddown_24x24.svg" : "/images/img_expanddown.svg"} 
                    alt="Dropdown" className="ml-1 w-6 h-6"
                  />
                )}
              </div>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <img src="/images/img_search.svg" alt="Search" className="w-6 h-6" />
            <Button 
              variant="primary" className="bg-[#32b5fd] text-white rounded-md px-4 py-2 flex items-center"
            >
              Let's Talk
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="ml-1 w-6 h-6" />
            </Button>
            <button 
              className="md:hidden flex flex-col space-y-1"
              onClick={toggleMenu}
            >
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-6 h-0.5 bg-black"></div>
              <div className="w-4 h-0.5 bg-black"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;