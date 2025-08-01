import React from "react";
import Navbar from "./Navbar";
import BlurText from "./ui/BlurText";
import ShinyText from "./ui/ShinyText";

const  Banner = () => {
  return (
    <>
      <div
        className="bg-img w-full h-[50vh] md:h-[70vh] relative z-[1]"
        style={{
          backgroundImage: "url('/images/showroom/Banner.png')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "40% -100px",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay bg-black opacity-60 absolute top-0 left-0 w-full h-full z-[-1]"></div>
        <div className="container">
          <Navbar />
          <div className="banner-content flex flex-col items-center justify-center h-[55vh] z-[2] px-5">
            {/* <h1 className="text-white text-6xl font-bold">Discover the Future of Flight</h1> */}
            <BlurText
              text="Discover the Future of Flight"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[36px] sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            />
            <ShinyText
              text="Experience the thrill of aviation like never before"
              disabled={false}
              speed={5}
              className="custom-class text-[16px] md:text-2xl mt-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
