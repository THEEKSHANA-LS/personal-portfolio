import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { motion } from 'framer-motion';

// Variants for the overall container (staggering the items)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Variants for individual certificate cards
const itemVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.6,
    },
  },
};

const Certification = () => {
  return (
    <section className="relative overflow-hidden pb-20 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <motion.h2
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold text-white"
      >
        My <span className="text-rose-500">Certifications</span>
      </motion.h2>

      {/* Grid Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {CERTIFICATIONS.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)', // Light glow on hover
              borderColor: '#fcd34d', // Amber border
            }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="bg-stone-900 rounded-xl shadow-lg overflow-hidden flex flex-col group 
                       border-2 border-stone-800 transition-all duration-300 cursor-pointer"
          >
            {/* Image Container */}
            <div className="w-full h-48 bg-stone-800 overflow-hidden">
              <img
                src={cert.imageUrl}
                alt={cert.title}
                // Subtle scale effect on image inside the card
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
              />
            </div>

            {/* Title Content */}
            <div className="p-4 flex flex-col items-center text-center flex-grow">
              <h3 className="text-lg font-semibold text-gray-100 group-hover:text-amber-400 transition-colors">
                {cert.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Certification;