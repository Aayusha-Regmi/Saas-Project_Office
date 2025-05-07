import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded transition-colors duration-200 focus:outline-none';
  
  const variants = {
    primary: 'bg-accent-blue text-white hover:bg-primary-light-blue',
    secondary: 'bg-accent-green text-white hover:bg-green-600',
    dark: 'bg-accent-dark-green text-white hover:bg-gray-800',
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'dark', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;