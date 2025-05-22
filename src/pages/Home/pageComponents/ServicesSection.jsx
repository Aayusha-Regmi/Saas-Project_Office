



import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: 'Tax Advisory',
      description: 'Navigate complex tax laws with ease. Our expert tax advisors help optimize your liabilities and stay compliant.',
      icon: '/images/img_group.svg',
      cornerImage: '/images/img_group_1171275971.svg'
    },
    {
      id: 2,
      title: 'Merger & Acquisitions',
      description: 'Strategically plan and execute M&A deals. We assist in due diligence, valuation, and seamless transitions.',
      icon: '/images/img_group_43x46.svg',
      cornerImage: '/images/img_group_1171275971.svg'
    },
    {
      id: 3,
      title: 'Audit & Assurance',
      description: 'Ensure transparency and accuracy in your financial reporting. We offer comprehensive audit solutions.',
      icon: '/images/img_vector_44x48.svg',
      cornerImage: '/images/img_group_1171275971.svg'
    },
    {
      id: 4,
      title: 'Risk Advisory & Consult',
      description: 'Identify, assess, and mitigate risks effectively. Our consultants tailor solutions for long-term resilience.',
      icon: '/images/img_group_43x46.svg',
      cornerImage: '/images/img_group_1171275971.svg'
    }
  ];
  

  // Animation variants for service cards
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="bg-gray-600 py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-center mb-6 sm:mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center bg-white rounded-xl">
            <div className="bg-blue-500 w-[30px] h-[30px] sm:w-[38px] sm:h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold text-sm sm:text-base">%</span>
            </div>
            <span className="text-sm sm:text-base font-semibold text-blue-500 px-3 sm:px-4">Our Offers</span>
          </div>
        </motion.div>

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What We Offer To Our
          <span className="hidden xs:inline"><br /></span>
          <span className="xs:hidden"> </span>
          Customers
        </motion.h2>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="bg-white rounded-2xl p-4 sm:p-6 relative flex flex-col h-full"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-grow">
                {/* Corner Image */}
                <div className="absolute top-0 right-0">
                  <img 
                    src={service.cornerImage} 
                    alt="" 
                    className="w-[60px] h-[70px] sm:w-[84px] sm:h-[97px]" 
                  />
                </div>

                {/* Service Icon */}
                <div className="bg-blue-500 w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-9 h-9 sm:w-11 sm:h-11" 
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-base sm:text-lg font-extrabold text-blue-800 mb-2 sm:mb-4">{service.title}</h3>


                {/* Service Description */}
                <div className="h-[80px] overflow-hidden">
                  <p className="text-xs sm:text-sm font-semibold text-gray-400">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="mt-4">
                <Button 
                  variant="primary" 
                  size="small"
                  className="w-full flex items-center justify-center text-sm"
                >
                  Read More
                  <img 
                    src="/images/img_materialsymbolsarrowinsert.svg" 
                    alt="" 
                    className="ml-1 sm:ml-2 w-5 h-5 sm:w-6 sm:h-6" 
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* All Services Button */}
        <motion.div 
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button 
            variant="primary" 
            size="small" 
            className="flex items-center w-full sm:w-auto justify-center" 
            onClick={() => navigate('/services')}
          >
            All Services
            <img 
              src="/images/img_materialsymbolsarrowinsert.svg" 
              alt="" 
              className="ml-1 sm:ml-2 w-5 h-5 sm:w-6 sm:h-6" 
            />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
