



import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/images/img_group_1171276020.png",
      socialIcon: "/images/img_group_1171276030.svg"
    },
    {
      id: 2,
      image: "/images/img_group_1171276020.png",
      socialIcon: "/images/img_group_1171276030.svg"
    },
    {
      id: 3,
      image: "/images/img_group_1171276020.png",
      socialIcon: "/images/img_group_1171276030.svg"
    },
    {
      id: 4,
      image: "/images/img_group_1171276020.png",
      socialIcon: "/images/img_group_1171276030.svg"
    }
  ];

  return (
    <section id='our-experts' className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex items-center justify-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#22a8ff] w-14 h-14 rounded-full flex items-center justify-center mr-4">
            <span className="text-3xl font-semibold text-white">%</span>
          </div>
          <h2 className="text-3xl font-semibold text-[#32b5fd]">Our Team</h2>
        </motion.div>

        <motion.h3
          className="text-4xl font-bold text-[#071e45] text-center mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet With Our Experts
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={member.image}
                alt="Team Member"
                className="w-full h-auto transition-transform duration-300 rounded-lg"
              />
              <motion.div
                className="absolute bottom-0 right-0"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.2 }}
              >
                <img
                  src={member.socialIcon}
                  alt="Social Media"
                  className="w-10 h-10 cursor-pointer transition-transform duration-300"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
