// import React from 'react';
// import Button from '../../../components/ui/Button';

// const PricingSection = () => {
//   const pricingPlans = [
//     {
//       id: 1,
//       title: 'Basic',
//       price: '$359/Monthly',
//       features: [
//         { name: 'IRS Tax Problems', available: true },
//         { name: 'Business Tax Consulting', available: true },
//         { name: 'Tax Preparation and Planning', available: true },
//         { name: 'Tax Payroll Services', available: true },
//         { name: 'Bookkeeping and Virtual CFO', available: false },
//         { name: 'Accounting Virtual Controller', available: false }
//       ],
      
//       isPopular: false
//     },
//     {
//       id: 2,
//       title: 'Standard',
//       price: '$559/Monthly',
//       features: [
//         { name: 'IRS Tax Problems', available: true },
//         { name: 'Business Tax Consulting', available: true },
//         { name: 'Tax Preparation and Planning', available: true },
//         { name: 'Tax Payroll Services', available: true },
//         { name: 'Bookkeeping and Virtual CFO', available: true },
//         { name: 'Accounting Virtual Controller', available: false }
//       ],
     
//       isPopular: true
//     },
//     {
//       id: 3,
//       title: 'Premium',
//       price: '$959/Monthly',
//       features: [
//         { name: 'IRS Tax Problems', available: true },
//         { name: 'Business Tax Consulting', available: true },
//         { name: 'Tax Preparation and Planning', available: true },
//         { name: 'Tax Payroll Services', available: true },
//         { name: 'Bookkeeping and Virtual CFO', available: true },
//         { name: 'Accounting Virtual Controller', available: true }
//       ],
    
//       isPopular: false
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
//             <span className="text-base font-semibold text-blue-500 px-4">Pricing</span>
//           </div>
//         </div>

//         <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
//           Let's Check Our Pricing<br />Plan For You
//         </h2>
//         {/** */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//   {pricingPlans.map((plan) => (
//     <div
//       key={plan.id}
//       className={`bg-white rounded-sm shadow-md p-6 relative ${
//         plan.isPopular ? 'border-2 border-blue-500' : ''
//       }`}
//     >
//       {/* Plan Title Ribbon (always visible, top-right) */}
//       <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-md z-10 shadow-md">
//         <p className="text-sm font-semibold">{plan.title}</p>
//       </div>

//       {/* Price */}
//       <div className="pt-6">
//         <h3 className="text-4xl font-bold text-blue-800 text-center mb-1">
//           {plan.price}
//           <span className="text-base font-medium text-black">/Monthly</span>
//         </h3>

//         {/* Purchase Button */}
//         <Button
//           variant="primary"
//           className="w-full flex items-center justify-center my-6"
//         >
//           Purchase Now
//           <img
//             src="/images/img_materialsymbolsarrowinsert.svg"
//             alt=""
//             className="ml-2 w-6 h-6"
//           />
//         </Button>

//         {/* Feature List */}
//         <ul className="space-y-3">
//   {plan.features.map((feature, index) => (
//     <li key={index} className="flex items-start">
//       <img
//         src={
//           feature.available
//             ? '/images/img_vector_16x16.svg' // ✅ check icon
//             : '/images/img_vector_1.svg'     // ❌ cross icon
//         }
//         alt={feature.available ? 'Available' : 'Unavailable'}
//         className="w-4 h-4 mt-1 mr-3"
//       />
      
//         {feature.name}
    
//     </li>
//   ))}
// </ul>
//       </div>
//     </div>
//   ))}
// </div>


//       </div>
//     </section>
//   );
// };

// export default PricingSection;






import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const pricingPlans = [
    {
      id: 1,
      title: 'Basic',
      price: '$359/Monthly',
      features: [
        { name: 'IRS Tax Problems', available: true },
        { name: 'Business Tax Consulting', available: true },
        { name: 'Tax Preparation and Planning', available: true },
        { name: 'Tax Payroll Services', available: true },
        { name: 'Bookkeeping and Virtual CFO', available: false },
        { name: 'Accounting Virtual Controller', available: false }
      ],
      isPopular: false
    },
    {
      id: 2,
      title: 'Standard',
      price: '$559/Monthly',
      features: [
        { name: 'IRS Tax Problems', available: true },
        { name: 'Business Tax Consulting', available: true },
        { name: 'Tax Preparation and Planning', available: true },
        { name: 'Tax Payroll Services', available: true },
        { name: 'Bookkeeping and Virtual CFO', available: true },
        { name: 'Accounting Virtual Controller', available: false }
      ],
      isPopular: true
    },
    {
      id: 3,
      title: 'Premium',
      price: '$959/Monthly',
      features: [
        { name: 'IRS Tax Problems', available: true },
        { name: 'Business Tax Consulting', available: true },
        { name: 'Tax Preparation and Planning', available: true },
        { name: 'Tax Payroll Services', available: true },
        { name: 'Bookkeeping and Virtual CFO', available: true },
        { name: 'Accounting Virtual Controller', available: true }
      ],
      isPopular: false
    }
  ];

  // Animation variants for pricing cards
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
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
            <span className="text-base font-semibold text-blue-500 px-4">Pricing</span>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-blue-800 text-center mb-16">
          Let's Check Our Pricing
          <br />
          Plan For You
        </h2>

        {/* Pricing Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`bg-white rounded-sm shadow-md p-6 relative ${plan.isPopular ? 'border-2 border-blue-500' : ''}`}
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Plan Title Ribbon (always visible, top-right) */}
              <div className="absolute top-0 right-0 bg-blue-500 text-white py-1 px-4 rounded-bl-md z-10 shadow-md">
                <p className="text-sm font-semibold">{plan.title}</p>
              </div>

              {/* Price */}
              <div className="pt-6">
                <h3 className="text-4xl font-bold text-blue-800 text-center mb-1">
                  {plan.price}
                  <span className="text-base font-medium text-black">/Monthly</span>
                </h3>

                {/* Purchase Button */}
                <Button
                  variant="primary"
                  className="w-full flex items-center justify-center my-6"
                >
                  Purchase Now
                  <img
                    src="/images/img_materialsymbolsarrowinsert.svg"
                    alt=""
                    className="ml-2 w-6 h-6"
                  />
                </Button>

                {/* Feature List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <img
                        src={
                          feature.available
                            ? '/images/img_vector_16x16.svg' // ✅ check icon
                            : '/images/img_vector_1.svg'     // ❌ cross icon
                        }
                        alt={feature.available ? 'Available' : 'Unavailable'}
                        className="w-4 h-4 mt-1 mr-3"
                      />
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
