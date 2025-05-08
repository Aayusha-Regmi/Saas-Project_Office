import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../ui/Breadcrumbs';

const AboutHeroSection = ({ title, breadcrumbItems }) => {
  return (
    <section 
      className="relative py-16 bg-cover bg-center text-white" style={{ backgroundImage: 'url("/images/img_image.png")' }}
    >
      <div className="absolute inset-0 bg-[#071e45] opacity-70"></div>
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center py-8">
        <h1 className="text-2xl md:text-3xl font-extrabold mb-4">{title}</h1>
        <Breadcrumbs items={breadcrumbItems} />
      </div>
    </section>
  );
};

AboutHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AboutHeroSection;