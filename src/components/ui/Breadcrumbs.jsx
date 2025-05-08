import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items,className= '' }) => {
  return (
    <nav className="text-lg font-extrabold">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="mx-1">/</span>}
          {(item.link || item.path) ? (
            <Link 
              to={item.link || item.path} 
              className={`hover:underline ${item.className || ''}`}
            >
              {item.label}
            </Link>
          ) : (
            <span className={item.className || ''}>{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
      path: PropTypes.string,
      className: PropTypes.string
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Breadcrumbs;