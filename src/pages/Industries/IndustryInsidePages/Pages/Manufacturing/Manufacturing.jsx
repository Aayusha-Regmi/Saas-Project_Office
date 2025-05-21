import React from "react";
import { motion } from "framer-motion";
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
const Manufacturing = () => {
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
              Manufacturing Industry Solutions
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              NBSM has a team of young and dynamic professionals with core
              competency in the Manufacturing Sector. We have been closely
              associated with the manufacturing industry by providing a wide
              range of services including Risk Advisory, Auditing, Consultancy,
              and Tax Advisory.
            </p>
            <p className="text-gray-700 text-xl">
              Our clientele includes some of Nepal’s leading names such as the
              top Cement Manufacturers and one of the largest Pallet Feed
              producers. We bring tailored expertise to enhance operational
              efficiency, ensure regulatory compliance, and support business
              growth.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Our Expertise in Manufacturing
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Hydropower Equipment Manufacturing</li>
              <li>Cement Industry</li>
              <li>Feed Industry</li>
              <li>Plastic and Pipe Industry</li>
              <li>Iron &amp; Steel Industry</li>
              <li>Food &amp; Beverage Industry</li>
              <li>Electronics Manufacturing</li>
              <li>Tyre Manufacturing Industry</li>
              <li>Sugar Industry</li>
            </ul>

            <Button
              variant="secondary"
              onClick={handleLearnmoreClick}
              className="mt-4"
            >
              Learn More About Our Manufacturing Services
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

export default Manufacturing;
