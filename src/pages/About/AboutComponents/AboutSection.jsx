import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
    },
  },
};

const AboutSection = () => {
  const navigate = useNavigate();
  const path = '/about';
  const handleNavigation =(path)=>{
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id='aboutus' className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center mb-6 md:mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold text-sm sm:text-base">%</span>
            </div>
            <span className="text-sm sm:text-base font-semibold text-blue-500 px-3 sm:px-4">About Us</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image - Order changed on mobile for better visual hierarchy */}
          <motion.div
            className="md:col-span-1 relative order-2 md:order-1"
            variants={fadeInLeft}
          >
            <img
              src="/images/img_image.png"
              alt="About Us"
              className="w-full h-auto rounded-full"
            />
            <motion.div
              className="absolute bottom-[10%] left-[5%] bg-blue-500 p-2 rounded-lg"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-xs sm:text-sm font-bold text-white text-center">
                <span className="text-xl sm:text-2xl">30</span><br />Years of<br />Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="md:col-span-1 order-1 md:order-2 mb-6 md:mb-0"
            variants={fadeInRight}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-8">
              Maximize Your Tax And
              <span className="hidden sm:inline"><br /></span>
              <span className="sm:hidden"> </span>
              Savings With Us
            </h2>

            <p className="text-base sm:text-lg md:text-lg font-semibold text-gray-400 mb-6 md:mb-8">
              At TaxWise Nepal, we specialize in maximizing your savings and minimizing tax liabilities through expert advice and tailored financial strategies.  
            
             
            </p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8"
              variants={fadeInUp}
            >
              <div className="flex items-start sm:items-center">
                <img
                  src="/images/img_image_29.png"
                  alt="Feature"
                  className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] mr-2 sm:mr-3 mt-1 sm:mt-0"
                />
                <div>
                  <h3 className="text-sm md:text-base font-bold">Experienced Professionals</h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    Our team of experts brings decades of hands-on experience to secure your financial future.
                  </p>
                </div>
              </div>
              <div className="flex items-start sm:items-center mt-4 sm:mt-0">
                <img
                  src="/images/img_image_30.png"
                  alt="Feature"
                  className="w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] mr-2 sm:mr-3 mt-1 sm:mt-0"
                />
                <div>
                  <h3 className="text-sm md:text-base font-bold">Client Satisfaction</h3>
                  <p className="text-xs md:text-sm text-gray-400">
                    We prioritize your needs and consistently deliver solutions that exceed expectations.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="flex justify-center mt-6"
            >
              <Button
                variant="primary"
                size="small"
                className="flex items-center justify-center px-8 py-2.5"
                onClick={() => handleNavigation('/caseStudy/tax-planning')}
              >
                Discover More
                <img
                  src="/images/img_materialsymbolsarrowinsert.svg"
                  alt="Discover More"
                  className="ml-2 w-5 h-5 sm:w-6 sm:h-6"
                />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
