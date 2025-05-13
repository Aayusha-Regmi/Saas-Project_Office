// import React from 'react';
// import Button from '../../../components/ui/Button';

// const ConsultationSection = () => {
//   const handleContactUs = () => {
//     // Handle contact us action
//     console.log('Contact Us clicked');
//   };

//   return (
//     <section className="relative py-16 bg-cover bg-center" style={{ backgroundImage: 'url(img_image_36.png)' }}>
//       <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-700/80"></div>
      
//       <div className="container mx-auto px-4 relative z-10 text-center">
//         <h2 className="text-4xl font-bold text-white mb-8">
//           Maximize Your Potential With<br />Expert Consultation
//         </h2>
        
//         <p className="text-base font-semibold text-white max-w-2xl mx-auto mb-8">
//           It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.
//         </p>
        
//         <Button 
//           onClick={handleContactUs}
//           variant="primary" className="flex items-center mx-auto"
//         >
//           Contact Us
//           <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
//         </Button>
//       </div>
//     </section>
//   );
// };

// export default ConsultationSection;




import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ConsultationSection = () => {
  const handleContactUs = () => {
    console.log('Contact Us clicked');
  };

  return (
    <section
      className="relative py-16 bg-cover bg-center"
      style={{ backgroundImage: 'url(img_image_36.png)' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-700/80 to-blue-700/80"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 className="text-4xl font-bold text-white mb-8" variants={fadeInUp}>
          Maximize Your Potential With<br />Expert Consultation
        </motion.h2>

        <motion.p
          className="text-base font-semibold text-white max-w-2xl mx-auto mb-8"
          variants={fadeInUp}
        >
          It is a long established fact that a reader will be distracted by the readable content
          of the page looking layout point.
        </motion.p>

        <motion.div variants={fadeInUp}>
          <Button onClick={handleContactUs} variant="primary" className="flex items-center mx-auto">
            Contact Us
            <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ConsultationSection;
