import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const AboutHeader = () => {
  return (
    <>
      <div className="relative w-full h-screen rounded-2xl overflow-hidden flex">
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full">
          <div className={`glass-container w-full  max-w-4xl mx-auto`}>
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div
              className="glass-content h-full flex flex-col"
              style={{ padding: "3rem 1rem" }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 40, duration: 0.5 }}
                className="text-white text-[1.7rem] md:text-[3rem] xl:text-6xl font-bold leading-tight drop-shadow-xl mb-3 text-center"
                style={{ lineHeight: "1.2" }}
              >
                Redefining Aviation with{" "}
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Trust and Legacy
                </span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button buttonLabel="Meet The Team" onClick="/team" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
