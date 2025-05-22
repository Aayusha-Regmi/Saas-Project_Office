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
  title: "Investment Advisor",
  description:
    "An investment advisor helps clients make informed decisions about where and how to invest their money, aligning strategies with personal goals and market dynamics. These professionals assess risk tolerance, build diversified portfolios, and provide insights backed by deep financial analysis.",
  tips: [
    "Start with a clear understanding of your financial goals and investment timeline.",
    "Diversify across asset classes to minimize risk and improve returns.",
    "Regularly review and rebalance your portfolio to stay aligned with your objectives."
  ],
  overview:
    "Working with an investment advisor can streamline your path to financial growth and security. Advisors analyze economic indicators, market performance, and individual client circumstances to craft tailored investment plans. Whether managing retirement funds or short-term capital, professional guidance ensures better decision-making in a volatile financial environment.",
  images: {
    main: "/images/img_image_39.png",
    content1: "/images/img_image_45.png",
    content2: "/images/img_image_46.png"
  }
};

const InvestmentAdvisor = () => {
  return (
    <div className="md:col-span-2">
      {/* Featured Image */}
      <motion.img 
        src={contentData.images.main}
        alt="Investment Advisor Case Study"
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
          A qualified advisor can help clients avoid emotional decision-making by focusing on long-term strategies rooted in data and discipline.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          They provide clarity on investment vehicles like mutual funds, ETFs, bonds, or real estate, tailoring choices to match risk profiles and lifestyle plans.
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10" variants={fadeInUp}>
          <motion.img
            src={contentData.images.content1}
            alt="Investment planning session"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={contentData.images.content2}
            alt="Analyzing portfolio performance"
            className="w-full h-auto rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px]" variants={fadeInUp}>
          Advisors also help in tax-efficient investment planning, estate strategies, and wealth transfer — adding significant value over time.
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
          Effective investment advice isn’t just about returns; it’s about helping clients sleep at night knowing their financial future is secure.
        </motion.div>

        <motion.div className="content-paragraph font-normal text-[16px] mb-4" variants={fadeInUp}>
          Consider behavioral coaching as part of your offering to help clients navigate uncertain markets.
          <br /><br />
          Use goal-based investing to align plans with client lifestyles — retirement, education, or home ownership.
          <br /><br />
          Leverage digital tools for real-time performance tracking and portfolio rebalancing alerts.
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
          One of the key challenges for investment advisors is adapting strategies in response to market volatility, geopolitical events, and shifting regulatory frameworks. Success lies in transparent communication, tailored advice, and the ability to educate clients about both opportunities and risks. Building trust is fundamental, and so is staying updated on financial trends and technologies.
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InvestmentAdvisor;
