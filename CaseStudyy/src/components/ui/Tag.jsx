import React from 'react';
import PropTypes from 'prop-types';

const Tag = ({ 
  label, 
  variant = 'default', 
  size = 'medium',
  onClose,
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
  };
  
  const sizes = {
    small: 'px-2 py-0.5 text-xs',
    medium: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base',
  };
  
  const tagClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <span className={tagClasses} {...props}>
      {label}
      {onClose && (
        <button 
          type="button" className="ml-1.5 text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          <span className="sr-only">Remove</span>
          <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClose: PropTypes.func,
  className: PropTypes.string,
};

export default Tag;