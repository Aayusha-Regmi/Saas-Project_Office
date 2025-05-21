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
const NGO_INGO = () => {
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
              NGO &amp; INGO Sector Services
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              We have a strong team of professionals dedicated to the
              Development Sector. Our services are designed to meet the unique
              needs of NGOs, INGOs, and other non-profit organizations operating
              across the regions of Nepal.
            </p>
            <p className="text-gray-700 text-xl">
              We offer a wide range of services including Statutory Audit,
              Internal Audit, Fund Audit, and Consultancy—ensuring transparency,
              accountability, and regulatory compliance in every engagement.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Audit and Advisory Expertise in Development Sector
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Non-Governmental Organizations (NGO)</li>
              <li>International Non-Governmental Organizations (INGO)</li>
              <li>Not-for-Profit Making Companies</li>
              <li>Charitable Trusts</li>
            </ul>

            <Button
              variant="secondary"
              onClick={handleLearnmoreClick}
              className="mt-4"
            >
              Learn More About Our Development Sector Services
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

export default NGO_INGO;
