// import React from 'react';

// const FeaturesSection = () => {
//   const features = [
//     {
//       id: 1,
//       title: 'Best Taxation Service',
//       description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
//       icon: '/images/img_taxservice_1.svg',
//       iconBgColor: 'bg-blue-500'
//     },
//     {
//       id: 2,
//       title: 'Ensure Security',
//       description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
//       icon: '/images/img_hugeiconssecuritylock.svg',
//       iconBgColor: 'bg-blue-500'
//     },
//     {
//       id: 3,
//       title: 'Experts Team',
//       description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
//       icon: '/images/img_team2_1.svg',
//       iconBgColor: 'bg-blue-500'
//     },
//     {
//       id: 4,
//       title: '24/7 Support',
//       description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
//       icon: '/images/img_support_1.svg',
//       iconBgColor: 'bg-blue-500'
//     }
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-center mb-8">
//           <div className="inline-flex items-center bg-gray-600 rounded-xl">
//             <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
//               <span className="text-white font-semibold">%</span>
//             </div>
//             <span className="text-base font-semibold text-blue-500 px-4">Our Features</span>
//           </div>
//         </div>

//         <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
//           Our Awesome Features
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {features.map((feature) => (
//             <div key={feature.id} className="relative">
//               <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
//                 <div className="w-[112px] h-[113px] bg-white rounded-full flex items-center justify-center">
//                   <div className={`w-[94px] h-[94px] ${feature.iconBgColor} rounded-full flex items-center justify-center`}>
//                     <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
//                   </div>
//                 </div>
//               </div>
              
//               <div className="bg-blue-700 rounded-2xl p-6 pt-16 text-center">
//                 <h3 className="text-lg font-extrabold text-white mb-4">{feature.title}</h3>
//                 <p className="text-base font-semibold text-white">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;



import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Best Taxation Service',
      description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      icon: '/images/img_taxservice_1.svg',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Ensure Security',
      description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      icon: '/images/img_hugeiconssecuritylock.svg',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Experts Team',
      description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      icon: '/images/img_team2_1.svg',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'It is a long established fact that a reader will be distracted by the readable content of the page looking layout point.',
      icon: '/images/img_support_1.svg',
      iconBgColor: 'bg-blue-500',
    },
  ];

  // Animation Variants for the feature cards
  const featureCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Our Features</span>
          </div>
        </div>

        <motion.h2
          className="text-4xl font-bold text-blue-800 text-center mb-16"
          variants={featureCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Our Awesome Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="relative"
              variants={featureCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2">
                <div className="w-[112px] h-[113px] bg-white rounded-full flex items-center justify-center">
                  <div className={`w-[94px] h-[94px] ${feature.iconBgColor} rounded-full flex items-center justify-center`}>
                    <img src={feature.icon} alt={feature.title} className="w-16 h-16" />
                  </div>
                </div>
              </div>

              <div className="bg-blue-700 rounded-2xl p-6 pt-16 text-center">
                <h3 className="text-lg font-extrabold text-white mb-4">{feature.title}</h3>
                <p className="text-base font-semibold text-white">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
