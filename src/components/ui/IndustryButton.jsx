import React from 'react';
import PropTypes from 'prop-types';

const IndustryButton = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button', 
  disabled = false,
  ...props 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`font-semibold rounded transition-colors duration-200 ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
IndustryButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool
};

export default IndustryButton;