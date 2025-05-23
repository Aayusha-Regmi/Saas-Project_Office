



import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const experts = [
  {
    id: 1,
    name: 'Sabal Kafle',
    position: 'Founder',
    image: '/images/img_mask_group.png',
    socialIcon: '/images/img_group_1171276030.svg',
  },
  {
    id: 2,
    name: 'Sabal Kafle',
    position: 'Founder',
    image: '/images/img_mask_group.png',
    socialIcon: '/images/img_group_1171276030.svg',
  },
  {
    id: 3,
    name: 'Reeshav Manandhar',
    position: 'Co-Founder',
    image: '/images/img_mask_group.png',
    socialIcon: '/images/img_group_1171276030.svg',
  },
  {
    id: 4,
    name: 'Reeshav Manandhar',
    position: 'Co-Founder',
    image: '/images/img_mask_group.png',
    socialIcon: '/images/img_group_1171276030.svg',
  },
];

const expertCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
    },
  },
};

const ExpertsSection = () => {
  const navigate = useNavigate();
  
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Case Study</span>
          </div>
        </div>

        <motion.h2
          className="text-4xl font-bold text-blue-800 text-center mb-16"
          variants={expertCardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Meet Our Experts
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <motion.div
              key={expert.id}
              className="relative"
              variants={expertCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >              <img src={expert.image} alt={expert.name} className="w-full h-auto rounded-md" loading="lazy" />
              <div className="mt-4">
                <h3 className="text-lg font-extrabold text-blue-800">{expert.name}</h3>
                <p className="text-base font-semibold text-blue-500">{expert.position}</p>
              </div>
              <div className="absolute bottom-16 right-0">
                <img 
                  src={expert.socialIcon} 
                  alt="Social" 
                  className="w-[42px] h-[42px] cursor-pointer hover:opacity-80 transition-opacity"
                  loading="lazy"
                  onClick={() => handleNavigation('/about')}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
