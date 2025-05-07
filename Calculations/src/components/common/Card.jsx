import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const Card = ({ 
  title, 
  originalPrice, 
  discountedPrice, 
  savingsText, 
  features,
  onBuyNow,
  onStartTrial
}) => {
  return (
    <div className="bg-white rounded shadow-pricing-card p-6 flex flex-col">
      {/* Card Header */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h3 className="text-2xl font-semibold text-black mb-6">{title}</h3>
        
        <div className="text-lg text-secondary-gray line-through mb-2">
          US${originalPrice}
        </div>
        
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-secondary-dark-gray">US${discountedPrice}</span>
          <span className="text-sm font-bold text-secondary-dark-gray ml-1">/mo</span>
        </div>
        
        <p className="text-sm text-black mt-4">{savingsText}</p>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-4 mb-6">
        <Button 
          variant="secondary" className="w-full py-2.5 rounded"
          onClick={onBuyNow}
        >
          Buy now
        </Button>
        
        <Button 
          variant="dark" className="w-full py-2.5 rounded"
          onClick={onStartTrial}
        >
          Start free trial
        </Button>
      </div>
      
      {/* Features List */}
      <div className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-secondary-dark-gray">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  originalPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  discountedPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  savingsText: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  onBuyNow: PropTypes.func.isRequired,
  onStartTrial: PropTypes.func.isRequired,
};

export default Card;