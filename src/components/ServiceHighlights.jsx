import React from "react";
import plane from "/images/aeroplane.png";

const ServiceHighlights = ({data}) => {
  return (
    <>
      <section className="relative py-20 bg-[#fff]" >
        <div className="container px-5">
          {/* Section Title */}
          <div className="w-full mb-20 px-4 flex flex-col md:flex-row justify-between items-center z-[4]">
            <div className="flex flex-col items-center jsutify-center mx-auto">
              <h2
                className="text-4xl xl:text-6xl font-bold text-[#222] mb-4 text-center max-w-4xl"
                style={{ lineHeight: "1.1" }}
              >
                Streamlined{" "}
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Aircraft Acquisition
                </span>{" "}
                for Confident Ownership
              </h2>
              <p className="text-[#222] text-2xl font-light ms-4 text-center max-w-5xl">
                Every acquisition tells a story. Discover how Mason Amelia’s
                proven strategies deliver precise, profitable outcomes—from
                first contact to final delivery.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex items-center gap-10">
            {/* 3D Plane Image */}
            <div className=" w-[50%] mx-auto sticky top-0 self-start">
              <img
                src={plane}
                alt="3D Reflected Airplane"
                className="w-full  object-contain"
              />
              <img
                src={plane}
                alt="Reflection"
                className="
               w-full object-contain
               transform scale-y-[-1]
               opacity-50
               mt-[-20px]
               relative z-0
               pointer-events-none
               select-none
               mask-gradient
            "
              />
            </div>

            {/* Challenge, Solution, Result */}
            <div className="w-[50%] space-y-6 text-left text-sm sm:text-base text-gray-800">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="after:bg-[#ffffff1b] after:content-[''] after:translate-y-[20px] after:mb-10 after:block after:w-full after:h-[1px] after:rounded"
                >
                  <h3 className="text-[1.6rem] text-[#222] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#333] text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHighlights;
