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
      text: "They stay ahead of the curve, bringing fresh ideas and solutions that truly work."
    },
    {
      id: 2,
      name: "Sabal Kafle",
      role: "Customer",
      image: "/images/img_stt6_3.png",
      rating: 5,
      text: "They stay ahead of the curve, bringing fresh ideas and solutions that truly work."
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
      text: "They stay ahead of the curve, bringing fresh ideas and solutions that truly work."
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
          {/* Left side */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-6">
              <div className="bg-[#22a8ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
                <span className="text-3xl font-semibold text-white">%</span>
              </div>
              <h2 className="text-3xl font-semibold text-[#32b5fd]">Testimonials</h2>
            </div>
            <h3 className="text-4xl font-bold text-[#071e45] mb-4">What Our Client</h3>
            <h3 className="text-4xl font-bold text-[#071e45] mb-6">Say's About Us</h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. All the generators on the Internet tend to repeat predefined chunks.
            </p>
            <Button className="flex items-center bg-[#32b5fd] text-white px-6 py-4 rounded-md">
              Know More 
              <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Arrow" className="w-6 h-6 ml-2" />
            </Button>
          </div>

          {/* Right side - Testimonials */}
          <div className="md:w-1/2">
            <div className="relative">
              <AnimatePresence mode="wait">
                <div key={activeSlide} className="flex flex-wrap flex-row gap-4">
                  {currentTestimonials.map((testimonial, index) => (
                    <motion.div
                      key={`${testimonial.id}-${activeSlide}`} // Unique key per slide
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="w-full md:w-[calc(50%-0.5rem)]"
                    >
                      <Card
                        className="relative"
                        rounded="lg"
                        shadow="md"
                        padding="lg"
                      >
                        {/* Quote badge */}
                        <div className="absolute -top-4 right-4 bg-[#22a8ff] w-12 h-12 rounded-full flex items-center justify-center">
                          <span className="text-2xl font-semibold text-white">
                            {index + 1 + activeSlide * cardsPerPage}
                          </span>
                        </div>
                        {/* Testimonial content */}
                        <div className="mb-4">
                          <img src="/images/img_group_1171275971.svg" alt="Quote" className="mb-4" />
                          <p className="text-xl leading-relaxed mb-6">{testimonial.text}</p>
                        </div>
                        {/* Author info */}
                        <div className="flex items-center">
                          <div className="relative mr-4">
                            <div className="w-24 h-24 rounded-full border-2 border-dotted border-[#32b5fd] flex items-center justify-center">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-22 h-22 rounded-full object-cover"
                              />
                            </div>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-1">{testimonial.name}</h4>
                            <p className="text-lg font-semibold text-[#33b6ff] mb-2">{testimonial.role}</p>
                            <RatingBar rating={testimonial.rating} size="medium" color="#ff793f" />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AnimatePresence>

              {/* Pagination Dots */}
              <div className="flex items-center justify-center mt-8">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`mx-2 rounded-full transition-all duration-300 ${
                      index === activeSlide ? 'w-16 h-4 bg-[#32b5fd]' : 'w-5 h-5 bg-[#32b5fd] opacity-50'
                    }`}
                  ></button>
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
