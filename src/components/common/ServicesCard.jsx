import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/ServicesButton';
import { Link } from 'react-router-dom';

const ServicesCard = ({ 
  title, 
  description, 
  icon, 
  cornerImage, 
  buttonText = "Read More", 
  buttonLink = "",
  iconBgColor = "#33B5FF"
}) => {
 
    
  return (
    <div className="bg-white rounded-[20px] p-7 relative overflow-hidden h-full flex flex-col">
      {/* Corner image */}
      {cornerImage && (
        <div className="absolute top-0 right-0">
          <img src={cornerImage} alt="" className="w-24 h-24" />
        </div>
      )}
      
      {/* Icon */}
      <div className={`w-[75px] h-[75px] rounded-full flex items-center justify-center flex-shrink-0`} style={{ backgroundColor: iconBgColor }}>
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col mt-5">
        <h3 className="text-lg font-extrabold text-[#071E45] mb-3 line-clamp-2">{title}</h3>
        <p className="text-sm text-[#797979] font-medium leading-[1.625rem] mb-6 line-clamp-4 flex-1">
          {description}
        </p>
      </div>
      
      {/* Button */}
      <div className="mt-auto">
        <Link to={buttonLink}>
          <Button className="h-[47px] rounded-md w-full">
            {buttonText}
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  cornerImage: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  iconBgColor: PropTypes.string
};

export default ServicesCard;