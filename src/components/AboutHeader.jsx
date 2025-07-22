import React from "react";
import Button from "./Button";

const AboutHeader = () => {
  return (
    <>
      <div className="relative w-full h-[520px] rounded-2xl overflow-hidden flex items-stretch">
        {/* Background image */}
        <img
          src="/hero.jpg" // <- replace with your image path
          alt="Mason Amelia Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-14 max-w-xl text-left">
          <div className="mb-4 text-white/80 text-lg">Who We Are</div>
          <h1 className="text-white text-5xl font-bold leading-tight drop-shadow-xl mb-3">
            <span className="block">Elevating</span>
            <span className="block">Aircraft Sales</span>
          </h1>
          <div className="text-white/85 text-xl font-medium mb-7">
            with Heart, Trust,
            <br />
            and Vision
          </div>
          <Button buttonLabel="Meet The Team" />
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
