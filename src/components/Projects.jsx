import React from 'react';
import { PROJECTS } from '../constants';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Projects = () => {
  // Custom transition for a more 'pop' effect on hover
  const cardHover = {
    scale: 1.05,
    boxShadow: '0 0 30px rgba(251, 191, 36, 0.4)', // Amber shadow on hover
    transition: { type: "spring", stiffness: 300, damping: 10 }
  };

  return (
    <section className="relative overflow-hidden pb-20 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <motion.h1 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl lg:text-5xl font-bold text-white"
      >
        Featured <span className="text-rose-500">Projects</span>
      </motion.h1>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8`}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-stone-900 rounded-xl shadow-2xl overflow-hidden flex flex-col group 
                        border border-stone-800 hover:border-amber-500/50 transition-all duration-300"
            whileHover={cardHover}
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-700 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>

            {/* Project Content */}
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-stone-400 mb-4 text-sm flex-grow leading-relaxed">
                {project.desc}
              </p>

              {/* Technologies Used (Tags) */}
              <div className="flex flex-wrap gap-2 mb-4 mt-auto pt-2 border-t border-stone-800">
                {project.tech.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 + tagIndex * 0.05 }}
                    className="bg-stone-800 text-rose-300 text-xs font-medium px-3 py-1 rounded-full shadow-md border border-stone-700"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-amber-400 font-semibold hover:text-rose-500 transition-colors duration-300"
                  aria-label={`View live project ${project.title}`}
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-stone-400 hover:text-stone-100 transition-colors duration-300"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;