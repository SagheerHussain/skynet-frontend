import React, { useEffect, useRef, useState } from "react";
import { IoCheckmarkDone } from "react-icons/io5";

const TabContent = ({ src, title, description, features }) => {
  return (
    <div className="w-full relative h-full rounded-2xl p-4 sm:p-10 text-xl md:text-4xl font-bold text-dark bg-[#15161C]">
      <div className="flex md:flex-row flex-col py-14">
        {/* Image */}
        <div className="image sm:p-6 mt-[-4rem] md:w-[55%] lg:w-[40%] relative z-[2] flex flex-col items-center">
          <img
            src={src}
            alt="description"
            className="md:w-[400px] h-[400px] object-cover shadow-2xl rounded-[30px]"
          />
        </div>

        {/* Content */}
        <div className="content md:w-[45%] lg:w-[50%]">
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
