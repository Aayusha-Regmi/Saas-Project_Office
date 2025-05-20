import React from 'react';
import { motion } from 'framer-motion';

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const OverviewSection = () => {
  return (
    <motion.div
      className="mb-16"
      variants={fadeSlide}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-2xl font-bold text-blue-800 text-center mb-6"
        variants={fadeSlide}
      >
        Overview & Challenges
      </motion.h2>

      <motion.div
        className="content-paragraph font-normal text-[16px]"
        variants={fadeSlide}
      >
        Quisque a nisl id sem sollicitudin volutpat. Cras et commodo quam, vel congue ligula. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Cras quis venenatis neque. Donec volutpat tellus lobortis mi ornare eleifend. 
        Fusce eu nisl ut diam ultricies accumsan. Integer lobortis vestibulum nunc id porta. 
        Curabitur aliquam arcu sed ex dictum, a facilisis urna porttitor. Fusce et mattis nisl. 
        Sed iaculis libero consequat justo auctor iaculis. Vestibulum sed ex et magna tristique bibendum. 
        Sed hendrerit neque nec est suscipit, id faucibus dolor convallis.
      </motion.div>
    </motion.div>
  );
};

export default OverviewSection;
