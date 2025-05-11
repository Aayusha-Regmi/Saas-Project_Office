import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../ui/Breadcrumbs';

const HeroSection = ({ title, breadcrumbs }) => {
  return (
    <div className="relative h-[311px] w-full">
      <img 
        src="/images/img_image.png" 
        alt="Hero Background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-[24px] font-extrabold mb-2">{title}</h1>
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default HeroSection;