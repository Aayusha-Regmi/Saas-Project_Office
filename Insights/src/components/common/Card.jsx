import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const Card = ({ 
  title, 
  description, 
  ribbonImage, 
  buttonText = 'Read More', 
  buttonLink = '#', 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-[20px] p-6 relative ${className}`}>
      {ribbonImage && (
        <div className="absolute top-0 right-0">
          <img src={ribbonImage} alt="Ribbon" className="w-24 h-24" />
        </div>
      )}
      
      <h3 className="text-lg font-extrabold text-[#071e45] mb-6">{title}</h3>
      
      <p className="text-sm font-semibold text-[#797979] mb-6 leading-relaxed">
        {description}
      </p>
      
      <Link to={buttonLink}>
        <Button 
          variant="primary" 
          className="h-[47px]"
        >
          {buttonText}
          <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-1" />
        </Button>
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ribbonImage: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  className: PropTypes.string
};

export default Card;