// import React from 'react';
// import Card from '../../../components/common/IndustryCard';

// const IndustrySection = () => {
//   const industries = [
//     {
//       id: 1,
//       title: "Banking & Financial Service",
//       description: "Our Team has the in depth knowledge of Banking Processes, Regulatory Requirements, Core Banking Practices and Risk Management Practices of Banking Industry. We have been involved with the Audit and consulting of Banking & Financial Service Sector since our inception.",
//       imageSrc: "/images/img_image_14.png",
//       imageAlt: "Banking & Financial Service",
//       buttonVariant: "default",
//       link: "/industries/banking"
//       /*Checking git results */
//     },
//     {
//       id: 2,
//       title: "Manufacturing",
//       description: "SAAS have a team of young and dynamic professionals' with core competency in Manufacturing Sector. We have been associated with Manufacturing Industry by providing Risk Advisory Services, Audit Services, Consultancy Services and Tax Advisory Services.",
//       imageSrc: "/images/img_image_331x586.png",
//       imageAlt: "Manufacturing Industry",
//       buttonVariant: "default",
//       link: "/industries/manufacturing"
//     },
//     {
//       id: 3,
//       title: "NGO/INGO",
//       description: "We have a strong team of professionals dedicated for the Development Sector. We provide wide range of services to the Development Sector including Statutory Audit, Internal Audit, Fund Audit and Consultancy Services across the regions of Nepal.",
//       imageSrc: "/images/img_image_43.png",
//       imageAlt: "NGO/INGO",
//       buttonVariant: "default",
//       link: "/industries/ngo-ingo"
//     },
//     {
//       id: 4,
//       title: "Electronics & Communication Industry",
//       description: "SAAS have been involved in providing Consulting and Audit of Electronics and Communication Industry since its establishment.",
//       imageSrc: "/images/img_image_2.png",
//       imageAlt: "Electronics & Communication Industry",
//       buttonVariant: "default",
//       link: "/industries/electronics"
//     },
//     {
//       id: 5,
//       title: "Trading & Retail",
//       description: "SAAS have a team of young and dynamic professionals' with core competency in Trading Sector. We have been associated with Trading Industry by providing Risk Advisory Services, Statutory Audit Services, Consultancy Services and Tax Advisory Services.",
//       imageSrc: "/images/img_image_25.png",
//       imageAlt: "Trading & Retail",
//       buttonVariant: "default",
//       link: "/industries/trading"
//     },
//     {
//       id: 6,
//       title: "Travel, Tourism & Hotel",
//       description: "SAAS have a team of young and dynamic professionals' with expertise in Audit, Taxation and Consultancy in the Hospitality Sector. SAAS have a team of young and dynamic professionals' with expertise in Audit, Taxation and Consultancy in the Hospitality Sector.",
//       imageSrc: "/images/img_image_339x601.png",
//       imageAlt: "Travel, Tourism & Hotel",
//       buttonVariant: "default",
//       link: "/industries/tourism"
//     },
//     {
//       id: 7,
//       title: "Hospital and Education Industry",
//       description: "We have a team of professionals having in depth knowledge and experience of working with Largest Hospital Chains in Nepal, India and South Asia. SAAS has also been associated with some of the biggest educational institutions of Nepal, Leading Medical Colleges, Leading Business Schools in Nepal in the capacity of Auditor and Consultants.",
//       imageSrc: "/images/img_image_3.png",
//       imageAlt: "Hospital and Education Industry",
//       buttonVariant: "default",
//       link: "/industries/healthcare-education"
//     },
//     {
//       id: 8,
//       title: "Hydropower & Construction",
//       description: "Nepal is second richest country in the world for the Water Resources. Nepal has the capacity of above 80,000 MegaWatts Hydropower Production. SAAS has the expertise of providing Audit and Consultancy Services to Hydropower Companies, Construction and Real Estate Companies in Nepal.",
//       imageSrc: "/images/img_image_3.png", 
//       imageAlt: "Hydropower & Construction",
//       buttonVariant: "default",
//       link: "/industries/hydropower-construction"
//     }
//   ];

//   return (
//     <div className="container mx-auto px-[110px] py-16">
//       <div className="flex flex-col space-y-16">
//         {industries.map((industry, index) => {
//           const isEven = index % 2 === 0;

//           return (
//             <div
//               key={industry.id}
//               className={`flex flex-col md:flex-row ${
//                 isEven ? 'md:flex-row' : 'md:flex-row-reverse'
//               } items-center gap-8`}
//             >
//               {/* Text Content */}
//               <div className="md:w-1/2">
//                 <Card
//                   title={industry.title}
//                   description={industry.description}
//                   buttonVariant={industry.buttonVariant}
//                   link={industry.link}
//                   imageSrc={null} // Image handled separately
//                 />
//               </div>

