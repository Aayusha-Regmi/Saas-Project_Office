import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const expertiseVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const ExpertiseSection = () => {
  const navigate = useNavigate();

  const benefits = [
    {
      id: 1,
      title: 'Affordable Cost',
      description:
        'Quality financial services tailored to your budget for maximum value.',
      icon: 'https://cdn-icons-png.flaticon.com/512/1907/1907937.png',
    },
    {
      id: 2,
      title: 'Client-Focused Strategy',
      description:
        'We build custom strategies aligned with your personal or business growth.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2649/2649642.png',
    },
    {
      id: 3,
      title: 'Save Your Money',
      description:
        'Reduce liabilities and increase savings with optimized tax planning.',
      icon: 'https://cdn-icons-png.flaticon.com/512/2910/2910768.png',
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ 
              opacity: 1, 
              x: 0,
              transition: { 
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
              }
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div className="inline-flex items-center bg-blue-50 px-4 py-2 rounded-xl mb-4" variants={expertiseVariants}>
              <div className="bg-blue-500 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-semibold text-sm">%</span>
              </div>
              <span className="text-sm font-medium text-blue-600">Why Choose Us</span>
            </motion.div>

            <motion.h2 className="text-[36px] leading-snug font-bold text-blue-900 max-w-xl mb-4" variants={expertiseVariants}>
              We Deliver Expertise You Can <span className="text-blue-600">Services</span>
            </motion.h2>

            <motion.p className="text-lg text-gray-700 mb-10 max-w-xl" variants={expertiseVariants}>
              Our services are built to support your strategic growth, operational efficiency, and financial success.
            </motion.p>

            <div className="space-y-8">
              {benefits.map((benefit) => (
                <motion.div key={benefit.id} className="flex items-start" variants={expertiseVariants}>
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <img src={benefit.icon} alt={benefit.title} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-darkGray-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-gray-400 max-w-md">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Animated floating elements */}
            <motion.div 
              className="absolute -left-10 -bottom-10 w-16 h-16 opacity-20"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 0.2,
                transition: { 
                  duration: 0.8,
                  delay: 0.6
                }
              }}
              viewport={{ once: true }}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                transition: {
                  duration: 6,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <img
                src="/images/bubble-decoration.png"
                alt="Floating decoration"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Images and Bubbles */}
          <motion.div 
            className="relative mt-4 md:mt-0 flex flex-col items-end" 
            variants={expertiseVariants}
          >
            {/* Floating Bubble Elements */}
            <motion.div 
              className="absolute top-[10%] right-[10%] w-48 h-48 opacity-40 z-0"
              variants={floatAnimation}
              initial="initial"
              animate="animate"
            >
              <img
                src="https://png.pngtree.com/png-vector/20220628/ourmid/pngtree-realistic-transparent-3d-bubble-png-image_5473944.png"
                alt="3D Bubble"
                className="w-full h-full"
              />
            </motion.div>

            {/* Floating Bubble */}
            <motion.div 
              className="absolute left-[-40px] top-[35%] w-32 h-32 z-10"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ 
                scale: 1, 
                opacity: 0.8,
                transition: { 
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.4
                }
              }}
              viewport={{ once: true }}
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                transition: {
                  duration: 5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse"
                }
              }}
            >
              <img
                src="/images/bubble-decoration.png"
                alt="Decorative bubble"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Top Image with Hover Effect */}
            <motion.div 
              className="relative w-[70%] rounded-xl overflow-hidden shadow-lg mb-12 ml-8 z-10 group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              variants={scaleIn}
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                alt="Team Discussion"
                className="w-full h-72 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h4 className="font-semibold text-lg">Expert Team</h4>
                  <p className="text-sm opacity-90">Collaborating for success</p>
                </div>
              </div>
            </motion.div>

            {/* Bottom Image with Hover Effect */}
            <motion.div 
              className="relative w-[85%] rounded-xl overflow-hidden mr-6 z-20 -mt-20 group"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              variants={{
                ...scaleIn,
                initial: { ...scaleIn.initial, y: 20 },
                animate: { ...scaleIn.animate, y: 0 }
              }}
            >
              <div className="relative w-[400px] h-72">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80"
                  alt="Business Handshake"
                  className="w-full h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 w-full bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white w-full">
                    <h4 className="font-semibold text-lg">Business Success</h4>
                    <p className="text-sm opacity-90">Building lasting partnerships</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
