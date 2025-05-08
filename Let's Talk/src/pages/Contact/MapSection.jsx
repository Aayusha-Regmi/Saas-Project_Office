import React from 'react';

const MapSection = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="w-full h-[500px] rounded-lg overflow-hidden">
        <img 
          src="/images/img_rectangle.png" alt="Map of Kathmandu" className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default MapSection;