import React from 'react';

const MapSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-6">
        {/* First Map */}
        <div className="w-full md:w-1/2 h-[500px] rounded-lg overflow-hidden shadow-md">          <iframe
            title="Sona Consolidate Pvt Ltd Kathmandu Location"
            src="https://www.google.com/maps?q=Sona+Consolidate+Pvt+Ltd+Kathmandu&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>          {/* Second Map */}
        <div className="w-full md:w-1/2 h-[500px] rounded-lg overflow-hidden shadow-md">          <iframe
            title="Sona Accounting and Auditing Standards Pvt. Ltd"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.6166617474546!2d84.8751412!3d27.010673499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399355d345833a63%3A0xa0fa390004fd364d!2sSona%20Accounting%20and%20Auditing%20Standards%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1747976078444!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
