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
const ElectronicsCommunicationPage = () => {
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
        {/* ── Left Column ─────────────────────────────────────── */}
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
              Electronics &amp; Communication Industry
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              SAAS have been involved in providing Consulting and Audit of
              Electronics and Communication Industry since its establishment.
            </p>
            <p className="text-gray-700 text-xl">
              We provide wide range of services to the Electronic and
              Communication Sector including Statutory Audit, Internal Audit,
              Tax and Consultancy Services across the regions of Nepal.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Electronics and Communication Industries We Work With
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Telecom</li>
              <li>Mobile</li>
              <li>Information Technology</li>
              <li>Electronics</li>
              <li>Ecommerce</li>
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

        {/* ── Right Column (placeholder) ─────────────────────── */}
        <motion.div variants={fadeSlide(-40)}>{/* Add content if needed */}</motion.div>
      </motion.div>
    </div>
  );
};

export default ElectronicsCommunicationPage;