//               {/* Image */}
//               <div className="md:w-1/2">
//                 {industry.imageSrc ? (
//                   <img
//                     src={industry.imageSrc}
//                     alt={industry.imageAlt}
//                     className="w-full h-auto rounded-lg object-cover"
//                   />
//                 ) : (
//                   <div className="w-full h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
//                     No Image Available
//                   </div>
//                 )}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default IndustrySection;



import React from 'react';
import Card from '../../../components/common/IndustryCard';
import { motion } from 'framer-motion';

const IndustrySection = () => {
  const industries = [
    {
      id: 1,
      title: "Banking & Financial Service",
      description: "Our Team has the in depth knowledge of Banking Processes, Regulatory Requirements, Core Banking Practices and Risk Management Practices of Banking Industry. We have been involved with the Audit and consulting of Banking & Financial Service Sector since our inception.",
      imageSrc: "/images/img_image_14.png",
      imageAlt: "Banking & Financial Service",
      buttonVariant: "default",
      link: "/industries/banking"
    },
    {
      id: 2,
      title: "Manufacturing",
      description: "SAAS have a team of young and dynamic professionals' with core competency in Manufacturing Sector. We have been associated with Manufacturing Industry by providing Risk Advisory Services, Audit Services, Consultancy Services and Tax Advisory Services.",
      imageSrc: "/images/img_image_331x586.png",
      imageAlt: "Manufacturing Industry",
      buttonVariant: "default",
      link: "/industries/manufacturing"
    },
    {
      id: 3,
      title: "NGO/INGO",
      description: "We have a strong team of professionals dedicated for the Development Sector. We provide wide range of services to the Development Sector including Statutory Audit, Internal Audit, Fund Audit and Consultancy Services across the regions of Nepal.",
      imageSrc: "/images/img_image_43.png",
      imageAlt: "NGO/INGO",
      buttonVariant: "default",
      link: "/industries/ngo-ingo"
    },
    {
      id: 4,
      title: "Electronics & Communication Industry",
      description: "SAAS have been involved in providing Consulting and Audit of Electronics and Communication Industry since its establishment.",
      imageSrc: "/images/img_image_2.png",
      imageAlt: "Electronics & Communication Industry",
      buttonVariant: "default",
      link: "/industries/electronics"
    },
    {
      id: 5,
      title: "Trading & Retail",
      description: "SAAS have a team of young and dynamic professionals' with core competency in Trading Sector. We have been associated with Trading Industry by providing Risk Advisory Services, Statutory Audit Services, Consultancy Services and Tax Advisory Services.",
      imageSrc: "/images/img_image_25.png",
      imageAlt: "Trading & Retail",
      buttonVariant: "default",
      link: "/industries/trading"
    },
    {
      id: 6,
      title: "Travel, Tourism & Hotel",
      description: "SAAS have a team of young and dynamic professionals' with expertise in Audit, Taxation and Consultancy in the Hospitality Sector. SAAS have a team of young and dynamic professionals' with expertise in Audit, Taxation and Consultancy in the Hospitality Sector.",
      imageSrc: "/images/img_image_339x601.png",
      imageAlt: "Travel, Tourism & Hotel",
      buttonVariant: "default",
      link: "/industries/tourism"
    },
    {
      id: 7,
      title: "Hospital and Education Industry",
      description: "We have a team of professionals having in depth knowledge and experience of working with Largest Hospital Chains in Nepal, India and South Asia. SAAS has also been associated with some of the biggest educational institutions of Nepal, Leading Medical Colleges, Leading Business Schools in Nepal in the capacity of Auditor and Consultants.",
      imageSrc: "/images/img_image_3.png",
      imageAlt: "Hospital and Education Industry",
      buttonVariant: "default",
      link: "/industries/healthcare-education"
    },
    {
      id: 8,
      title: "Hydropower & Construction",
      description: "Nepal is second richest country in the world for the Water Resources. Nepal has the capacity of above 80,000 MegaWatts Hydropower Production. SAAS has the expertise of providing Audit and Consultancy Services to Hydropower Companies, Construction and Real Estate Companies in Nepal.",
      imageSrc: "/images/img_image_3.png",
      imageAlt: "Hydropower & Construction",
      buttonVariant: "default",
      link: "/industries/hydropower-construction"
    }
  ];

  return (
    <motion.div
      className="container mx-auto px-[110px] py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col space-y-16">
        {industries.map((industry, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={industry.id}
              className={`flex flex-col md:flex-row ${
                isEven ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <Card
                  title={industry.title}
                  description={industry.description}
                  buttonVariant={industry.buttonVariant}
                  link={industry.link}
                  imageSrc={null} // Image handled separately
                />
              </div>

              {/* Image */}
              <motion.div
                className="md:w-1/2"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {industry.imageSrc ? (
                  <img
                    src={industry.imageSrc}
                    alt={industry.imageAlt}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-full h-[200px] bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                    No Image Available
                  </div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default IndustrySection;
