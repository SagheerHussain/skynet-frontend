import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Team from "../components/Team";
import bgPlane from "/images/team/banner.avif"; // Replace with your path
import Contact from "../components/Contact";
import ScrollToTop from "../components/ScrollToTop";
import CTABanner from "../components/CTABanner";
import useGsapScroll from "../hooks/useGsapScroll";

const TeamPage = () => {
  // useGsapScroll();

  return (
    <>
      <div className="container">
        <Navbar />
      </div>

      <section
        className="relative w-full bg-cover bg-center flex justify-center z-[10] -mt-[10vh]"
        style={{ backgroundImage: `url(${bgPlane})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#111218] opacity-90 z-[-1]"></div>

        <Team />
      </section>
      <div className="container px-5">
        <CTABanner />
      </div>
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
