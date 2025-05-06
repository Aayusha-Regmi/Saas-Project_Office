import React from 'react';
import Button from '../../components/ui/Button';

const PricingCTASection = () => {
  return (
    <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: 'url(img_image_27.png)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-700/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-8">
          <div className="w-[100px] h-[100px] rounded-full bg-white p-1.5">
            <div className="w-full h-full rounded-full bg-blue-500"></div>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Let's Check Our Pricing<br />Plan For You
        </h2>
        
        <p className="text-xl font-semibold text-white text-center max-w-2xl mx-auto mb-12">
          Finance Minister Barshaman Pun has tabled a budget of<br />
          Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
        </p>
        
        <div className="flex justify-center">
          <Button 
            variant="primary" className="flex items-center"
          >
            Contact Us
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingCTASection;