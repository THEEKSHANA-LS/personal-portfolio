import React from "react";
import { CONTACT } from "../constants";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

// Variant for the contact links container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// Variant for individual contact items
const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 100
        },
    },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-stone-800 py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-t from-black to-stone-950 text-white"
    >
      {/* Heading */}
      <motion.h2 
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-4xl lg:text-5xl font-bold text-center text-white mb-12"
      >
        Get In <span className="text-rose-500">Touch</span>
      </motion.h2>

      {/* Contact Info Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 text-center text-gray-300"
      >
        {/* Address */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)' }}
          className="flex flex-col items-center bg-stone-900/50 p-6 rounded-xl border border-stone-800 w-full md:w-auto"
        >
          <FaMapMarkerAlt className="text-3xl text-amber-500 mb-3" />
          <p className="text-lg text-gray-200">{CONTACT.address}</p>
        </motion.div>

        {/* Phone */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)' }}
          className="flex flex-col items-center bg-stone-900/50 p-6 rounded-xl border border-stone-800 w-full md:w-auto"
        >
          <FaPhoneAlt className="text-3xl text-rose-500 mb-3" />
          <p className="text-lg text-gray-200">{CONTACT.phoneNo}</p>
        </motion.div>

        {/* Email */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(251, 191, 36, 0.3)' }}
          className="flex flex-col items-center bg-stone-900/50 p-6 rounded-xl border border-stone-800 w-full md:w-auto"
        >
          <FaEnvelope className="text-3xl text-cyan-400 mb-3" />
          <motion.a
            href={`mailto:${CONTACT.email}`}
            className="text-lg text-gray-200 hover:text-cyan-400 transition-colors duration-300 border-b border-transparent hover:border-cyan-400"
            whileHover={{ y: -2 }}
          >
            {CONTACT.email}
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom Text */}
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center text-stone-500 text-sm mt-16"
      >
        © {new Date().getFullYear()} Sandun Theekshana. All rights reserved. Built with React & Tailwind CSS.
      </motion.p>
    </section>
  );
};

export default Contact;