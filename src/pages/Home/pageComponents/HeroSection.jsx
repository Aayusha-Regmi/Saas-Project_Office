import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const HomeHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden py-8 md:py-12 lg:py-16">
      {/* Background elements - hidden on small screens, visible and responsive on larger screens */}
      <div className="hidden md:block absolute right-0 top-[20%] lg:top-[25%]">
        <div className="w-[200px] h-[210px] lg:w-[408px] lg:h-[427px] rounded-full bg-green-300 opacity-60"></div>
        <div className="absolute top-[15%] left-[15%] w-[60px] h-[60px] lg:top-[73px] lg:left-[56px] lg:w-[115px] lg:h-[115px] rounded-full bg-red-600/30"></div>
        <div className="absolute top-[70%] left-[30%] w-[60px] h-[60px] lg:top-[395px] lg:left-[180px] lg:w-[115px] lg:h-[115px] rounded-full bg-red-600/30"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-full md:w-1/2 z-10">
            {/* Award banner - responsive width */}
            <div className="bg-red-500 rounded-2xl px-3 py-2 md:px-4 md:py-2 flex items-center w-full max-w-[428px] mb-4 md:mb-8">
              <div className="bg-white w-[30px] h-[30px] md:w-[37px] md:h-[37px] rounded-full flex items-center justify-center mr-2 md:mr-3 shrink-0">
                <span className="text-red-500 font-semibold text-sm md:text-base">%</span>
              </div>
              <span className="text-sm md:text-base lg:text-xl font-semibold text-white">Award Winning Tax Advisor in Nepal</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 leading-tight mb-4 md:mb-8">
              We Help You To Avoid<br className="hidden sm:block" /> Tax Blunders
            </h1>

            <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-800 mb-6 md:mb-8">
              Empowering businesses and individuals with expert tax solutions tailored to maximize savings and ensure full compliance.
            </p>

            {/* Buttons stack on mobile, side by side on larger screens */}
            <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 mb-8 md:mb-12">
              <Button 
                onClick={() => navigate('/about')} 
                variant="primary"
                size="small"
                className="flex items-center justify-center sm:justify-start w-full sm:w-auto"
              >
                About More
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-5 h-5 md:w-6 md:h-6" />
              </Button>
              
              <Button 
                onClick={() => navigate('/services')} 
                variant="secondary"
                size="small" 
                className="flex items-center justify-center sm:justify-start w-full sm:w-auto"
              >
                Learn More
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </div>

            <p className="text-base md:text-lg lg:text-xl font-semibold text-blue-800 mb-2 md:mb-4">
              Trusted By 200 + Companies
            </p>

            <div className="flex space-x-3 md:space-x-4">
              <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] lg:w-[67px] lg:h-[67px] bg-gray-300 rounded-full"></div>
              <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] lg:w-[67px] lg:h-[67px] bg-gray-300 rounded-full"></div>
              <div className="w-[45px] h-[45px] md:w-[60px] md:h-[60px] lg:w-[67px] lg:h-[67px] bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative mt-8 md:mt-0">
            {/* Background SVG scaled properly */}
            <img 
              src="/images/img_group_1171275966.svg" 
              alt="Background" 
              className="absolute z-0 w-full h-auto max-w-full object-contain" 
            />
            <motion.img
              src="/images/img_keti_1.png"
              alt="Tax Advisor"
              className="relative z-10 w-full h-auto max-w-full object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
