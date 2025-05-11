import React from 'react';

const MapSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Sona Consolidate Pvt Ltd Location"
          src="https://www.google.com/maps?q=Sona+Consolidate+Pvt+Ltd+Kathmandu&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
};

export default MapSection;
