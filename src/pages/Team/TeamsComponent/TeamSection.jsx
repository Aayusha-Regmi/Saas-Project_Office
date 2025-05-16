// import React from 'react';
// import TeamsCard from '../../../components/common/TeamsCard';

// const TeamSection = () => {
//   const teamMembers = [
//     {
//       id: 1,
//       name: 'John Smith',
//       position: 'Tax Consultant',
//       image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//       description: 'Specializing in corporate tax planning and optimization strategies with over 10 years of experience.',
//       contactInfo: {
//         email: 'john.smith@example.com',
//         phone: '+977 9801234567',
//         location: 'Kathmandu, Nepal'
//       }
//     },
//     {
//       id: 2,
//       name: 'Sarah Johnson',
//       position: 'Financial Advisor',
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
//       description: 'Expert in personal financial planning, investment strategies, and retirement planning.',
//       contactInfo: {
//         email: 'sarah.johnson@example.com',
//         phone: '+977 9807654321',
//         location: 'Kathmandu, Nepal'
//       }
//     },
//     {
//       id: 3,
//       name: 'Michael Chen',
//       position: 'Insurance Specialist',
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//       description: 'Specialized in insurance tax optimization and compliance with extensive industry knowledge.',
//       contactInfo: {
//         email: 'michael.chen@example.com',
//         phone: '+977 9802345678',
//         location: 'Kathmandu, Nepal'
//       }
//     },
//     {
//       id: 4,
//       name: 'Emily Patel',
//       position: 'Audit Manager',
//       image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
//       description: 'Leading tax audit support services with a focus on compliance and risk management.',
//       contactInfo: {
//         email: 'emily.patel@example.com',
//         phone: '+977 9803456789',
//         location: 'Kathmandu, Nepal'
//       }
//     },
//     {
//       id: 5,
//       name: 'David Wilson',
//       position: 'Corporate Tax Specialist',
//       image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
//       description: 'Expert in corporate tax structures, international taxation, and tax-efficient business operations.',
//       contactInfo: {
//         email: 'david.wilson@example.com',
//         phone: '+977 9804567890',
//         location: 'Kathmandu, Nepal'
//       }
//     },
//     {
//       id: 6,
//       name: 'Priya Sharma',
//       position: 'Tax Advisory Lead',
//       image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
//       description: 'Providing strategic tax advisory services to businesses and high-net-worth individuals.',
//       contactInfo: {
//         email: 'priya.sharma@example.com',
//         phone: '+977 9805678901',
//         location: 'Kathmandu, Nepal'
//       }
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
//             <span className="text-base font-semibold text-blue-500 px-4">Our Team</span>
//           </div>
//         </div>

        
//         <h2 className="text-4xl font-semibold text-[#071e45] text-center mb-16">Meet With Our <span className="text-[#22a8ff]">Experts</span></h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {teamMembers.map(member => (
//             <TeamsCard
//               key={member.id}
//               image={member.image}
//               name={member.name}
//               position={member.position}
//               description={member.description}
//               contactInfo={member.contactInfo}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;



import React from 'react';
import { motion } from 'framer-motion';
import TeamsCard from '../../../components/common/TeamsCard';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      position: 'Tax Consultant',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      description: 'Specializing in corporate tax planning and optimization strategies with over 10 years of experience.',
      contactInfo: {
        email: 'john.smith@example.com',
        phone: '+977 9801234567',
        location: 'Kathmandu, Nepal'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Financial Advisor',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      description: 'Expert in personal financial planning, investment strategies, and retirement planning.',
      contactInfo: {
        email: 'sarah.johnson@example.com',
        phone: '+977 9807654321',
        location: 'Kathmandu, Nepal'
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Insurance Specialist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      description: 'Specialized in insurance tax optimization and compliance with extensive industry knowledge.',
      contactInfo: {
        email: 'michael.chen@example.com',
        phone: '+977 9802345678',
        location: 'Kathmandu, Nepal'
      }
    },
    {
      id: 4,
      name: 'Emily Patel',
      position: 'Audit Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
      description: 'Leading tax audit support services with a focus on compliance and risk management.',
      contactInfo: {
        email: 'emily.patel@example.com',
        phone: '+977 9803456789',
        location: 'Kathmandu, Nepal'
      }
    },
    {
      id: 5,
      name: 'David Wilson',
      position: 'Corporate Tax Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      description: 'Expert in corporate tax structures, international taxation, and tax-efficient business operations.',
      contactInfo: {
        email: 'david.wilson@example.com',
        phone: '+977 9804567890',
        location: 'Kathmandu, Nepal'
      }
    },
    {
      id: 6,
      name: 'Priya Sharma',
      position: 'Tax Advisory Lead',
      image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
      description: 'Providing strategic tax advisory services to businesses and high-net-worth individuals.',
      contactInfo: {
        email: 'priya.sharma@example.com',
        phone: '+977 9805678901',
        location: 'Kathmandu, Nepal'
      }
    }
  ];

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center bg-gray-600 rounded-xl">
            <div className="bg-blue-500 w-[38px] h-[38px] rounded-xl flex items-center justify-center">
              <span className="text-white font-semibold">%</span>
            </div>
            <span className="text-base font-semibold text-blue-500 px-4">Our Team</span>
          </div>
        </motion.div>

        <motion.h2
          className="text-4xl font-semibold text-[#071e45] text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Meet With Our <span className="text-[#22a8ff]">Experts</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <TeamsCard
                image={member.image}
                name={member.name}
                position={member.position}
                description={member.description}
                contactInfo={member.contactInfo}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TeamSection;
