import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = ({ title, breadcrumb }) => {
  return (
    <div className="relative w-full h-[311px]">
      <img 
        src="/images/img_image.png" 
        alt="Hero background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-extrabold mb-1">{title}</h1>
        <p className="text-lg font-extrabold">{breadcrumb}</p>
      </div>
    </div>
  );
};

export default HeroSection;