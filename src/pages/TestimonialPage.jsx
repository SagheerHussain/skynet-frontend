import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import bgPlane from "/images/brokerage/banner.avif"; // Replace with your path
import ScrollToTop from "../components/ScrollToTop";
import useGsapScroll from "../hooks/useGsapScroll";

const TestimonialPage = () => {
  useGsapScroll();
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <section
            className="relative w-full bg-cover bg-center flex justify-center z-[10]"
            style={{ backgroundImage: `url(${bgPlane})` }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[-1]"></div>
            <div className="container">
              <Reviews />
            </div>
          </section>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default TestimonialPage;
