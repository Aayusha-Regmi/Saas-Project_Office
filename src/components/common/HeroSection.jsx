import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const HeroSection = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonAction,
  secondaryButtonText,
  secondaryButtonAction,
  image,
  badgeText,
  className = '',
}) => {
  return (
    <section className={`relative z-10  ${className}`}>
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center overflow-hidden">
          <div className="md:w-1/2 mb-10 md:mb-0">
            {badgeText && (
              <div className="inline-flex items-center bg-red-500 text-white px-6 py-2 rounded-2xl mb-6">
                <div className="bg-white text-red-500 w-9 h-9 rounded-full flex items-center justify-center mr-3">
                  <span className="font-semibold">%</span>
                </div>
                <span className="text-xl font-semibold">{badgeText}</span>
              </div>
            )}
            
            <h1 className="text-4xl font-bold text-blue-800 leading-tight mb-6">
              {title}
            </h1>
            
            {subtitle && (
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                {subtitle}
              </h2>
            )}
            
            <p className="text-xl text-blue-800 mb-8">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && (
                <Button 
                  onClick={primaryButtonAction} 
                  variant="primary" className="flex items-center"
                >
                  {primaryButtonText}
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button 
                  onClick={secondaryButtonAction} 
                  variant="secondary" className="flex items-center "
                >
                  {secondaryButtonText}
                  <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
                </Button>
              )}
            </div>
          </div>
          
          <div className="md:w-1/2 relative h-full">
            {image && (
              <div className="relative h-full">
                <img src={image} alt="Hero" className="w-full h-full object-cover z-10 " />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  primaryButtonText: PropTypes.string,
  primaryButtonAction: PropTypes.func,
  secondaryButtonText: PropTypes.string,
  secondaryButtonAction: PropTypes.func,
  image: PropTypes.string,
  badgeText: PropTypes.string,
  className: PropTypes.string,
};

export default HeroSection;