import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IoCheckmarkDone } from "react-icons/io5";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const TabContent = ({ src, title, description, features }) => {
  const shapeRef = useRef(null);
  const shadowRef = useRef(null);
  useEffect(() => {
    if (shapeRef.current) {
      gsap.to(shapeRef.current, {
        y: -50,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
    if (shadowRef.current) {
      gsap.to(shadowRef.current, {
        y: -50,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
  }, []);

  return (
    <div className="w-full relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-dark bg-[#15161C]">
      <div className="flex md:flex-row flex-col py-14">
        {/* Image */}
        <div className="image p-6 md:w-[40%] h-full relative z-[2]">
          <div ref={shadowRef} className="overlay absolute top-[50px] -left-[5px] w-[85%] h-[300px] bg-[#f4f9fd1e] opacity-50 rounded-[25px] -z-[1]" />
          <div className={`absolute top-0 -z-[1]`}>
            <img
              ref={shapeRef}
              className="w-full rounded-[25px] z-[1]"
              src={
                "https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/64e67ebffb32deb5a66c7725_SJ%20Partners%20in%20Suits.webp"
              }
              alt=""
            />
          </div>
        </div>

        {/* Content */}
        <div className="content md:ms-[10%] md:w-[50%]">
          <h1 className="text-3xl font-bold text-white py-6">{title}</h1>
          <p className="text-white text-base font-normal">{description}</p>
          <div className="features pt-10">
            {features.map((point, idx) => (
              <span
                key={idx}
                className="text-white text-sm font-normal block pb-3"
              >
                <IoCheckmarkDone
                  size={20}
                  className="inline-block me-2 mb-1 text-tertiary_color"
                />
                {point}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
