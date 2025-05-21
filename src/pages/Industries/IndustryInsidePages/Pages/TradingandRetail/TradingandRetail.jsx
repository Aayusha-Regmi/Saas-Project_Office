import React from "react";
import { motion } from "framer-motion";
import IndustriesSection from "../../InsidePageSecondaryComponent/IndustriesSection";
import Button from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";

/* ─────────────────────────────────────────────────────────── */
/* Framer Motion variants                                      */
/* ─────────────────────────────────────────────────────────── */
const fadeSlide = (y = 40) => ({
  hidden: { opacity: 0, y },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
});

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

/* ─────────────────────────────────────────────────────────── */
/* Component                                                   */
/* ─────────────────────────────────────────────────────────── */
const TradingandRetail = () => {
  const navigate = useNavigate();

  const handleLearnmoreClick = () => {
    navigate("/services");
    setTimeout(() => window.scrollTo({ top: 0 }), 0);
  };

  return (
    <div className="container mx-auto py-12">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-12"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* ── Left column ─────────────────────────────────────── */}
        <motion.div
          className="md:col-span-2 flex flex-col gap-8"
          variants={fadeSlide()}
        >
          {/* Section 1 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Trading &amp; Retail Sector Services
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              SAAS has a team of young and dynamic professionals with core
              competency in the Trading Sector. We have long-standing experience
              assisting trading businesses through our comprehensive Risk
              Advisory, Statutory Audit, Tax Advisory, and Consultancy Services.
            </p>
            <p className="text-gray-700 text-xl">
              Our in-depth understanding of the trading and retail industry
              allows us to offer practical insights, ensure compliance, and
              support sustainable growth across diverse domains.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Our Expertise in Trading &amp; Retail
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Automobile</li>
              <li>Biotech</li>
              <li>Hardware</li>
              <li>Electronic Equipment</li>
              <li>Mobile and Telecom</li>
              <li>Mines &amp; Refinery</li>
              <li>Retail</li>
            </ul>

            <Button
              variant="secondary"
              onClick={handleLearnmoreClick}
              className="mt-4"
            >
              Learn More About Our Trading Services
            </Button>
          </motion.section>
        </motion.div>

        {/* ── Right column (optional extra content) ───────────── */}
        <motion.div variants={fadeSlide(-40)}>
          {/* <IndustriesSection /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TradingandRetail;
