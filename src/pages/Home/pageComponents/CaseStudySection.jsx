import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const caseStudies = [
  {
    id: 1,
    title: 'Corporate Tax Planning',
    category: 'Tax Advice',
    description: 'Optimized tax strategies for enterprise clients',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Business Expansion',
    category: 'Business Strategy',
    description: 'Strategic planning for international growth',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Wealth Management',
    category: 'Personal Finance',
    description: 'Comprehensive personal financial planning',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Financial Audit',
    category: 'Compliance',
    description: 'Comprehensive financial audit services',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    title: 'Investment Strategy',
    category: 'Wealth Management',
    description: 'Long-term investment planning',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    title: 'Retirement Planning',
    category: 'Personal Finance',
    description: 'Secure your future with our experts',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    title: 'Market Analysis',
    category: 'Research',
    description: 'In-depth market research and analysis',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    title: 'Business Valuation',
    category: 'Consulting',
    description: 'Accurate business valuation services',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    title: 'Estate Planning',
    category: 'Wealth Management',
    description: 'Comprehensive estate planning solutions',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    title: 'Tax Compliance',
    category: 'Tax Services',
    description: 'Ensure full tax compliance',
    image: 'https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 11,
    title: 'Financial Planning',
    category: 'Wealth Management',
    description: 'Personalized financial roadmaps',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 12,
    title: 'Risk Management',
    category: 'Consulting',
    description: 'Identify and mitigate financial risks',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const CaseStudySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(caseStudies.length / itemsPerPage);

  // Auto-advance the carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const goToPage = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const visibleStudies = caseStudies.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Case Study</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          Recent Completed Award<br />Winning Case Study
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={() => {
              setIsAutoPlaying(false);
              handlePrev();
            }}
            className="group absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-blue-600"
            aria-label="Previous case studies"
          >
            <FaArrowLeft className="text-blue-600 text-xl group-hover:text-white transition-colors duration-300" />
          </button>
          
          <button 
            onClick={() => {
              setIsAutoPlaying(false);
              handleNext();
            }}
            className="group absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 hover:bg-blue-600"
            aria-label="Next case studies"
          >
            <FaArrowRight className="text-blue-600 text-xl group-hover:text-white transition-colors duration-300" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {visibleStudies.map((study, idx) => (
                  <div key={study.id} className="group">
                    <div className="overflow-hidden rounded-lg mb-4">
                      <img 
                        src={study.image} 
                        alt={study.title} 
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-blue-500 font-semibold mb-2">{study.category}</p>
                      <h3 className="text-lg font-extrabold text-blue-800 mb-2">{study.title}</h3>
                      <p className="text-gray-400">{study.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
