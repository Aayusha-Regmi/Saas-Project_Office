



import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

// Animation Variants
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ConsultationSection = () => {
  const navigate = useNavigate();
const path = '/contact';

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage:
          'url(https://img.freepik.com/free-photo/business-owner-working-their-strategy_23-2149241276.jpg?ga=GA1.1.312675452.1737013063&semt=ais_hybrid&w=740)',
      }}
    >
      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl font-bold text-white mb-8" variants={fadeInUp}>
          Maximize Your Potential With<br />Expert Consultation
        </motion.h2>

        <motion.p
          className="text-base font-semibold text-white max-w-2xl mx-auto mb-8"
          variants={fadeInUp}
        >
          It is a long established fact that a reader will be distracted by the readable content
          of the page looking layout point.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button onClick={() => handleNavigation('/contact')} variant="primary" className="flex items-center mx-auto">
            Contact Us
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="Contact Us" className="ml-2 w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConsultationSection;
