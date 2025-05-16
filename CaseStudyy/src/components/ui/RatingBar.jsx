import React from 'react';
import PropTypes from 'prop-types';

const RatingBar = ({ rating = 0, maxRating = 5, size = 'medium', readOnly = true, onChange }) => {
  const handleRatingClick = (selectedRating) => {
    if (!readOnly && onChange) {
      onChange(selectedRating);
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case 'small':
        return 'w-4 h-4';
      case 'large':
        return 'w-8 h-8';
      case 'medium':
      default:
        return 'w-6 h-6';
    }
  };

  const sizeClass = getSizeClass();

  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => {
        const starValue = index + 1;
        return (
          <div
            key={index}
            onClick={() => handleRatingClick(starValue)}
            className={`${!readOnly ? 'cursor-pointer' : ''} mr-1`}
          >
            <img 
              src="/images/img_iconoirstar.svg" 
              alt={`${starValue} star`} 
              className={sizeClass}
            />
          </div>
        );
      })}
    </div>
  );
};

RatingBar.propTypes = {
  rating: PropTypes.number,
  maxRating: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  readOnly: PropTypes.bool,
  onChange: PropTypes.func,
};

export default RatingBar;