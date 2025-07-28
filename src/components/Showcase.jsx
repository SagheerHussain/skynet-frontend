import React from "react";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import useMediaQuery from "@mui/material/useMediaQuery";

const Showcase = () => {
  const mobileMedia = useMediaQuery("(max-width: 450px)");

  return (
    <div className=" w-screen z-10">
      <div
        className="sm:absolute top-0 left-0 w-full h-full z-0"
        style={{
          filter: "drop-shadow(20px 10px 15px rgba(255, 255, 255, 0.2))",
        }}
      >
        <div className="w-full h-[30vh] sm:h-[50vh] md:h-[75%] lg:h-full overflow-hidden">
          <div
            className="overlay absolute top-0 left-0 w-full h-full z-10"
            style={{
              background:
                "linear-gradient(to top, #111218fd 30%, #11121868 100%)",
            }}
          ></div>
          <video
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
            playsInline
          >
            <source src="/assets/file.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <Navbar />

      <HeroSection />
    </div>
  );
};

export default Showcase;
