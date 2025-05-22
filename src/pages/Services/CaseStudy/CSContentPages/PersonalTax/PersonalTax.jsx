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
  title: "Personal Tax",
  description:
    "Personal tax planning involves optimizing your income, expenses, and savings to reduce your tax liability legally and efficiently. Individuals need to understand applicable deductions, exemptions, and tax slabs to make informed financial decisions and avoid penalties or overpayments.",
  tips: [
    "Track all sources of income — including freelance work and investments — for accurate tax reporting.",
    "Utilize deductions for health insurance, education, and retirement contributions where applicable.",
    "File returns on time to avoid interest charges and maintain financial credibility."
  ],
  overview:
    "Managing personal taxes is not just about filing once a year. It’s an ongoing process of aligning your earnings, spending, and investments with the tax code. Effective personal tax strategies help in retaining more of your income legally while staying compliant. With rising financial complexity, working with advisors or using modern tax tools has become increasingly valuable.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const PersonalTax = () => {
  return (
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="Personal Tax Case Study"
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
          Personal tax obligations differ based on income types, employment status, and location. Knowing the differences helps avoid unexpected liabilities.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Whether you're a salaried professional or self-employed, tailored planning ensures you're not overpaying or missing available tax-saving opportunities.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Filing personal taxes"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Analyzing income for tax benefits"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          It's important to maintain financial records year-round to support any tax claims and make the filing process stress-free and accurate.
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
          A proactive approach to tax planning can increase your savings while helping you avoid last-minute surprises or audits.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Consider using automated tools or mobile apps to track deductible expenses throughout the year.
          <br /><br />
          Evaluate if tax-saving investments align with your long-term financial goals, not just short-term relief.
          <br /><br />
          Stay updated on annual tax code changes that may impact your liability.
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
          Many individuals struggle with identifying legitimate deductions or understanding which income is taxable. A lack of awareness can lead to audits or fines. Additionally, life changes like marriage, property purchase, or shifting employment may significantly affect one’s tax status — requiring updated planning each year. The challenge is staying proactive, organized, and informed.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PersonalTax;
