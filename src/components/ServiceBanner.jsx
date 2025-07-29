import React from "react";
import Navbar from "./Navbar";
import ServiceBannerContent from "./ServiceBannerContent";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceBanner = ({ banner }) => {
  const location = useLocation();

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <section
        className="w-screen h-screen md:sticky top-0 md:mt-[-10vh]"
        style={{
          backgroundImage: `linear-gradient(to right, #15161c 40%, rgba(21, 22, 28,0.3)), url(${
            location.pathname === "/brokerage"
              ? "https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/65205905e79b83c5cf244e17_SJ%20Inventory%20Banner.webp"
              : "https://img.freepik.com/premium-photo/airplane-airport-runway_1048944-19754280.jpg?semt=ais_hybrid&w=740&q=80"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="px-5 container flex flex-col justify-center h-full md:items-start items-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, duration: 0.5 }}
            className="text-white text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-6xl lg:max-w-lg xl:max-w-2xl mb-7"
            style={{ lineHeight: "1.1" }}
          >
            <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
              {location.pathname === "/brokerage"
                ? "Navigating Brokerage"
                : "Simplifying Aviation"}
            </span>{" "}
            <br />
            {location.pathname === "/brokerage"
              ? "One Deal at a Time"
              : "One Deal at a Time"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              duration: 0.5,
              delay: 0.3,
            }}
            className="max-w-xl text-white font-light md:text-start text-center"
          >
            {location.pathname === "/brokerage"
              ? "At Mason Amelia, we simplify the complexities of aircraft brokerage. Whether you're listing or buying, our experts ensure every step is precise, strategic, and transparent. With deep industry insight and relentless execution, we guide high-stakes deals to successful closures—so you can focus on the results, not the process."
              : "At Mason Amelia, we bring clarity to the complexities of aircraft transactions. Whether you're buying or selling, our experts ensure every step is smooth, transparent, and strategic. With decades of aviation insight, we turn challenges into confident decisions — seamlessly. Let us handle the details, so you can focus on what truly matters."}
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
