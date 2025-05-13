import React from 'react';
import PropTypes from 'prop-types';

const IndustryFormCard = ({ 
  children, 
  className = '', 
  shadow = true, 
  rounded = true,
  padding = true,
  ...props 
}) => {
  const baseClasses = 'bg-white';
  const shadowClass = shadow ? 'shadow-md' : '';
  const roundedClass = rounded ? 'rounded-[14px]' : '';
  const paddingClass = padding ? 'p-6' : '';
  
  return (
    <div 
      className={`${baseClasses} ${shadowClass} ${roundedClass} ${paddingClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

IndustryFormCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  shadow: PropTypes.bool,
  rounded: PropTypes.bool,
  padding: PropTypes.bool,
};

export default IndustryFormCard;