import React from 'react';
import Button from '../../components/ui/Button';

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-full overflow-hidden">
              <img 
                src="/images/img_image_541x538.png" alt="Tax professionals in a meeting" className="w-full h-auto"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute bottom-0 left-0 bg-[#22a8ff] text-white p-4 rounded-lg w-40 h-40 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-bold">30</span>
              <span className="text-lg font-medium">Years of</span>
              <span className="text-lg font-medium">Experience</span>
            </div>
          </div>
          
          {/* Right side - Content */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-[#22a8ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl font-semibold text-white">%</span>
              </div>
              <h2 className="text-3xl font-semibold text-[#32b5fd]">About Us</h2>
            </div>
            
            <h3 className="text-4xl font-bold text-[#071e45] mb-8">
              Maximize your tax and savings with us
            </h3>
            
            <div className="flex items-center space-x-6 mb-8">
              <img src="/images/img_image_29.png" alt="Tax services" className="w-15 h-15" />
              <img src="/images/img_image_30.png" alt="Financial services" className="w-15 h-15" />
            </div>
            
            <Button className="flex items-center bg-[#32b5fd] text-white px-6 py-4 rounded-md">
              Discover More
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;