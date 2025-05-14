import React from 'react';
import PropTypes from 'prop-types';

const TeamsCard = ({ 
  image, 
  name, 
  position, 
  description, 
  contactInfo,
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {image && (
        <div className="w-full h-64 overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        {name && <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>}
        
        {position && (
          <p className="text-blue-600 font-medium mb-3">{position}</p>
        )}
        
        {description && (
          <p className="text-dark-gray-600 mb-4">{description}</p>
        )}
        
        {contactInfo && (
          <div className="mt-4">
            {contactInfo.email && (
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-400">{contactInfo.email}</span>
              </div>
            )}
            
            {contactInfo.phone && (
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-gray-400">{contactInfo.phone}</span>
              </div>
            )}
            
            {contactInfo.location && (
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400">{contactInfo.location}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

TeamsCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  description: PropTypes.string,
  contactInfo: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string
  }),
  className: PropTypes.string
};

export default TeamsCard;