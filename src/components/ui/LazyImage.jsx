import React, { useState } from 'react';

const LazyImage = ({ src, alt, className, style, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className || ''}`} style={style}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        onLoad={handleLoad}
        className={`${className || ''} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        {...props}
      />
    </div>
  );
};

export default LazyImage;
