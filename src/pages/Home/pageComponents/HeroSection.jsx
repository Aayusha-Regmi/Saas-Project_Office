// import React from 'react';

// import Button from '../../../components/ui/Button';

// const HomeHeroSection = () => {
//   const handleAboutMore = () => {
//     // Handle about more action
//     console.log('About More clicked');
//   };

//   const handleLearnMore = () => {
//     // Handle learn more action
//     console.log('Learn More clicked');
//   };

//   return (
//     <section className="relative">
//       {/* Background elements */}
//       <div className="absolute right-0 top-[277px]">
//         <div className="w-[408px] h-[427px] rounded-full bg-green-300"></div>
//         <div className="absolute top-[73px] left-[56px] w-[115px] h-[115px] rounded-full bg-red-600/30"></div>
//         <div className="absolute top-[395px] left-[427px] w-[115px] h-[115px] rounded-full bg-red-600/30"></div>
//       </div>

//       <div className="container mx-auto px-4 pt-16 pb-24 relative">
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/2">
//             <div className="bg-red-500 rounded-2xl px-4 py-2 flex items-center w-[428px] mb-8">
//               <div className="bg-white w-[37px] h-[37px] rounded-full flex items-center justify-center mr-3">
//                 <span className="text-red-500 font-semibold">%</span>
//               </div>
//               <span className="text-xl font-semibold text-white">Award Winning Tax Advisor in Nepal</span>
//             </div>

//             <h1 className="text-4xl font-bold text-blue-800 leading-tight mb-8">
//               We Help You To Avoid<br />Tax Blunders
//             </h1>

//             <p className="text-xl font-semibold text-blue-800 mb-8">
//               Finance Minister Barshaman Pun has tabled a budget of<br />
//               Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
//             </p>

//             <div className="flex space-x-6 mb-12">
//               <Button 
//                 onClick={handleAboutMore} 
//                 variant="primary" className="flex items-center"
//               >
//                 About More
//                 <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
//               </Button>
              
//               <Button 
//                 onClick={handleLearnMore} 
//                 variant="secondary" className="flex items-center"
//               >
//                 Learn More
//                 <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
//               </Button>
//             </div>

//             <p className="text-xl font-semibold text-blue-800 mb-4">
//               Trusted By 200 + Companies
//             </p>

//             <div className="flex space-x-4">
//               <div className="w-[67px] h-[67px] bg-gray-300 rounded-full"></div>
//               <div className="w-[67px] h-[67px] bg-gray-300 rounded-full"></div>
//               <div className="w-[67px] h-[67px] bg-gray-300 rounded-full"></div>
//             </div>
//           </div>

//           <div className="md:w-1/2 relative mt-10 md:mt-0">
//             <img src="/images/img_group_1171275966.svg" alt="Background" className="absolute z-0" />
//             <img src="/images/img_keti_1.png" alt="Tax Advisor" className="relative z-10" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeHeroSection;




import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const HomeHeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative">
      {/* Background elements */}
      <div className="absolute right-0 top-[277px]">
        <div className="w-[408px] h-[427px] rounded-full bg-green-300"></div>
        <div className="absolute top-[73px] left-[56px] w-[115px] h-[115px] rounded-full bg-red-600/30"></div>
        <div className="absolute top-[395px] left-[180px] w-[115px] h-[115px] rounded-full bg-red-600/30"></div>
      </div>

      {/* <div className="container mx-auto px-4 pt-16 pb-24 relative"> */}
      <div className="container mx-auto relative">
        <motion.div
          className="flex flex-col md:flex-row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="md:w-1/2">
            <div className="bg-red-500 rounded-2xl px-4 py-2 flex items-center w-[428px] mb-8">
              <div className="bg-white w-[37px] h-[37px] rounded-full flex items-center justify-center mr-3">
                <span className="text-red-500 font-semibold">%</span>
              </div>
              <span className="text-xl font-semibold text-white">Award Winning Tax Advisor in Nepal</span>
            </div>

            <h1 className="text-4xl font-bold text-blue-800 leading-tight mb-8">
              We Help You To Avoid<br />Tax Blunders
            </h1>

            <p className="text-xl font-semibold text-blue-800 mb-8">
              Finance Minister Barshaman Pun has tabled a budget of<br />
              Rs. 18.60 trillion for the fiscal year 2081/82 at the parliament.
            </p>

            <div className="flex space-x-6 mb-12">
              <Button 
                onClick={() => navigate('/about')} 
                variant="primary" className="flex items-center"
              >
                About More
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
              </Button>
              
              <Button 
                onClick={() => navigate('/services')} 
                variant="secondary" className="flex items-center"
              >
                Learn More
                <img src="/images/img_materialsymbolsarrowinsert.svg" alt="" className="ml-2 w-6 h-6" />
              </Button>
            </div>

            <p className="text-xl font-semibold text-blue-800 mb-4">
              Trusted By 200 + Companies
            </p>

            <div className="flex space-x-4">
              <div className="w-[67px] h-[67px] bg-gray-300 rounded-full"></div>
              <div className="w-[67px] h-[67px] bg-gray-300 rounded-full"></div>
              <div className="w-[67px] h-[67px] bg-gray-300 rounded-full"></div>
            </div>
          </div>

          <div className="md:w-1/2 relative mt-10 md:mt-0">
            <img src="/images/img_group_1171275966.svg" alt="Background" className="absolute z-0" />
            <motion.img
              src="/images/img_keti_1.png"
              alt="Tax Advisor"
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
