import React from "react";
import { motion } from "framer-motion";

const Higher = () => {
  return (
    <motion.div
      className="py-20"
      whileInView={{ y: 0 }}
      initial={{ y: 100 }}
      transition={{ type: "spring", stiffness: 120, duration: 2 }}
    >
      {/* Overlay card */}

      <div className="md:p-8 py-8 px-2 w-[90%] md:w-[100%] text-white">
        <h2 className="mx-auto max-w-4xl text-center text-2xl md:text-7xl font-bold mb-2" style={{ lineHeight: "1.1" }}>
          Elevating Aircraft Deals Through{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Visual Stories
          </span>
        </h2>
        <p className="text-center text-lg max-w-5xl mt-4 mx-auto">
          Dive into real-world aviation stories that go beyond aircraft specs
          and listings. At Mason Amelia, we capture the passion, process, and
          people behind every deal. Through immersive video storytelling, we
          bring aviation to life—connecting aircraft with purpose and buyers
          with clarity.
        </p>
      </div>
    </motion.div>
  );
};

export default Higher;
