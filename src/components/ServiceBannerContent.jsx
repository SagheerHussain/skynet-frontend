import React from "react";
import { motion } from "framer-motion";

const ServiceBannerContent = ({ highlightTitle, title, description }) => {
  return (
    <>
      <section id="banner_content" className="flex items-center h-[70vh] pb-[5rem]">
        <div className="container px-5">
          <div className={`glass-container w-full p-10`}>
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content h-full flex flex-col p-8">
              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 30, duration: 0.5 }}
                className="text-7xl text-white"
                style={{ lineHeight: "1.2" }}
              >
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  {highlightTitle}
                </span>{" "} <br />
                {title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 30, duration: 0.5, delay: 0.2 }}
                className="text-white text-lg font-light max-w-4xl mt-5"
              >
                {description}
              </motion.p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBannerContent;
