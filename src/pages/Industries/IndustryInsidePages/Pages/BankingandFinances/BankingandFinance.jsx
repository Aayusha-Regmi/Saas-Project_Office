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
const BankingFinancialServicesPage = () => {
  const navigate = useNavigate();

  const handleLearnmoreClick = () => {
    navigate("/services");
    // ensure top of page after route change
    setTimeout(() => window.scrollTo({ top: 0 }), 0);
  };

  return (
    <div className="container mx-auto py-12">
      {/* grid wrapper with staggered children */}
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
              Banking &amp; Financial Services Solutions
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              Our comprehensive solutions for the banking and financial
              services industry are designed to help institutions navigate
              complex regulatory environments, optimize operations, and deliver
              exceptional customer experiences.
            </p>
            <p className="text-gray-700 text-xl mb-4">
              With our deep industry expertise and cutting-edge technology, we
              provide tailored services that address the unique challenges faced
              by banks, credit unions, investment firms, and other financial
              institutions.
            </p>
            <p className="text-gray-700 text-xl">
              From tax planning and compliance to digital transformation and
              risk management, our team of specialists works closely with you to
              develop strategies that drive growth, enhance efficiency, and
              ensure regulatory compliance.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Key Services for Financial Institutions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Tax planning and compliance for financial institutions</li>
              <li>Regulatory reporting and compliance</li>
              <li>Risk assessment and management</li>
              <li>Financial statement preparation and analysis</li>
              <li>Mergers and acquisitions advisory</li>
              <li>Digital transformation consulting</li>
              <li>Internal audit and control systems</li>
              <li>Anti-money laundering (AML) compliance</li>
            </ul>

            <Button
              variant="secondary"
              onClick={handleLearnmoreClick}
              className="mt-4"
            >
              Learn More About Our Financial Services
            </Button>
          </motion.section>
        </motion.div>

        {/* ── Right column (optional extra content) ───────────── */}
        <motion.div variants={fadeSlide(-40)}>
          {/* If you later add <IndustriesSection /> or any illustration,
              animations will already be in place. */}
          {/* <IndustriesSection /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BankingFinancialServicesPage;
