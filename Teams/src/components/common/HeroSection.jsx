import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../ui/Breadcrumbs';

const HeroSection = ({ title, breadcrumbItems }) => {
  return (
    <section 
      className="relative w-full h-[300px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: 'url("/images/img_image.png")' }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-3xl font-extrabold mb-4">{title}</h1>
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
      path: PropTypes.string.isRequired
    })
  ).isRequired
};

export default HeroSection;