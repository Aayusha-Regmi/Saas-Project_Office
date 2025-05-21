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
const TravelTourismandHotel = () => {
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
              Travel, Tourism &amp; Hospitality Services
            </h2>
            <p className="text-gray-700 text-xl mb-4">
              SAAS has a team of young and dynamic professionals with expertise
              in Audit, Taxation, and Consultancy in the Hospitality Sector.
              We’ve been instrumental in the successful acquisitions of some of
              Nepal’s leading hotels and resorts.
            </p>
            <p className="text-gray-700 text-xl mb-4">
              Our advisory has supported Nepal's largest hotel groups with Due
              Diligence Review Services, Feasibility Studies, and Audit/
              Assurance Services. Our team has contributed significantly to some
              of the biggest hospitality deals in the country.
            </p>
          </motion.section>

          {/* Section 2 */}
          <motion.section
            className="bg-white p-6 rounded-lg shadow-sm"
            variants={fadeSlide()}
          >
            <h2 className="text-2xl font-bold text-[#071e45] mb-4">
              Our Expertise in the Travel &amp; Hospitality Sector
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-xl mb-6">
              <li>Travels &amp; Tour Industry</li>
              <li>Trekking and Expeditions Industry</li>
              <li>Resorts</li>
              <li>Hotels</li>
              <li>Multiplexes</li>
            </ul>

            <Button
              variant="secondary"
              onClick={handleLearnmoreClick}
              className="mt-4"
            >
              Learn More About Our Hospitality Services
            </Button>
          </motion.section>
        </motion.div>

        {/* ── Right column (optional) ─────────────────────────── */}
        <motion.div variants={fadeSlide(-40)}>
          {/* <IndustriesSection /> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TravelTourismandHotel;
