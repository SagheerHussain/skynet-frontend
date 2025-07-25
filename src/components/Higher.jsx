import React from "react";
import { motion } from "framer-motion";

const Higher = () => {
  return (
    <div className="py-20">
      {/* Overlay card */}

      <div className="md:p-8 py-8 px-2 w-[90%] md:w-[100%] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-4xl text-center text-2xl md:text-7xl font-bold mb-2"
          style={{ lineHeight: "1.1" }}
        >
          Elevating Aircraft Deals Through{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Visual Stories
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-lg max-w-5xl mt-4 mx-auto"
        >
          Dive into real-world aviation stories that go beyond aircraft specs
          and listings. At Mason Amelia, we capture the passion, process, and
          people behind every deal. Through immersive video storytelling, we
          bring aviation to life—connecting aircraft with purpose and buyers
          with clarity.
        </motion.p>
      </div>
    </div>
  );
};

export default Higher;
