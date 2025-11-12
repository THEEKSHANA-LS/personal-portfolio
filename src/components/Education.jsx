import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Education = () => {
  // Variants for individual entries (slide-in from left)
  const educationVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      } 
    },
  };

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
        My <span className="text-amber-500">Journey</span>
      </motion.h2>

      <div className="space-y-12">
        {EDUCATION.map((education, index) => (
          <motion.div
            key={index}
            variants={educationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ ...educationVariants.visible.transition, delay: index * 0.2 }}
            className="flex flex-wrap lg:justify-between border-b border-stone-800 pb-8"
          >
            {/* Year (Left side) */}
            <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
              <p className="text-md font-semibold text-amber-500 tracking-wider">
                {education.year}
              </p>
            </div>
            {/* Content (Right side) */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-1 text-xl font-bold text-stone-100">
                {education.degree}
              </h3>
              <p className="mb-3 text-lg text-stone-400 italic">
                {education.school}
              </p>
              <p className="text-stone-300 leading-relaxed text-md">
                {education.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;