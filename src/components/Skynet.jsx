import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const Skynet = () => {
  return (
    <section className="lg:h-[70vh] xl:h-[60vh]">
      {/* Background Image Right Side */}
      <div className="px-5 container flex flex-col justify-center h-full">
        <h1
          className="text-white lg:text-6xl xl:text-7xl lg:max-w-lg xl:max-w-2xl mb-7"
          style={{ lineHeight: "1.1" }}
        >
          Pricing Intelligence{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Reimagined with SkyNet
          </span>
        </h1>
        <Button buttonLabel="Get Started" onClick="/contact" />
      </div>
    </section>
  );
};

export default Skynet;
