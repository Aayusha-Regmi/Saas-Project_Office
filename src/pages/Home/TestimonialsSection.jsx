import React, { useState } from 'react';
import Button from '@/components/ui/Button';


const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sabal Kafle',
      position: 'Customer',
      image: '/images/img_stt6_2.png',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      rating: '/images/img_stars.png'
    },
    {
      id: 2,
      name: 'Sabal Kafle',
      position: 'Customer',
      image: '/images/img_stt6_3.png',
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      rating: '/images/img_stars.png'
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-gray-500">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Testimonials</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">
          What Our Client
        </h2>
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          Say's About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`relative ${index !== activeTestimonial ? 'hidden md:block' : ''}`}
            >
              <div className="relative">
                <img src="/images/img_group_1171276040.svg" alt="" className="w-full h-auto" />
                <img src="/images/img_group_1171276052.svg" alt="" className="absolute top-3 left-16 w-[148px] h-[141px]" />
                <p className="absolute top-6 left-0 right-0 px-8 text-base font-semibold text-blue-800 text-center">
                  {testimonial.text}
                </p>
              </div>
              
              <div className="mt-4 flex items-center">
                <div className="relative">
                  <div className="w-[100px] h-[100px] border-2 border-blue-500 rounded-full"></div>
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full"
                  />
                </div>
                
                <div className="ml-4">
                  <h3 className="text-lg font-extrabold text-blue-800">{testimonial.name}</h3>
                  <p className="text-base font-semibold text-blue-500">{testimonial.position}</p>
                  <img src={testimonial.rating} alt="Rating" className="mt-1 w-[64px] h-[24px]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button 
            onClick={handlePrevTestimonial}
            className="mr-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNextTestimonial}
            className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <button 
            onClick={() => setActiveTestimonial(0)}
            className={`w-2 h-2 rounded-full mx-1 ${activeTestimonial === 0 ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-label="Go to testimonial 1"
          ></button>
          <button 
            onClick={() => setActiveTestimonial(1)}
            className={`w-2 h-2 rounded-full mx-1 ${activeTestimonial === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
            aria-label="Go to testimonial 2"
          ></button>
        </div>

        <div className="flex justify-center mt-8">
          <Button 
            variant="primary" className="flex items-center"
          >
            Know More
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;