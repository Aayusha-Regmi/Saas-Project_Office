import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../ui/Breadcrumbs';

const HeroSection = ({ title, breadcrumbItems, backgroundImage }) => {
  return (
    <section 
      className="relative w-full h-[311px] flex items-center justify-center"
      style={{ 
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-2">{title}</h1>
        <Breadcrumbs items={breadcrumbItems} className="justify-center" />
      </div>
    </section>
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
  backgroundImage: PropTypes.string.isRequired,
};

export default HeroSection;