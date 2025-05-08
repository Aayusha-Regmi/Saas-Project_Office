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
  buttonLink = "#",
  iconBgColor = "#33B5FF"
}) => {
  return (
    <div className="bg-white rounded-[20px] p-7 relative overflow-hidden">
      {/* Corner image */}
      {cornerImage && (
        <div className="absolute top-0 right-0">
          <img src={cornerImage} alt="" className="w-24 h-24" />
        </div>
      )}
      
      {/* Icon */}
      <div className={`w-[75px] h-[75px] rounded-full flex items-center justify-center`} style={{ backgroundColor: iconBgColor }}>
        <img src={icon} alt={title} className="w-12 h-12" />
      </div>
      
      {/* Content */}
      <h3 className="text-lg font-extrabold text-[#071E45] mt-5 mb-2">{title}</h3>
      <p className="text-sm text-[#797979] font-semibold leading-[26px] mb-6">{description}</p>
      
      {/* Button */}
      <Link to={buttonLink}>
        <Button className="h-[47px] rounded-md">
          {buttonText}
          <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
        </Button>
      </Link>
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