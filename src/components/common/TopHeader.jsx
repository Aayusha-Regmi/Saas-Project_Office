import React, { useState } from 'react';

const TopHeader = () => {
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
      <div className="bg-primary-dark-blue h-[71px] flex items-center justify-between relative overflow-hidden">
        {/* Left Section */}
        <div className="flex items-center space-x-8 pl-[110px] z-10">
          <div className="flex items-center">
            <img src="/images/img_messagelight.svg" alt="Email" className="w-6 h-6 mr-2" />
            <span className="text-white text-sm font-bold">Info@example.com</span>
          </div>
          <div className="flex items-center">
            <img src="/images/img_vector.svg" alt="Phone" className="w-4 h-4 mr-2" />
            <span className="text-white text-sm font-bold">+977 9802374215</span>
          </div>
          <div className="flex items-center">
            <img src="/images/img_clock.svg" alt="Clock" className="w-6 h-6 mr-2" />
            <span className="text-white text-sm font-bold">Sun-Fri(08AM-10PM)</span>
          </div>
        </div>

        {/* Right Curved Section */}
        <div className="absolute right-0 top-0 h-full">
          <div className="bg-primary-bright-blue h-full rounded-l-[40px] w-[600px] flex items-center justify-end pr-[110px] z-0">
            <div className="flex items-center space-x-6 relative">
              {/* Language */}
              <div className="flex items-center cursor-pointer relative" onClick={toggleLanguageDropdown}>
                <img src="/images/img_globe.svg" alt="Globe" className="w-[22px] h-[22px] mr-1" />
                <span className="text-white text-base font-bold">Language</span>
                <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
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

              {/* Social Icons */}
              <div className="flex items-center">
                <span className="text-white font-bold text-base">Follow Us:</span>
                <div className="flex items-center ml-4 space-x-3">
                  <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-primary-light-blue text-sm font-bold">in</span>
                  </div>
                  <img src="/images/img_image_1.png" alt="Social" className="w-6 h-6 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
