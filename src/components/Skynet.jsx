import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Skynet = () => {
  return (
    <section className="lg:h-[70vh] xl:h-[60vh]">
      {/* Background Image Right Side */}
      <div className="px-5 container flex flex-col justify-center h-full">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
          className="text-white lg:text-6xl xl:text-7xl lg:max-w-lg xl:max-w-2xl mb-7"
          style={{ lineHeight: "1.1" }}
        >
          Pricing Intelligence{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Reimagined with SkyNet
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 50, duration: 0.5, delay: 0.3 }}
        >
          <Button buttonLabel="Get Started" onClick="/contact" />
        </motion.div>
      </div>
    </section>
  );
};

export default Skynet;
