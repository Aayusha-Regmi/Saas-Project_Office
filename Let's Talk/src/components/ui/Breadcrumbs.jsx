import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items, className = '' }) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            
            {item.link && index !== items.length - 1 ? (
              <Link 
                to={item.link} 
                className="text-blue-600 hover:text-blue-800"
              >
                {item.label}
              </Link>
            ) : (
              <span className={index === items.length - 1 ? "text-gray-500" : ""}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;