import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import cta from "/images/showroom/cta.png";
import Button from "./Button";

const CTA = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // when section enters bottom → leaves top
  });

  // Interpolate scroll to scale and opacity
  const scale = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0, 1, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.7, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative 2xl:h-[200vh] h-[110vh] w-full">
      <motion.div
        style={{ scale, opacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center rounded-[50px] overflow-hidden"
      >
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat flex items-center justify-center z-10"
          style={{
            backgroundImage: `url(${cta})`,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1]"></div>
          <div className="text-center text-white px-4 z-[5]">
            <h2 className="text-5xl font-bold mb-4">
              Ready for{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                Takeoff ?
              </span>
            </h2>
            <p className="text-xl mb-6 mx-auto max-w-2xl">
              Partner with industry leaders in aviation solutions tailored for
              precision and performance. Connect with us to elevate your mission
              to new heights.
            </p>
            <Button buttonLabel="Contact Us" onClick="/contact" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
