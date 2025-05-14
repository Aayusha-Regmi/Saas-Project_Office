import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const TopHeader = () => {

        const [language, setLanguage] = useState('English');
        const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
        
       
        
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
            <div className="bg-[#0a1e43] text-white py-2 relative">
                <div className="absolute right-0 top-0 h-full z-0">
                <img src="/images/img_rectangle_42068.svg" alt="Decoration" className="h-full w-[550px]" />
            </div>
            <div className="container mx-auto px-4 flex flex-wrap justify-between items-center relative z-10">
            <div className="flex flex-wrap items-center space-x-6">
                <div className="flex items-center">
                <img src="/images/img_messagelight.svg" alt="Email" className="w-6 h-6 mr-2" />
                <span className="text-xs font-bold">Info@example.com</span>
                </div>
                <div className="flex items-center">
                <img src="/images/img_vector.svg" alt="Phone" className="w-3.5 h-3 mr-2" />
                <span className="text-xs font-bold">+977 9802374215</span>
                </div>
                <div className="flex items-center">
                <img src="/images/img_clock.svg" alt="Hours" className="w-6 h-6 mr-2" />
                <span className="text-xs font-bold">Sun-Fri(08AM-10PM)</span>
                </div>
            </div>
            
            <div className="flex items-center space-x-2">
                <div className="relative">
                <button 
                    className="flex items-center text-white"
                    onClick={toggleLanguageDropdown}
                >
                    <img src="/images/img_globe.svg" alt="Language" className="w-5.5 h-5.5 mr-2" />
                    <span className="text-xs font-bold">Language</span>
                    <img src="/images/img_arrowdropdownbig.svg" alt="Dropdown" className="w-6 h-6 ml-1" />
                </button>
                
                {showLanguageDropdown && (
                    <div className="absolute top-full right-0 mt-2 bg-white text-gray-800 shadow-md rounded-md py-2 z-10">
                    <button 
                        className="block w-full text-xs text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => changeLanguage('English')}
                    >
                        English
                    </button>
                    <button 
                        className="block w-full text-xs text-left px-4 py-2 hover:bg-gray-100"
                        onClick={() => changeLanguage('Nepali')}
                    >
                        Nepali
                    </button>
                    </div>
                )}
                </div>
                
                <div>
                <span className="text-xs font-bold">Follow Us:</span>
                <div className="flex items-center ml-2 space-x-3 inline-flex">
                    <a href="#" className="block">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <span className="text-black">f</span>
                    </div>
                    </a>
                    <a href="#" className="block">
                    <img src="/images/img_image_1.png" alt="Instagram" className="w-6 h-6 rounded" />
                    </a>
                    <a href="#" className="block">
                    <div className="text-[#22a8ff] font-normal">
                    <img src="/images/img_image_1.png" alt="Instagram" className="w-6 h-6 rounded" />
                    </div>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>
        
        );
    };

    export default TopHeader;
