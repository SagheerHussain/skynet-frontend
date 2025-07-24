import React from "react";
import plane from "/images/aeroplane.png";

const ServiceHighlights = () => {
  return (
    <>
      <section className="relative py-20">
        <div className="container px-5">
          {/* Section Title */}
          <div className="w-full mb-20 px-4 flex flex-col md:flex-row justify-between items-center z-[4]">
            <div className="flex flex-row items-center jsutify-between">
              <h2
                className="text-4xl xl:text-5xl font-bold text-white mb-4"
                style={{ lineHeight: "1.1" }}
              >
                Streamlined{" "}
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Aircraft Acquisition
                </span>{" "}
                for Confident Ownership
              </h2>
              <p className="text-[#7b889e] text-base font-normal">
                Every acquisition tells a story. Discover how Mason Amelia’s
                proven strategies deliver precise, profitable outcomes—from
                first contact to final delivery.
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="flex items-center gap-10">
            {/* 3D Plane Image */}
            <div className="relative w-[50%] mx-auto">
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
               opacity-10
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
              <div className="after:bg-[#ffffff1b] after:content-[''] after:translate-y-[20px] after:mb-10 after:block after:w-full after:h-[1px] after:rounded">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Tailored Aircraft Identification
                </h4>
                <p className="text-[#ccc] font-light text-sm">
                  We begin by identifying aircraft that align precisely with
                  your mission profile, operational goals, and financial
                  expectations—narrowing down by make, model, and availability.
                </p>
              </div>
              <div className="after:bg-[#ffffff1b] after:content-[''] after:translate-y-[20px] after:mb-10 after:block after:w-full after:h-[1px] after:rounded">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Strategic Outreach & Preparation
                </h4>
                <p className="text-[#ccc] font-light text-sm">
                  Our team prepares compelling outreach materials—ranging from
                  buyer intent letters to discreet seller inquiries and digital
                  briefings—to access both public and off-market opportunities.
                </p>
              </div>
              <div className="after:bg-[#ffffff1b] after:content-[''] after:translate-y-[20px] after:mb-10 after:block after:w-full after:h-[1px] after:rounded">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Data-Driven Aircraft Evaluation
                </h4>
                <p className="text-[#ccc] font-light text-sm">
                  Each candidate aircraft is analyzed through a lens of price,
                  value, and operational fit, offering a clear comparison to
                  ensure confident decision-making.
                </p>
              </div>
              <div className="after:bg-[#ffffff1b] after:content-[''] after:translate-y-[20px] after:mb-10 after:block after:w-full after:h-[1px] after:rounded">
                <h4 className="text-2xl font-bold text-white mb-3">
                  End-to-End Transaction Management
                </h4>
                <p className="text-[#ccc] font-light text-sm">
                  We handle LOIs, negotiate terms, finalize contracts, and
                  oversee all due diligence processes—ensuring speed, accuracy,
                  and full transparency at every step.
                </p>
              </div>
              <div className="">
                <h4 className="text-2xl font-bold text-white mb-3">
                  Full-Service Integration Support
                </h4>
                <p className="text-[#ccc] font-light text-sm">
                  From legal and escrow coordination to insurance, financing,
                  and pilot training—we bring the right partners to the table
                  and manage all moving parts to close successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceHighlights;
