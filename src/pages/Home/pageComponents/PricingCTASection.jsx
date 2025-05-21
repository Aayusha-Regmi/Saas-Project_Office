


import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const PricingCTASection = () => {
  const navigate = useNavigate();
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-photo/partnership_1098-18072.jpg?ga=GA1.1.312675452.1737013063&semt=ais_hybrid&w=740)',
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Animated Circle Icon */}
        <motion.div
          className="flex justify-center mb-8"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="w-[100px] h-[100px] rounded-full bg-white p-1.5">
            <div className="w-full h-full rounded-full bg-blue-500"></div>
          </div>
        </motion.div>

        {/* Animated Heading */}
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Let's Check Our Pricing
          <br />
          Plan For You
        </motion.h2>

        {/* Animated Paragraph */}
        <motion.p
          className="text-xl font-semibold text-white text-center max-w-2xl mx-auto mb-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Finance Minister Barshaman Pun has tabled a budget of
          <br />
          Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
        </motion.p>

        {/* Animated CTA Button */}
        <motion.div
          className="flex justify-center"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Button variant="primary" className="flex items-center" onClick={() => navigate('/contact')}>
            Contact Us
            <img
              src="/images/img_materialsymbolsarrowinsert.svg"
              alt="arrow icon"
              className="ml-2 w-6 h-6"
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCTASection;

