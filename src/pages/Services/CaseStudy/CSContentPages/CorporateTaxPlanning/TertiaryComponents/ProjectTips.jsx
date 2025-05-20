import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const ProjectTips = () => {
  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.h2
        className="text-2xl font-bold text-blue-800 text-center mb-6"
        variants={fadeInUp}
      >
        Project Tips
      </motion.h2>

      <motion.div
        className="content-paragraph font-normal text-[16px] mb-4"
        variants={fadeInUp}
      >
        Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
      </motion.div>

      <motion.div
        className="content-paragraph font-normal text-[16px] mb-4"
        variants={fadeInUp}
      >
        Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. 
        <br /><br />
        Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. 
        <br /><br />
        Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
      </motion.div>

      <motion.ul
        className="list-disc pl-6 mt-6 space-y-2 text-[16px]"
        variants={fadeInUp}
      >
        <li className="text-[16px]">
          Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
        </li>
        <li className="text-[16px]">
          Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
        </li>
        <li className="text-[16px]">
          Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
        </li>
      </motion.ul>
    </motion.div>
  );
};

export default ProjectTips;
