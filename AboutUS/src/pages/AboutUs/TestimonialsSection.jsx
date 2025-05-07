import React, { useState } from 'react';
import Card from '../../components/common/Card';
import RatingBar from '../../components/ui/RatingBar';
import Button from '../../components/ui/Button';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: "Sabal Kafle",
      role: "Customer",
      image: "/images/img_stt6_2.png",
      rating: 5,
      text: "They stay ahead of the curve, bringing fresh ideas and solutions that truly work."
    },
    {
      id: 2,
      name: "Sabal Kafle",
      role: "Customer",
      image: "/images/img_stt6_3.png",
      rating: 5,
      text: "They stay ahead of the curve, bringing fresh ideas and solutions that truly work."
    }
  ];
  
  const handlePrevSlide = () => {
    setActiveSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNextSlide = () => {
    setActiveSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 bg-[#eaf8ff] relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0">
        <img src="/images/img_ellipse_335.png" alt="Background shape" />
      </div>
      <div className="absolute top-3 left-3">
        <img src="/images/img_group_1171275968_426x131.svg" alt="Background pattern" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Content */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-[#22a8ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl font-semibold text-white">%</span>
              </div>
              <h2 className="text-3xl font-semibold text-[#32b5fd]">Testimonials</h2>
            </div>
            
            <h3 className="text-4xl font-bold text-[#071e45] mb-4">
              What Our Client 
            </h3>
            <h3 className="text-4xl font-bold text-[#071e45] mb-6">
              Say's About Us
            </h3>
            
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. All the generators on the Internet tend to repeat predefined chunks.
            </p>
            
            <Button className="flex items-center bg-[#32b5fd] text-white px-6 py-4 rounded-md">
              Know More 
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
            </Button>
          </div>
          
          {/* Right side - Testimonials */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="flex flex-wrap gap-4">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={testimonial.id}
                    className="w-full md:w-[calc(50%-1rem)] relative"
                    rounded="lg"
                    shadow="md" padding="lg"
                  >
                    {/* Quote badge */}
                    <div className="absolute -top-4 right-4 bg-[#22a8ff] w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-semibold text-white">99</span>
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="mb-4">
                      <img src="/images/img_group_1171276006.svg" alt="Quote" className="mb-4" />
                      <p className="text-xl leading-relaxed mb-6">
                        {testimonial.text}
                      </p>
                    </div>
                    
                    {/* Author info */}
                    <div className="flex items-center">
                      <div className="relative mr-4">
                        <div className="w-28 h-28 rounded-full border-2 border-[#32b5fd] flex items-center justify-center">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-24 h-24 rounded-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold mb-1">{testimonial.name}</h4>
                        <p className="text-xl font-semibold text-[#33b6ff] mb-2">{testimonial.role}</p>
                        <RatingBar rating={testimonial.rating} size="medium" color="#ff793f" />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Navigation */}
              <div className="flex items-center justify-center mt-8">
                <div className="w-16 h-4 bg-[#32b5fd] rounded-lg mx-2"></div>
                <div className="w-5 h-5 bg-[#32b5fd] rounded-full mx-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;