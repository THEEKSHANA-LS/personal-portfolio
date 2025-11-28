import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants/index.js";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pb-16 lg:mb-36 bg-gradient-to-b from-stone-900 via-stone-950 to-black text-white">
      <div className="flex flex-wrap items-center justify-center lg:flex-row-reverse lg:justify-between max-w-7xl mx-auto px-4">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end p-4"
        >
          <div className="relative">
            <motion.img
              src="profile.png"
              alt="Sandun Theekshana"
              className="border border-stone-700 rounded-full object-cover shadow-2xl w-60 h-60 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-stone-400/10 to-white/5 blur-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-10 text-center lg:text-left"
        >
          <motion.h1
            className="pb-2 text-5xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-stone-100 to-stone-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Sandun Theekshana
          </motion.h1>

          <motion.span
            className="text-2xl lg:text-3xl bg-gradient-to-r from-amber-300 to-rose-500 bg-clip-text text-transparent font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Web Developer
          </motion.span>

          <motion.p
            className="my-6 max-w-xl text-lg leading-relaxed text-stone-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            href="/Sandun_Theekshana_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-400 to-rose-500 text-stone-900 font-semibold rounded-full px-8 py-3 shadow-lg hover:shadow-amber-400/50 transition duration-300"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative floating circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
    </section>
  );
};

export default Hero;
