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
  title: "International Tax",
  description:
    "International tax refers to the rules and strategies governing how individuals and corporations are taxed across borders. Navigating this complex field requires an understanding of treaties, transfer pricing laws, foreign tax credits, and compliance obligations in multiple jurisdictions.",
  tips: [
    "Conduct regular transfer pricing reviews to ensure documentation meets OECD standards.",
    "Use tax treaties to mitigate double taxation when operating in multiple countries.",
    "Ensure timely filing of foreign entity disclosures and cross-border transaction reports."
  ],
  overview:
    "With businesses increasingly operating globally, international tax has become a critical focus for minimizing risk and optimizing tax outcomes. From structuring overseas subsidiaries to repatriating profits, each decision has significant tax consequences. Cross-border compliance failures may lead to hefty penalties, reputational harm, and increased scrutiny from tax authorities. A robust international tax strategy aligns with business goals while ensuring transparency, legal adherence, and cost-efficiency.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const InternationalTax = () => {
  return (
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="International Tax Case Study"
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
          Managing international tax obligations requires a clear understanding of local laws, permanent establishment risks, and anti-avoidance regulations in foreign jurisdictions.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          As tax authorities share more data globally, transparency has become essential. Multinationals need centralized tax policies and intercompany pricing structures that stand up to scrutiny.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Cross-border tax strategy"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Global tax compliance"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          International expansion introduces tax challenges including withholding taxes, exit taxes, and differing tax year rules. Businesses must balance tax efficiency with full compliance and ethical practices.
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
          Align global tax planning with business operations to avoid unintentional permanent establishments or mismatches in revenue recognition. Understand each country's documentation requirements before filing.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Consider local tax incentives for R&D, investment, or employment when entering new countries.
          <br /><br />
          Regularly review international intercompany agreements for consistency and compliance.
          <br /><br />
          Utilize tax technology tools to monitor obligations across regions in real time.
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
          Global tax laws continue to evolve, especially with initiatives like BEPS and Pillar Two. Navigating international tax involves constant updates to policy and process, from hybrid mismatch rules to digital service taxes. Managing data quality and having experienced local advisors are essential to staying compliant and optimizing outcomes. Inadequate planning can lead to overpayment, audits, or regulatory disputes.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InternationalTax;
