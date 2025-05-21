import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // <-- Added Framer Motion
import Card from '../../../components/common/AboutCard';
import RatingBar from '../../../components/ui/AboutRatingBar';
import Button from '../../../components/ui/AboutButton';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sabal Kafle",
      role: "Customer",
      image: "/images/img_stt6_2.png",
      rating: 5,
      text:"Innovative, reliable, and always one step ahead of the curve. Their solutions truly make a difference in our operations."
    },
    {
      id: 2,
      name: "Safal Kafle",
      role: "Customer",
      image: "/images/img_stt6_3.png",
      rating: 5,
      text: "From concept to execution, their team delivers results with creativity and precision. Highly recommended!"
    },
    {
      id: 3,
      name: "Rohit Jha",
      role: "Client",
      image: "/images/img_stt6_3.png",
      rating: 5,
      text: "They stay ahead of the curve, bringing fresh ideas and solutions that truly work."

    },
    {
      id: 4,
      name: "Aayusha Regmi",
      role: "Client",
      image: "/images/img_stt6_3.png",
      rating: 5,
      text: "They consistently deliver exceptional results with innovative approaches. Their dedication and expertise have made a significant impact on our business growth."
    }
  ];

  const cardsPerPage = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerPage);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % totalSlides);
    }, 4000); // Slide every 4 seconds
    return () => clearInterval(interval);
  }, [totalSlides]);

  const currentTestimonials = testimonials.slice(
    activeSlide * cardsPerPage,
    activeSlide * cardsPerPage + cardsPerPage
  );

  return (
    <section className="py-12 md:py-20 bg-[#eaf8ff] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img 
          src="/images/img_ellipse_335.png" 
          alt="Background shape" 
          className="w-auto h-full object-cover opacity-50"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <img 
          src="/images/img_group_1171275968_426x131.svg" 
          alt="Background pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left side */}
          <div className="w-full lg:w-5/12">
            <div className="flex items-center mb-4 md:mb-6">
              <div className="bg-[#22a8ff] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center mr-3 md:mr-4">
                <span className="text-2xl md:text-3xl font-semibold text-white">%</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#32b5fd]">Testimonials</h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#071e45] mb-2 md:mb-4">What Our Clients</h3>
            <h3 className="text-3xl md:text-4xl font-bold text-[#071e45] mb-4 md:mb-6">Say About Us</h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
              Don't just take our word for it. Here's what our clients have to say about our services and how we've helped transform their businesses.
            </p>
            <Button className="flex items-center bg-[#32b5fd] hover:bg-[#1a9cef] text-white px-8 py-3 rounded-lg transition-colors duration-300">
              View More
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Right side - Testimonials */}
          <div className="w-full lg:w-7/12">
            <div className="relative">
              <AnimatePresence mode="wait">
                <div key={activeSlide} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {currentTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.id}-${activeSlide}`}
                      initial={{ opacity: 0, y: 20, x: 0 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="w-full h-full"
                    >
                      <Card
                        className="relative h-[380px] flex flex-col"
                        rounded="lg"
                        shadow="md"
                        padding="lg"
                      >
                        {/* Quote badge */}
                        <div className="absolute -top-4 left-4 bg-[#22a8ff] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                          <span className="text-xl md:text-2xl font-semibold text-white">
                            {index + 1 + activeSlide * cardsPerPage}
                          </span>
                        </div>
                        {/* Testimonial content */}
                        <div className="relative flex-1 flex flex-col">
                          <div className="absolute top-0 right-0 -mt-7 -mr-6">
                            <img 
                              src="/images/img_group_1171275971.svg" 
                              alt="Quote" 
                              className="w-20 h-20 opacity-80"
                            />
                          </div>
                          <div className="flex-1 flex items-center">
                            <p className="text-sm md:text-base leading-relaxed text-gray-700 mt-2">
                              {testimonial.text}
                            </p>
                          </div>
                        </div>
                        {/* Author info */}
                        <div className="border-t border-gray-100 mt-4 pt-4">
                          <div className="flex items-center">
                            <div className="relative mr-3 md:mr-4 flex-shrink-0">
                              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-dotted border-[#32b5fd] flex items-center justify-center p-0.5">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-full h-full rounded-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="min-w-0">
                              <h4 className="text-base md:text-lg font-semibold text-gray-800 truncate">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm md:text-base font-medium text-[#33b6ff] my-1">
                                {testimonial.role}
                              </p>
                              <RatingBar 
                                rating={testimonial.rating} 
                                size="small" 
                                color="#ff793f" 
                              />
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center mt-6 md:mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`mx-2 rounded-full transition-all duration-300 ${
                      index === activeSlide ? 'w-16 h-4 bg-[#32b5fd]' : 'w-5 h-5 bg-[#32b5fd] opacity-50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
