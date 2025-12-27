import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Main Content Group */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto"
      >
        {/* Status Badge */}
        <motion.div
          variants={{
            hidden: { y: -20, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-sm font-medium text-gray-300 tracking-wide uppercase">
              Under Construction
            </span>
          </span>
        </motion.div>

        {/* Main Header */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            variants={{
              hidden: { y: 100 },
              visible: {
                y: 0,
                transition: { type: "spring", stiffness: 100, damping: 20 },
              },
            }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-2xl"
          >
            STATIC GLOBAL
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
        >
          We are building a new digital experience.
          <br className="hidden md:block" />
          Something extraordinary is coming soon.
        </motion.p>
      </motion.div>

      {/* Signature / Official Development Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-auto pb-12 flex flex-col items-center gap-4"
      >
        <span className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.2em] font-medium">
          Domain under management of
        </span>
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-sm transition-colors hover:bg-white/10 group">
          <img
            src="/logo.png"
            alt="Zervitra Logo"
            className="h-8 md:h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
