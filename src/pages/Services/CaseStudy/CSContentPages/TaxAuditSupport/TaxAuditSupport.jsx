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
  title: "Tax Audit Support",
  description:
    "Tax audits can be complex and stressful, requiring thorough preparation and expert guidance. Tax audit support services help organizations respond efficiently to tax authorities, ensuring all documentation is accurate and defenses are well-prepared. The goal is to minimize risk, avoid penalties, and resolve audits smoothly.",
  tips: [
    "Maintain organized and transparent financial records year-round to ease audit processes.",
    "Respond promptly and professionally to all audit inquiries to build credibility with tax authorities.",
    "Engage experienced tax professionals to review audit notices and prepare detailed responses."
  ],
  overview:
    "Audit support is essential for businesses facing tax inspections, offering strategic advice, document review, and negotiation assistance. Proactive support reduces the likelihood of adverse findings by addressing discrepancies early. It also helps companies understand their rights and obligations during the audit, resulting in better outcomes.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const TaxAuditSupport = () => {
  return (
    <div className="py-12 md:py-20 relative overflow-hidden">
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="Tax Audit Support Case Study"
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
          Facing a tax audit requires detailed attention to compliance and documentation. Expert support helps businesses organize their records, identify gaps, and build strong audit responses.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Effective audit support minimizes disruptions and potential penalties by ensuring transparency and timely communication with tax authorities.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Tax audit preparation meeting"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Audit report analysis"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          Having a clear strategy and professional audit support empowers companies to face audits confidently and protect their financial interests.
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
          Proper preparation and early involvement of audit experts can significantly improve audit outcomes.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Keep all financial documents and correspondence well-organized and easily accessible.
          <br /><br />
          Document all communication with auditors to ensure clarity and accountability.
          <br /><br />
          Review previous audit reports to identify recurring issues and mitigate them proactively.
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
          Tax audits present challenges like complex regulatory requirements and tight deadlines. Organizations often face difficulties gathering all requested information timely, interpreting audit scope correctly, and negotiating disputed findings. Professional audit support mitigates these challenges by providing expertise, documentation, and negotiation skills that protect the client’s interests.
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default TaxAuditSupport;
