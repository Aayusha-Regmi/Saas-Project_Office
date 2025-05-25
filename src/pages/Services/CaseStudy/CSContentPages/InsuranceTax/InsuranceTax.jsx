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
  title: "Insurance Tax",
  description:
    "Insurance tax encompasses the taxation of premiums, policy transactions, and reinsurance agreements. Businesses and insurers alike must understand premium tax obligations, local and international filing requirements, and compliance practices to ensure accurate reporting and reduce liability risks.",
  tips: [
    "Verify that premium taxes are properly applied based on policyholder location and type of coverage.",
    "Maintain detailed documentation of claims, payouts, and reinsurance to support audit readiness.",
    "Assess cross-border insurance arrangements for potential double taxation or treaty relief opportunities."
  ],
  overview:
    "Dealing with insurance tax is multifaceted, especially for companies managing large insurance portfolios or self-insurance setups. From identifying which jurisdictions impose premium tax to determining if policies are taxable or exempt, the process demands careful navigation. Inaccuracies can lead to significant penalties and loss of credibility. Organizations must build internal controls that align with evolving tax laws and integrate tax workflows with financial systems to automate calculations and reduce manual errors.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const InsuranceTax = () => {
  return (
    <div className="py-12 md:py-20  relative overflow-hidden">
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="Insurance Tax Case Study"
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
          Insurance tax regulations differ by jurisdiction, making compliance a complex task for multinational businesses. Understanding how tax applies across life, health, property, and liability insurance is essential for strategic planning.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Failure to accurately file premium tax returns can result in financial penalties and reputational damage. Having a process to regularly reconcile filings with accounting entries is key to avoiding discrepancies.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Insurance tax documentation"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Insurance compliance audit"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          Insurers must track whether a policy is taxable at issuance, renewal, or both. This depends on policy type, location, and whether the insurer is foreign or domestic. Missteps in classification can result in missed filings and tax exposure.
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
          Make sure you're using up-to-date tax rates and understand whether taxes are due on gross or net premiums. Review exemption statuses frequently as policies and regions may change.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Integrate premium tax calculations into policy administration systems.
          <br /><br />
          Coordinate closely with tax and legal teams when entering new markets or offering new policy types.
          <br /><br />
          Consider outsourcing premium tax compliance if in-house expertise is limited, especially in regulated markets.
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
          Insurance tax compliance is increasingly subject to scrutiny from tax authorities. Companies must maintain clear documentation, keep pace with changing rates and rules, and ensure alignment between policy records and tax filings. Challenges include managing surplus line taxes, jurisdictional inconsistencies, and reconciling tax data across multiple systems. A proactive and structured approach can mitigate risks while enhancing transparency.
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};

export default InsuranceTax;
