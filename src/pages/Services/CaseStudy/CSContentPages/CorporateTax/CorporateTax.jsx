import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const contentData = {
  title: "Corporate Tax",
  description:
    "Corporate tax is a crucial aspect of business finance, involving taxation on company profits. Effective corporate tax management helps businesses comply with regulations while optimizing their tax liability. Our experts assist companies in navigating complex tax codes to maximize savings and maintain transparency.",
  tips: [
    "Regularly review financial statements to ensure accurate profit reporting for tax purposes.",
    "Stay updated with changes in corporate tax laws to remain compliant and avoid penalties.",
    "Leverage available tax credits and deductions to reduce overall tax burden efficiently."
  ],
  overview:
    "Corporate tax regulations are often intricate and subject to frequent updates. Companies must balance compliance with strategic planning to maintain financial health. Professional corporate tax services provide tailored solutions for reporting, planning, and audit defense, empowering businesses to focus on growth.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const CorporateTax = () => {
  return (
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="Corporate Tax Case Study"
        className="w-full h-auto rounded-lg mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      />
      
      {/* Project Content */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-2xl font-bold text-blue-800 text-center mb-6" variants={fadeInUp}>
          {contentData.title}
        </motion.h2>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Corporate tax management is essential for all registered companies. It involves detailed reporting of income, expenses, and eligible deductions to the tax authorities to determine the payable tax accurately.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Efficient corporate tax planning can lead to significant savings and improve the company’s cash flow. Our services provide insight into tax incentives and compliance strategies suited to your business.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Corporate tax strategy meeting"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Corporate financial analysis"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          Partnering with tax experts ensures your corporate tax submissions are accurate and timely, reducing risks of audits and penalties while supporting sustainable business growth.
        </motion.div>
      </motion.div>

      {/* Project Tips */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <motion.h2 className="text-2xl font-bold text-blue-800 text-center mb-6" variants={fadeInUp}>
          Project Tips
        </motion.h2>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Staying proactive with corporate tax compliance reduces risks and improves your company's financial stability.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Regularly update your accounting records and work closely with your tax advisor.
          <br /><br />
          Understand tax deadlines and prepare filings in advance to avoid last-minute issues.
          <br /><br />
          Utilize government tax incentives applicable to your industry to maximize benefits.
        </motion.div>

        <motion.ul className="list-disc pl-6 mt-6 space-y-2 text-[16px]" variants={fadeInUp}>
          {contentData.tips.map((tip, index) => (
            <li key={index} className="text-[14px] text-blue-900">
              {tip}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Overview & Challenges */}
      <motion.div
        className="mb-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-2xl font-bold text-blue-800 text-center mb-6" variants={fadeInUp}>
          Overview & Challenges
        </motion.h2>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          Corporate tax compliance can be challenging due to constantly changing tax laws and complex regulations. Companies must navigate through multiple tax regimes, ensure accurate documentation, and stay prepared for potential audits. Expert support helps businesses manage these challenges effectively while optimizing their tax obligations.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CorporateTax;
