import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  className = '', 
  rounded = 'md', 
  shadow = 'md', 
  padding = 'md',
  border = false,
  borderColor = 'gray-200',
  ...props 
}) => {
  const roundedMap = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full',
  };

  const shadowMap = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
  };

  const paddingMap = {
    none: 'p-0',
    sm: 'p-2',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8',
    '2xl': 'p-10',
  };

  const borderStyle = border ? `border border-${borderColor}` : '';

  const cardClasses = `bg-white ${roundedMap[rounded]} ${shadowMap[shadow]} ${paddingMap[padding]} ${borderStyle} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  border: PropTypes.bool,
  borderColor: PropTypes.string,
};

export default Card;