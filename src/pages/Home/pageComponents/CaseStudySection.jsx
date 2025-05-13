// import React, { useState } from 'react';

// const CaseStudySection = () => {
//   const [activeTab, setActiveTab] = useState('taxAdvice');
  
//   const caseStudies = {
//     taxAdvice: {
//       id: 1,
//       title: 'Corporate Tax Planning',
//       image: '/images/img_mask_group.png',
//       category: 'Tax Advice'
//     },
//     taxPlanning: {
//       id: 2,
//       title: 'Corporate Tax Planning',
//       image: '/images/img_mask_group.png',
//       category: 'Tax Planning'
//     },
//     personalTax: {
//       id: 3,
//       title: 'Corporate Tax Planning',
//       image: '/images/img_mask_group.png',
//       category: 'Personal Tax'
//     }
//   };

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex items-center bg-gray-600 rounded-xl">
//             <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
//               <span className="text-white font-semibold">%</span>
//             </div>
//             <span className="text-base font-semibold text-blue-500 px-4">Case Study</span>
//           </div>
//         </div>

//         <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
//           Recent Completed Award<br />Winning Case Study
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="relative">
//             <img src={caseStudies.taxAdvice.image} alt="Case Study" className="w-full h-auto rounded-md" />
//             <div className="absolute bottom-0 left-0 right-0 p-4">
//               <div className="absolute -top-16 left-0">
//                 <div className="bg-blue-500 w-[67px] h-[67px] rounded-full flex items-center justify-center">
//                   <img src="/images/img_vector_30x22.svg" alt="Icon" className="w-[30px] h-[22px]" />
//                 </div>
//               </div>
//               <p className="text-base font-semibold text-blue-500 mb-2">{caseStudies.taxAdvice.category}</p>
//               <h3 className="text-lg font-extrabold text-blue-800">{caseStudies.taxAdvice.title}</h3>
//             </div>
//           </div>

//           <div className="relative">
//             <img src={caseStudies.taxPlanning.image} alt="Case Study" className="w-full h-auto rounded-md" />
//             <div className="absolute bottom-0 left-0 right-0 p-4">
//               <p className="text-base font-semibold text-blue-500 mb-2">{caseStudies.taxPlanning.category}</p>
//               <h3 className="text-lg font-extrabold text-blue-800">{caseStudies.taxPlanning.title}</h3>
//             </div>
//           </div>

//           <div className="relative">
//             <img src={caseStudies.personalTax.image} alt="Case Study" className="w-full h-auto rounded-md" />
//             <div className="absolute bottom-0 left-0 right-0 p-4">
//               <p className="text-base font-semibold text-blue-500 mb-2">{caseStudies.personalTax.category}</p>
//               <h3 className="text-lg font-extrabold text-blue-800">{caseStudies.personalTax.title}</h3>
//             </div>
//             <div className="absolute -bottom-8 right-6">
//               <div className="bg-blue-500 w-[67px] h-[67px] rounded-full flex items-center justify-center">
//                 <img src="/images/img_vector_2.svg" alt="Icon" className="w-[30px] h-[22px]" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CaseStudySection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

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

const CaseStudySection = () => {
  const [activeTab, setActiveTab] = useState('taxAdvice');

  const caseStudies = {
    taxAdvice: {
      id: 1,
      title: 'Corporate Tax Planning',
      image: '/images/img_mask_group.png',
      category: 'Tax Advice'
    },
    taxPlanning: {
      id: 2,
      title: 'Corporate Tax Planning',
      image: '/images/img_mask_group.png',
      category: 'Tax Planning'
    },
    personalTax: {
      id: 3,
      title: 'Corporate Tax Planning',
      image: '/images/img_mask_group.png',
      category: 'Personal Tax'
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Case Study</span>
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl font-bold text-blue-800 text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Recent Completed Award<br />Winning Case Study
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {[caseStudies.taxAdvice, caseStudies.taxPlanning, caseStudies.personalTax].map((study, idx) => (
            <motion.div
              key={study.id}
              className="relative"
              variants={fadeInUp}
            >
              <img src={study.image} alt="Case Study" className="w-full h-auto rounded-md" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                {/* Custom Icon Location */}
                {idx === 0 && (
                  <div className="absolute -top-16 left-0">
                    <div className="bg-blue-500 w-[67px] h-[67px] rounded-full flex items-center justify-center">
                      <img src="/images/img_vector_30x22.svg" alt="Icon" className="w-[30px] h-[22px]" />
                    </div>
                  </div>
                )}

                <p className="text-base font-semibold text-blue-500 mb-2">{study.category}</p>
                <h3 className="text-lg font-extrabold text-blue-800">{study.title}</h3>
              </div>

              {idx === 2 && (
                <div className="absolute -bottom-8 right-6">
                  <div className="bg-blue-500 w-[67px] h-[67px] rounded-full flex items-center justify-center">
                    <img src="/images/img_vector_2.svg" alt="Icon" className="w-[30px] h-[22px]" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
