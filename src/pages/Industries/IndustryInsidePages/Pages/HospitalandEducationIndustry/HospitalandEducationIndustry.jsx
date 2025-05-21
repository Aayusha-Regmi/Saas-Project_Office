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
const HospitalandEducationIndustry = () => {
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
              Hospital &amp; Education Industry Solutions
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              SAAS has been actively involved in supporting the Hospital and
              Education sectors with robust consulting, audit, and compliance
              services since its inception.
            </p>
            <p className="text-gray-700 text-xl mb-4">
              We understand the operational and regulatory challenges that
              hospitals, medical institutions, schools, and universities face in
              Nepal. Our expert team provides customized solutions to enhance
              service delivery, financial sustainability, and accountability.
            </p>
            <p className="text-gray-700 text-xl">
              From statutory audits to internal control assessments and digital
              transformation, we ensure these institutions remain compliant,
              efficient, and prepared for the future.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Key Services for Hospitals &amp; Educational Institutions
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Statutory and Internal Audits</li>
              <li>Regulatory compliance and reporting</li>
              <li>Financial planning and budgeting</li>
              <li>Tax advisory and compliance services</li>
              <li>Digital record management and transformation</li>
              <li>Operational efficiency assessments</li>
              <li>Grant and donor fund auditing</li>
              <li>HR and payroll process reviews</li>
            </ul>

            <Button
              variant="secondary"
              onClick={handleLearnmoreClick}
              className="mt-4"
            >
              Learn More About Our Services
            </Button>
          </motion.section>
        </motion.div>

        {/* ── Right column (optional extra content) ───────────── */}
        <motion.div variants={fadeSlide(-40)}>
          {/* Reserved for illustrations or additional sections */}
          {/* <IndustriesSection /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HospitalandEducationIndustry;
