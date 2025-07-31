import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Higher from "../components/Higher";
import bgPlane from "/images/higher/banner.jpg"; // Replace with your path
import Gallary from "../components/Gallary";
import ScrollToTop from "../components/ScrollToTop";
import Vision from "../components/Vision";
import CTABanner from "../components/CTABanner";
import useGsapScroll from "../hooks/useGsapScroll";

const HigherPage = () => {
  // useGsapScroll();
  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <section
        className="relative w-full bg-cover h-screen md:h-[70vh] lg:h-[80vh] xl:h-[70vh] md:-mt-[10vh] bg-center flex justify-center z-[10]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1]"></div>
        <div className="container">
          <Higher />
        </div>
      </section>
      <Gallary />
      <Vision />
      <div className="container px-5">
        <CTABanner />
      </div>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default HigherPage;
