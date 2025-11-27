import React from 'react';
import { FaFigma, FaGitAlt, FaNodeJs } from 'react-icons/fa';
import { RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb, SiPostman, SiExpress, SiSupabase } from 'react-icons/si';
import { motion } from 'framer-motion';

// Variants for the icon container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for individual icons
const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1, 
    transition: { 
      type: 'spring', 
      stiffness: 100 
    } 
  },
};

const Skills = () => {
  const skillsList = [
    { icon: RiReactjsLine, color: 'text-cyan-400', name: 'React' },
    { icon: FaNodeJs, color: 'text-green-500', name: 'Node.js' },
    { icon: SiExpress, color: 'text-gray-400', name: 'Express.js' },
    { icon: SiMongodb, color: 'text-green-600', name: 'MongoDB' },
    { icon: RiTailwindCssFill, color: 'text-cyan-600', name: 'Tailwind CSS' },
    { icon: FaGitAlt, color: 'text-orange-600', name: 'Git' },
    { icon: SiPostman, color: 'text-amber-500', name: 'Postman' },
    { icon: FaFigma, color: 'text-purple-500', name: 'Figma' },
    { icon: SiSupabase, color: 'text-green-600', name: 'Supabase' },
  ];

  return (
    <section className="relative overflow-hidden pb-24 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold text-white"
      >
        Technical <span className="text-amber-500">Skills</span>
      </motion.h1>

      {/* Icons Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10"
      >
        {skillsList.map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 25px rgba(251, 191, 36, 0.4)' }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              className={`p-5 rounded-2xl border-4 border-stone-800 bg-stone-900 shadow-xl cursor-pointer flex flex-col items-center group`}
            >
              <IconComponent className={`text-6xl md:text-7xl ${skill.color} transition-colors duration-300`} />
              <p className="text-xs mt-2 text-stone-400 group-hover:text-amber-500 font-medium">{skill.name}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Skills;