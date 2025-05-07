import React from 'react';
import { Link } from 'react-router-dom';
import IndustryButton from '../ui/IndustryButton';

const Card = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt, 
  buttonVariant = 'default',
  link = '#'
}) => {
  return (
    <div className="industry-card">
      <h2 className="industry-title">{title}</h2>
      <p className="industry-description">{description}</p>
      
      <Link to={link}>
        <IndustryButton 
          className={`read-more-btn ${buttonVariant === 'active' ? 'read-more-btn-active' : 'read-more-btn-default'}`}
        >
          Read More
        </IndustryButton>
      </Link>
      
      {imageSrc && (
        <div className="mt-8">
          <img 
            src={imageSrc} 
            alt={imageAlt || title} 
            className="rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Card;