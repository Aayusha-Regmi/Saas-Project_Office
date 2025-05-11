import React from 'react';

const Card = ({ icon, title, content, className }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${className}`}>
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}
      {title && <h3 className="text-xl font-bold mb-2">{title}</h3>}
      {content && <p className="text-gray-600">{content}</p>}
    </div>
  );
};

export default Card;