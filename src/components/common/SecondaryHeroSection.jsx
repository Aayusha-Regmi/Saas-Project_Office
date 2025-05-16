// import React from 'react';
// import PropTypes from 'prop-types';
// import Breadcrumbs from '../ui/Breadcrumbs';

// const SecondaryHeroSection = ({ title, breadcrumbItem }) => {
//   return (
//     <section 
//       className="relative py-16 bg-cover bg-center text-white" style={{ backgroundImage: 'url("/images/img_image.png")' }}
//     >
//       <div className="absolute inset-0 bg-[#071e45] opacity-70"></div>
//       <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center py-8">
//         <h1 className="text-2xl md:text-3xl font-extrabold mb-4">{title}</h1>
//         <Breadcrumbs items={breadcrumbItem} />
//       </div>
//     </section>
//   );
// };



// export default SecondaryHeroSection;

import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Breadcrumbs from '../ui/Breadcrumbs';

/* ──────────────────────────────
   Animation container only
   ────────────────────────────── */
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const SecondaryHeroSection = ({ title, breadcrumbItem }) => (
  <section
    className="relative py-24 bg-fixed bg-center bg-no-repeat bg-cover text-white"
    style={{
      backgroundImage:
        'url("/images/img_image.png")',
    }}
  >
    {/* Optional dark overlay for contrast */}
    <div className="absolute inset-0 bg-[#071e45]/70" />

    {/* Animated content container only */}
    <motion.div
      className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
        {title}
      </h1>

      <div>
        <Breadcrumbs items={breadcrumbItem} />
      </div>
    </motion.div>
  </section>
);

SecondaryHeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbItem: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SecondaryHeroSection;
