import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../ui/Breadcrumbs';

const HeroSection = ({ title, breadcrumbItems }) => {
  return (
    <div className="relative w-full h-[311px] bg-cover bg-center" style={{ backgroundImage: 'url("/images/img_image.png")' }}>
      <div className="absolute inset-0 bg-[#0a1e43] bg-opacity-70"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{title}</h1>
        <Breadcrumbs items={breadcrumbItems} className="mt-2" />
      </div>
    </div>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default HeroSection;