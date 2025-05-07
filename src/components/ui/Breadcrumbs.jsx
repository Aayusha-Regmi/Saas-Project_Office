import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="text-lg font-extrabold">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <span className="mx-1">&gt;&gt;</span>}
          {item.link ? (
            <Link to={item.link} className="hover:underline">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
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
      link: PropTypes.string
    })
  ).isRequired
};

export default Breadcrumbs;