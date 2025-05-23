



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    // State to toggle mobile contact info
    const [showMobileInfo, setShowMobileInfo] = useState(false);
    
    return (
        <header className="w-full fixed top-0 left-0 z-50">
        {/* Top bar */}
        <div className="bg-[#0a1e43] text-white py-2 relative">
            {/* Background decoration - hidden on small screens */}
            <div className="absolute right-0 top-0 h-full z-0 hidden md:block">
                <img src="/images/img_rectangle_42068.svg" alt="Decoration" className="h-full w-[550px]" />
            </div>
            
            {/* Mobile toggle button - only visible on small screens */}
            <div className="container mx-auto px-4 flex justify-end md:hidden">
                <button 
                    onClick={() => setShowMobileInfo(!showMobileInfo)}
                    className="text-white p-1 flex items-center"
                >
                    <span className="text-xs font-bold mr-1">Contact Info</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform duration-300 ${showMobileInfo ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
            </div>
              {/* Main content */}
            <div className={`container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-10 ${showMobileInfo ? 'flex' : 'hidden md:flex'}`}>
                {/* Contact information */}
                <div className="flex flex-col md:flex-row items-center md:space-x-6 w-full md:w-auto">
                    <div className="flex items-center my-1 md:my-0">
                        <img src="/images/img_messagelight.svg" alt="Email" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                        <span className="text-xs font-bold">Info@example.com</span>
                    </div>
                    <div className="flex items-center my-1 md:my-0">
                        <img src="/images/img_riphonefill.svg" alt="Phone" className="w-3 h-3 md:w-3.5 md:h-3 mr-2" />
                        <span className="text-xs font-bold">+977 9802374215</span>
                    </div>
                    <div className="flex items-center my-1 md:my-0">
                        <img src="/images/img_clock.svg" alt="Hours" className="w-5 h-5 md:w-6 md:h-6 mr-2" />
                        <span className="text-xs font-bold">Sun-Fri(08AM-10PM)</span>
                    </div>
                </div>
                
                {/* Social media icons */}
                <div className="flex items-center mt-2 md:mt-0">
                    <span className="text-xs font-bold mr-2">Follow Us:</span>
                    <div className="flex items-center space-x-3">
                        <a href="#" className="social-icon-container block w-7 h-7 md:w-6 md:h-6">
                            <img src="/images/img_image_11.png" alt="Instagram" className="w-full h-full rounded-full" />
                            <div className="social-icon-sparkle"></div>
                        </a>
                        <a href="https://www.facebook.com/saasnepal1" className="social-icon-container block w-7 h-7 md:w-6 md:h-6">
                            <img src="/images/img_image_22.png" alt="Facebook" className="w-full h-full rounded-full" />
                            <div className="social-icon-sparkle"></div>
                        </a>
                        <a href="https://www.linkedin.com/company/saasnepal/" className="social-icon-container block w-7 h-7 md:w-6 md:h-6">
                            <img src="/images/img_image_33.png" alt="LinkedIn" className="w-full h-full rounded-full" />
                            <div className="social-icon-sparkle"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
};

export default TopHeader;

