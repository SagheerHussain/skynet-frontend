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
              <div className="mb-4 w-full">
                <h3 className="text-white/80 text-xl text-center">
                  Who We Are
                </h3>
              </div>
              <h1 className="text-white text-[1.7rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.7rem] font-bold leading-tight drop-shadow-xl mb-3 text-center">
                Empowering a New Era of Aviation Excellence, Built on Trust and
                Family
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
