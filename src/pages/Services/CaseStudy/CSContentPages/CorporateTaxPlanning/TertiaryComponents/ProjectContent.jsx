import React from 'react';
import { motion } from 'framer-motion';

const contents = [
  {
    title: "Coorporate Tax Planning",
    description:
      "Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament. Finance Minister Barshaman Pun has tabled a budget of Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.",
    icon: "/images/img_image_45.png",
    cornerImage: "/images/img_image_46.png",
    buttonText: "Read More",
    buttonLink: "/caseStudy/:page",
    iconBgColor: "#33B5FF"
  }
];

const fadeSlide = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const ProjectContent = () => {
  if (!contents || contents.length === 0) {
    return <div className="text-center text-red-500">No content available</div>;
  }

  const content = contents[0];

  return (
    <motion.div
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeSlide}
    >
      <motion.h2
        className="text-2xl font-bold text-blue-800 text-center mb-6"
        variants={fadeSlide}
      >
        {content?.title || 'Corporate Tax Planning'}
      </motion.h2>

      <motion.div
        className="content-paragraph font-normal text-[16px] mb-4"
        variants={fadeSlide}
      >
        {content?.description || 'No description available'}
      </motion.div>

      <motion.div
        className="content-paragraph font-normal text-[16px] mb-4"
        variants={fadeSlide}
      >
        {content?.description || 'No description available'}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10"
        variants={fadeSlide}
      >
        <motion.img
          src={content?.icon}
          alt="Corporate tax planning meeting"
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
        <motion.img
          src={content?.cornerImage}
          alt="Financial document review"
          className="w-full h-auto rounded-lg"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="content-paragraph font-normal text-[16px]"
        variants={fadeSlide}
      >
        {content?.description || 'No description available'}
      </motion.div>
    </motion.div>
  );
};

export default ProjectContent;
