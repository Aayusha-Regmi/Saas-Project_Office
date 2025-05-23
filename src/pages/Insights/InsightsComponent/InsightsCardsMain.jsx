import React from 'react';
import { motion } from 'framer-motion';
import InsightsCard from '@/components/common/InsightsCard';

/* ────────────────────────────────────────────────────────────── */
/* Framer Motion Variants                                         */
/* ────────────────────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/* ────────────────────────────────────────────────────────────── */
/* Main Component                                                 */
/* ────────────────────────────────────────────────────────────── */
const InsightsCardsMain = () => {
  const insightCards = [
    {
      id: 1,
      title: 'Industry Updates',
      description: 'Stay informed with the latest trends in international and domestic taxation, business valuation, and M&A activities in Nepal’s dynamic regulatory landscape.',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/industry-updates',
    },
    {
      id: 2,
      title: 'SaaS Features & Benefits',
      description: 'Explore how SAAS delivers real-time tax advisory, compliance support, and due diligence services using a tech-driven approach powered by our expert team.',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/saas-features',
    },
    {
      id: 3,
      title: 'Upcoming Webinars & Events',
      description: 'Join sessions on Nepalese tax law, valuation techniques, and due diligence best practices led by SAAS professionals with hands-on transaction experience.',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/webinars-events',
    },
    {
      id: 4,
      title: 'Compliance & Legal Resources',
      description: 'Access expert guidance on DTAA, NR taxation, VAT consulting, litigation support, and regulatory filings, all tailored to Nepalese legal frameworks.',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/compliance-legal',
    },
  ];
  

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {insightCards.map((card) => (
        <motion.div key={card.id} variants={cardVariants}>
          <InsightsCard
            title={card.title}
            description={card.description}
            ribbonImage={card.ribbonImage}
            buttonLink={card.buttonLink}
            className="h-full"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default InsightsCardsMain;
