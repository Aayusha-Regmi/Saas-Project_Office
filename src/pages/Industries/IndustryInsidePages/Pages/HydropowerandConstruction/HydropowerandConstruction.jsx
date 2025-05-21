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
const HydropowerandConstruction = () => {
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
              Hydropower &amp; Construction Industry Services
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              SAAS provides comprehensive audit, tax, and consultancy solutions
              tailored for the Hydropower and Construction sectors. Our dedicated
              team of professionals has in-depth experience in dealing with
              infrastructure projects across Nepal.
            </p>
            <p className="text-gray-700 text-xl mb-4">
              We support our clients through various phases of project lifecycle
              — from financial feasibility and due diligence, to execution and
              regulatory compliance.
            </p>
            <p className="text-gray-700 text-xl">
              Our services are designed to ensure transparency, efficient capital
              utilization, and alignment with regulatory frameworks for both
              public and private construction and hydropower entities.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Key Areas of Expertise
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Hydropower Project Audits</li>
              <li>Construction Company Statutory Audits</li>
              <li>Cost Estimation &amp; Budgeting Services</li>
              <li>Feasibility Studies &amp; Due Diligence</li>
              <li>Project Risk Assessment &amp; Mitigation</li>
              <li>Compliance with Infrastructure Regulations</li>
              <li>Capital Investment Advisory</li>
            </ul>

            <Button
              variant="secondary"
              onClick={handleLearnmoreClick}
              className="mt-4"
            >
              Learn More About Our Infrastructure Services
            </Button>
          </motion.section>
        </motion.div>

        {/* ── Right column (optional) ─────────────────────────── */}
        <motion.div variants={fadeSlide(-40)}>
          {/* Optional content like <IndustriesSection /> */}
          {/* <IndustriesSection /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HydropowerandConstruction;
