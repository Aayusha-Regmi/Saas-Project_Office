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
  title: "Corporate Tax Planning",
  description:
    "Corporate tax planning helps businesses reduce their tax liability through strategic financial management while maintaining full legal compliance. It involves assessing deductions, credits, deferrals, and the company’s structure to make informed decisions that positively impact profitability.",
  tips: [
    "Reassess your entity type annually—certain structures like S-Corps or LLPs may offer better tax efficiency depending on profits and reinvestment plans.",
    "Consider using deferred compensation strategies for executives to spread tax liabilities over multiple years.",
    "Stay updated on local tax amendments and new credits like green energy incentives or regional investment benefits."
  ],
  overview:
    "Successfully navigating corporate taxes requires more than just filing returns. It demands a proactive, year-round approach to identify tax-saving opportunities and avoid pitfalls. Challenges arise in adapting to regulatory updates, managing cross-border transactions, and allocating income and expenses strategically. For growing businesses, aligning tax planning with operational and expansion goals can provide a major financial advantage. Missteps can lead to audits, fines, or missed savings, making expert oversight and planning essential.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const MainContent = () => {
  return (
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="Corporate Tax Planning Case Study"
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
          Tax planning isn't just about savings it's about shaping a long-term business strategy. It plays a pivotal role in budgeting, forecasting, and investor reporting. Sound planning ensures cash flow is preserved, liabilities are minimized, and capital is deployed efficiently.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Companies that implement forward-thinking tax strategies gain an edge in financial management. Through well-documented planning, they build stronger compliance profiles and reduce audit risks, setting a foundation for sustainable growth.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Corporate tax planning meeting"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Financial document review"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          Effective planning involves scenario modeling and risk analysis. Businesses should simulate various tax events—like changes in income, asset sales, or acquisitions—to assess their financial impacts and plan accordingly.
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
          Small planning changes can lead to significant tax savings. Whether you're a startup or an enterprise, it's critical to evaluate every fiscal decision through a tax lens.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Integrate your accounting and tax teams early in the planning cycle. This alignment ensures expenses, asset purchases, and contract structures are optimized before execution.
          <br /><br />
          Utilize software tools or third-party advisors for compliance tracking, deadline alerts, and real-time tax exposure dashboards.
          <br /><br />
          Keep comprehensive documentation. In case of audits, being able to justify your decisions and demonstrate consistency is your strongest defense.
        </motion.div>

        <motion.ul className="list-disc pl-6 mt-6 space-y-2 text-[14px] " variants={fadeInUp}>
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
          Businesses often struggle with balancing aggressive tax saving strategies with legal boundaries. International operations, multi-state filings, and frequent regulatory shifts make this landscape highly dynamic. The challenge lies in creating a tax plan that is both flexible and defensible, especially as organizations scale. Prioritizing documentation, expert consultation, and regular reviews is essential to stay ahead of audits and capture all legitimate savings opportunities.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainContent;
