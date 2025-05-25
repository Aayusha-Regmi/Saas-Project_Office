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
  title: "Tax Advisory Support",
  description:
    "Tax advisory support ensures businesses and individuals are compliant with tax regulations while taking advantage of strategic planning opportunities. Advisors interpret evolving tax codes, mitigate risks, and align decisions with financial goals. This support is critical during audits, restructuring, or regulatory transitions.",
  tips: [
    "Consult a tax advisor before making major business decisions like mergers or acquisitions.",
    "Stay informed on local and international tax policy changes that affect your operations.",
    "Document all financial transactions clearly for easier advisory and audit support."
  ],
  overview:
    "Tax advisory services go beyond filing returns — they provide expert insights to navigate complex tax environments. Whether it's advising on cross-border compliance, sector-specific exemptions, or mitigating tax liabilities, professional support helps prevent costly mistakes. Having an advisory team ensures every decision is made with tax efficiency in mind.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const TaxAdvisory = () => {
  return (
    <div className="py-12 md:py-20  relative overflow-hidden">
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="Tax Advisory Support Case Study"
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
          With the increasing complexity of tax regulations, advisory services help clients manage risk and make confident decisions backed by legal knowledge.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Advisors can help identify tax credits, optimize structuring, and anticipate compliance issues before they arise — saving time and money.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Tax planning consultation"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Advisory document preparation"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          A proactive advisor works year-round — not just during filing season — to ensure your strategies are sustainable and compliant at every stage.
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
          Tax advisory isn't only for large corporations — small businesses and individuals benefit from custom advice that avoids missteps.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Engage an advisor early in the fiscal year for better planning.
          <br /><br />
          Use a shared document system to collaborate and keep everything traceable.
          <br /><br />
          Conduct periodic reviews to adjust strategy based on policy or business changes.
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
          One of the biggest challenges is keeping up with dynamic tax laws that vary by jurisdiction and industry. Misinterpretation or delay in adapting to these changes can cause compliance risks. Additionally, organizations often struggle with implementing tax recommendations operationally, requiring close coordination between finance and operations. Advisory support bridges this gap and ensures clarity throughout.
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default TaxAdvisory;
