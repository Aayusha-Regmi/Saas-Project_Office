// import React from 'react';
// import Button from '../../../components/ui/Button';

// const AboutSection = () => {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex items-center bg-gray-600 rounded-xl">
//             <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
//               <span className="text-white font-semibold">%</span>
//             </div>
//             <span className="text-base font-semibold text-blue-500 px-4">About Us</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//         <div className="md:col-span-1 relative">
//             <img src="/images/img_image.png" alt="About Us" className="w-full h-auto rounded-full" />
//             <div className="absolute bottom-[7rem] left-[1rem] bg-blue-500 p-2 rounded-lg">
//               <p className="text-sm font-bold text-white text-center">
//                <span className='text-2xl'>30</span><br />Years of<br />Experience
//               </p>
//             </div>
//           </div>

//           <div className="md:col-span-1">
//             <h2 className="text-4xl font-bold text-blue-800 mb-8">
//               Maximize Your Tax And<br />Savings With Us
//             </h2>
            
//             <p className="text-xl font-semibold text-gray-400 mb-8">
//               Finance Minister Barshaman Pun has tabled a budget of<br />
//               Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
//             </p>
            
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <div className="flex items-center">
//                 <img src="/images/img_image_29.png" alt="Feature" className="w-[38px] h-[38px] mr-3" />
//                 <div>
//                   <h3 className="text-sm font-bold">Professional Team</h3>
//                   <p className="text-xs text-gray-400">It has survived words which not only five centuries.</p>
//                 </div>
//               </div>
              
//               <div className="flex items-center">
//                 <img src="/images/img_image_30.png" alt="Feature" className="w-[38px] h-[38px] mr-3" />
//                 <div>
//                   <h3 className="text-sm font-bold">Clients Satisfaction</h3>
//                   <p className="text-xs text-gray-400">Take a look at our round up of the best shows.</p>
//                 </div>
//               </div>
//             </div>
            
//             <Button 
//               variant="primary" className="flex items-center"
//             >
//               Discover More
//               <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;




import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

// Animation Variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
    },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: 'easeInOut',
    },
  },
};

const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">About Us</span>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image */}
          <motion.div className="md:col-span-1 relative" variants={fadeInLeft}>
            <img src="/images/img_image.png" alt="About Us" className="w-full h-auto rounded-full" />
            <motion.div
              className="absolute bottom-[7rem] left-[1rem] bg-blue-500 p-2 rounded-lg"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="text-sm font-bold text-white text-center">
                <span className="text-2xl">30</span><br />Years of<br />Experience
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div className="md:col-span-1" variants={fadeInRight}>
            <h2 className="text-4xl font-bold text-blue-800 mb-8">
              Maximize Your Tax And<br />Savings With Us
            </h2>

            <p className="text-xl font-semibold text-gray-400 mb-8">
              Finance Minister Barshaman Pun has tabled a budget of<br />
              Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
            </p>

            <motion.div className="grid grid-cols-2 gap-4 mb-8" variants={fadeInUp}>
              <div className="flex items-center">
                <img src="/images/img_image_29.png" alt="Feature" className="w-[38px] h-[38px] mr-3" />
                <div>
                  <h3 className="text-sm font-bold">Professional Team</h3>
                  <p className="text-xs text-gray-400">It has survived words which not only five centuries.</p>
                </div>
              </div>
              <div className="flex items-center">
                <img src="/images/img_image_30.png" alt="Feature" className="w-[38px] h-[38px] mr-3" />
                <div>
                  <h3 className="text-sm font-bold">Clients Satisfaction</h3>
                  <p className="text-xs text-gray-400">Take a look at our round up of the best shows.</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Button variant="primary" className="flex items-center">
                Discover More
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
