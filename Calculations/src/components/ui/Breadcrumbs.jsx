import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items, className = '' }) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-1 text-gray-400">&gt;&gt;</span>}
              
              {isLast ? (
                <span className="font-bold text-primary-light-blue">
                  {item.label}
                </span>
              ) : (
                <Link 
                  to={item.path} 
                  className="text-gray-600 hover:text-primary-light-blue"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;