import React from "react";
import Button from "./Button";

const AboutHeader = () => {
  return (
    <>
      <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden flex">
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
              <h1
                className="text-white text-[1.7rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] xl:text-6xl font-bold leading-tight drop-shadow-xl mb-3 text-center"
                style={{ lineHeight: "1.2" }}
              >
                Redefining Aviation with{" "}
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Trust and Legacy
                </span>
              </h1>
              <Button buttonLabel="Meet The Team" onClick="/team" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHeader;
