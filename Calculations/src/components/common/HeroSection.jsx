import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../ui/Breadcrumbs';

const HeroSection = ({ title, breadcrumbItems }) => {
  return (
    <div className="relative h-[300px] overflow-hidden">
      <img 
        src="/images/img_image.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2">{title}</h1>
        <Breadcrumbs 
          items={breadcrumbItems} 
          className="text-lg font-extrabold"
        />
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HeroSection;