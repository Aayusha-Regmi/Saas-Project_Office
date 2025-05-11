import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items, className = '' }) => {
  return (
    <nav className={`flex ${className}`} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index > 0 && <span className="mx-1 text-white">&gt;&gt;</span>}
            {item.href ? (
              <Link 
                to={item.href} 
                className="text-white hover:text-blue-200 font-extrabold text-[18px]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-white font-extrabold text-[18px]">{item.label}</span>
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
      href: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;