import React from "react";
import { motion } from "framer-motion";

const Higher = () => {
  return (
    <div className="flex items-center h-screen md:h-[60vh]">
      {/* Overlay card */}
      <div className="md:p-8 py-8 px-2 text-whitetext-start">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:text-start text-center md:max-w-2xl lg:max-w-2xl xl:max-w-3xl text-[2rem] text-white md:text-[2.5rem] lg:text-[3rem] xl:text-6xl font-bold mb-2"
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
          className="md:text-start text-center text-white md:max-w-2xl lg:max-w-2xl xl:max-w-3xl text-base md:text-lg mt-4"
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
