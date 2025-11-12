import React from 'react';
import { PROJECTS } from '../constants';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto`}>
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-transperant rounded-xl shadow-2xl transition-all duration-500 overflow-hidden flex flex-col group 
                       border border-gray-700 hover:white hover:shadow-white/30"
          >
            {/* Project Image */}
            <div className="w-full h-48 bg-gray-700 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                // Image Scale effect on hover
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              />
            </div>

            {/* Project Content */}
            <div className="p-6 text-left flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 text-gray-100  transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-sm flex-grow leading-relaxed">
                {project.desc}
              </p>

              {/* Technologies Used (Tags) */}
              <div className="flex flex-wrap gap-2 mb-4 mt-auto pt-2 border-t border-gray-700/50">
                {project.tech.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    // Improved tag style for dark mode
                    className="bg-gray-900 text-white text-xs font-medium px-2.5 py-0.5 rounded-lg shadow-inner"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex gap-4 mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 font-semibold hover:text-blue-500 transition-colors duration-300"
                  aria-label={`View live project ${project.title}`}
                >
                  <FaExternalLinkAlt size={14} /> Live Demo
                </a>
                 <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors duration-300"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Projects;
