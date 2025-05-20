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
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/industry-updates',
    },
    {
      id: 2,
      title: 'SaaS Features & Benefits',
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/saas-features',
    },
    {
      id: 3,
      title: 'Upcoming Webinars\n& Events',
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
      ribbonImage: '/images/img_group_1171275970.svg',
      buttonLink: '/insights/webinars-events',
    },
    {
      id: 4,
      title: 'Compliance & Legal\nResources',
      description: 'Finance Minister Barshaman Pun has tabled a budget of\nRs. 18.60 trillion for the fiscal',
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
