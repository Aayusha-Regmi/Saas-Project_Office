



import React from 'react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Best Taxation Service',
      description: 'Get top-notch taxation support tailored to your business needs. We help you stay compliant and optimize your returns efficiently.',
      icon: '/images/img_taxservice_1.svg',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Ensure Security',
      description: 'We prioritize the safety of your financial data with industry-grade encryption and secure systems that you can trust.',
      icon: '/images/img_hugeiconssecuritylock.svg',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Experts Team',
      description: 'Work with a dedicated team of experienced professionals who provide expert advice and reliable financial solutions.',
      icon: '/images/img_team2_1.svg',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 4,
      title: '24/7 Support',
      description: 'Need help anytime? Our support team is available 24/7 to assist you with any queries or technical issues, day or night.',
      icon: '/images/img_support_1.svg',
      iconBgColor: 'bg-blue-500',
    }
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
          <div className="inline-flex items-center bg-gray-100 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-600 px-4">Our Features</span>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-blue-800 text-center mb-16"
        >
          Our Awesome Features
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={featureCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative h-full flex flex-col"
            >
              <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
                  <div className={`w-24 h-24 ${feature.iconBgColor} rounded-full flex items-center justify-center transition-transform hover:scale-105`}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="w-14 h-14 object-contain" 
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-blue-700 to-blue-800 rounded-2xl p-8 pt-24 pb-8 text-center h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-white mb-4 leading-tight">{feature.title}</h3>
                <p className="text-blue-100 text-base leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
