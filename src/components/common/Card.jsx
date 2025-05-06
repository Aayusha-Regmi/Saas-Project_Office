import React from 'react';
import PropTypes from 'prop-types';
import Button from '../ui/Button';

const Card = ({
  title,
  description,
  icon,
  buttonText,
  buttonAction,
  className = '',
  variant = 'default',
  cornerImage,
  price,
  features,
  isHighlighted = false,
  ...props
}) => {
  const variants = {
    default: 'bg-white rounded-2xl shadow-md p-6',
    pricing: 'bg-white rounded-sm shadow-md p-6',
    feature: 'bg-blue-700 text-white rounded-2xl p-6',
    service: 'bg-white rounded-2xl shadow-md p-6',
  };

  const cardClass = `${variants[variant]} ${className} ${isHighlighted ? 'border-2 border-blue-500' : ''}`;

  return (
    <div className={cardClass} {...props}>
      {variant === 'pricing' && price && (
        <div className="mb-6">
          <h3 className="text-4xl font-bold text-blue-800 text-center">{price}</h3>
          {isHighlighted && (
            <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-6 rounded-tr-sm rounded-bl-sm">
              <p className="text-lg font-semibold">{title}</p>
            </div>
          )}
        </div>
      )}

      {variant !== 'pricing' && (
        <>
          {icon && (
            <div className={`${variant === 'feature' ? 'text-white' : 'text-blue-500'} mb-4`}>
              {icon}
            </div>
          )}
          <h3 className={`text-lg font-bold mb-2 ${variant === 'feature' ? 'text-white' : 'text-blue-800'}`}>
            {title}
          </h3>
        </>
      )}

      <p className={`text-sm ${variant === 'feature' ? 'text-white' : 'text-gray-400'} mb-4`}>
        {description}
      </p>

      {features && (
        <ul className="mb-6 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <img src="/images/img_vector_16x16.svg" alt="Check" className="w-4 h-4 mt-1 mr-3" />
              <span className="text-base font-semibold text-blue-800">{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {buttonText && (
        <Button
          onClick={buttonAction}
          variant="primary" className="mt-4 w-full flex justify-center items-center"
        >
          {buttonText}
          <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
        </Button>
      )}

      {cornerImage && (
        <div className="absolute top-0 right-0">
          <img src={cornerImage} alt="" className="w-24 h-24" />
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  buttonText: PropTypes.string,
  buttonAction: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'pricing', 'feature', 'service']),
  cornerImage: PropTypes.string,
  price: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string),
  isHighlighted: PropTypes.bool,
};

export default Card;