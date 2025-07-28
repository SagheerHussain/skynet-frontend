import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

export default function GlassCard({ icon, title, description, buttonLabel }) {
  // const media = useMediaQuery("(max-width: 500px)");
  // const mediaHeight = useMediaQuery("(max-height: 680px)");

  return (
    <>
      <div className="glass_card">
        <div
          className={`glass-container w-full md:translate-y-0`}
          style={{
            borderRadius: "20px",
            boxShadow:
              "0 6px 6px rgba(0, 0, 0, 0.02), 0 0 20px rgba(0, 0, 0, 0.1);",
          }}
        >
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div
            className="glass-content h-full"
            style={{ padding: "3rem 1rem" }}
          >
            <div className="w-full text-white flex flex-col items-center">
              {/* Animated Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
                className={`text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-7xl font-extrabold capitalize text-center leading-[1.2]`}
              >
                Turbulence Free, Transactions.
              </motion.h2>
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-sm md:text-base lg:text-lg py-3 text-white/70 opacity-100"
              >
                Industry-leading marketing, data, and grit to help you buy or
                sell.
              </motion.p>

              {/* Button */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <Button buttonLabel="Visit Showroom" onClick="/showroom" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
