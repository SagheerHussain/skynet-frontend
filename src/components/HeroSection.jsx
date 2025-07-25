import React from "react";
import GlassCard from "./GlassCard";
import GlassmorphismCircularCard from "./GlassmorphismCircularCard";
import { FaPlane, FaHandsHelping } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const mediaHeight = useMediaQuery("(max-height: 680px)");

  return (
    <div
      className="
            w-full h-[130vh] sm:h-[120vh] lg:h-screen
            flex justify-center
            relative 
          "
    >
      <div className="container z-10 px-4">
        <div className="px-6 py-12 flex flex-col xl:gap-8 justify-end h-[90vh] relative text-center text-white my-auto">
          <GlassCard />
          <div className="w-full flex justify-between mt-8">
            <div
              className={`glass-container w-full ${
                mediaHeight
                  ? "translate-y-[200px] md:translate-y-[80px]"
                  : "md:translate-y-0 translate-y-[100px]"
              }`}
              style={{ borderRadius: "20px" }}
            >
              <div
                className="glass-filter"
                style={{ backdropFilter: "blur(10px)" }}
              ></div>
              <div className="glass-overlay"></div>
              <div className="glass-specular"></div>
              <div
                className={`h-full glass-content w-full flex-wrap md:flex-nowrap`}
                style={{ padding: "2rem 1rem" }}
              >
                <div className="w-1/2 md:w-[33%] relative">
                  <GlassmorphismCircularCard
                    title="Sell My Plane"
                    tagline="Aircraft Brokerage Services"
                    link="/brokerage"
                    icon={
                      <FaPlane
                        size={40}
                        color="#111218"
                        className="-mt-8 bg-tertiary_color p-2 rounded-[50%]"
                      />
                    }
                    customClasses="w-full"
                  />
                  <div className="z-[-1] glassmorphism_effect_line w-[1px] h-[60%] bg-white/20 absolute right-[0px] top-1/2 -translate-y-1/2"></div>
                </div>
                <div className="w-1/2 md:w-[33%] relative">
                  <GlassmorphismCircularCard
                    title="Buy My Plane"
                    tagline="Acquisition Services"
                    link="/acquisition"
                    icon={
                      <FaUsers
                        size={40}
                        color="#111218"
                        className="-mt-8 bg-tertiary_color p-2 rounded-[50%]"
                      />
                    }
                    customClasses="w-full"
                  />
                  <div className="z-[-1] glassmorphism_effect_line w-0 md:w-[1px] h-[60%] bg-white/20 absolute right-[0px] top-1/2 -translate-y-1/2"></div>
                </div>
                <div className="w-1/2 md:w-[33%] relative">
                  <GlassmorphismCircularCard
                    title="Advisory"
                    tagline="Legal • Sales Tax • Insurance"
                    link="/skynet"
                    icon={
                      <FaHandsHelping
                        size={40}
                        color="#111218"
                        className="-mt-8 bg-tertiary_color p-2 rounded-[50%]"
                      />
                    }
                    customClasses="w-full"
                  />
                  <div className="z-[-1] glassmorphism_effect_line w-[1px] h-[60%] bg-white/20 absolute right-[0px] top-1/2 -translate-y-1/2"></div>
                </div>
                <div className="w-1/2 md:w-[33%] relative">
                  <GlassmorphismCircularCard
                    title="Aircraft Valuation"
                    tagline="Real-Time Market Insights"
                    link="/higher"
                    icon={
                      <FiTrendingUp
                        size={40}
                        color="#111218"
                        className="-mt-8 bg-tertiary_color p-2 rounded-[50%]"
                      />
                    }
                    customClasses="w-full"
                  />
                </div>
              </div>
            </div>
            {/* 3 Glassmorphism Circular Cards with responsive positions and sizes */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
