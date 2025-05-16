import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items, separator = '>', className = '' }) => {
  const baseClasses = 'flex items-center text-sm';
  
  return (
    <nav className={`${baseClasses} ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {isLast ? (
                <span className="font-semibold text-[#071e45]">{item.label}</span>
              ) : (
                <>
                  <Link 
                    to={item.path} 
                    className="text-[#22a8ff] hover:underline"
                  >
                    {item.label}
                  </Link>
                  <span className="mx-2 text-gray-500">{separator}</span>
                </>
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
      path: PropTypes.string,
    })
  ).isRequired,
  separator: PropTypes.string,
  className: PropTypes.string,
};

export default Breadcrumbs;