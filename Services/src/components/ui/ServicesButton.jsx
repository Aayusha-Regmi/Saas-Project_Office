import React from 'react';
import PropTypes from 'prop-types';

const ServicesButton = ({ children, onClick, variant = 'primary', size = 'medium', className = '', type = 'button', ...props }) => {
  const baseClasses = 'font-semibold rounded transition-colors duration-200 focus:outline-none flex items-center justify-center';
  
  const variants = {
    primary: 'bg-[#32B5FD] text-white hover:bg-[#22A8FF]',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={buttonClasses} 
      {...props}
    >
      {children}
    </button>
  );
};

ServicesButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default ServicesButton;