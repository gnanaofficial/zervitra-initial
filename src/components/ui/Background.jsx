import React from "react";
import { motion } from "framer-motion";

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-brand-dark">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(to right, #4b5563 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-transparent" />

      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [-100, 100, -100],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-[128px] opacity-30"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
          x: [100, -100, 100],
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-20"
      />
    </div>
  );
};

export default Background;
