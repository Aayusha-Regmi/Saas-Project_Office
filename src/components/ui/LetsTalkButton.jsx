import React from 'react';
import PropTypes from 'prop-types';

const LetsTalkButton = ({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary', 
  size = 'medium', 
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-md transition-colors duration-200 flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary-lightBlue text-white hover:bg-blue-500',
    secondary: 'bg-white text-primary-darkBlue border border-primary-darkBlue hover:bg-gray-100',
    outline: 'bg-transparent border border-primary-lightBlue text-primary-lightBlue hover:bg-primary-lightBlue hover:text-white',
  };
  
  const sizes = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {iconPosition === 'left' && icon && <span className="mr-2">{icon}</span>}
      {children}
      {iconPosition === 'right' && icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};

LetsTalkButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
};

export default LetsTalkButton;