import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-bold rounded transition-colors duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-[#32b5fd] text-white hover:bg-[#22a8ff]',
    secondary: 'bg-[#04108a] text-white hover:bg-[#030f89]',
    outline: 'border border-[#32b5fd] text-[#32b5fd] hover:bg-[#32b5fd] hover:text-white',
  };
  
  const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${className} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;
  
  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      className={buttonClasses}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;