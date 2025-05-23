import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const InsightsCard = ({ 
  title, 
  description, 
  ribbonImage, 
  buttonText = 'Read More', 
  buttonLink = '#', 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-[20px] p-6 relative h-full ${className}`}>
      {ribbonImage && (
        <div className="absolute top-0 right-0 -mt-4">
          <img src={ribbonImage} alt="Ribbon" className="w-24 h-24" />
        </div>
      )}
      
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-extrabold text-[#071e45] mb-4">{title}</h3>
        
        <div className="flex-1">
          <p className="text-sm font-semibold text-[#797979] leading-relaxed">
            {description}
          </p>
        </div>
        
        <Link to={buttonLink} className="mt-6">
          <Button 
            variant="primary" 
            className="h-[47px] w-full"
          >
            <div className='flex items-center'>
              {buttonText}
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
};

InsightsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ribbonImage: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  className: PropTypes.string
};

export default InsightsCard;