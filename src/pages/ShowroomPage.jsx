import React from "react";
import Slider from "../components/Slider";
import Listing from "../components/Listing";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import useGsapScroll from "../hooks/useGsapScroll";

const ShowroomPage = () => {
  useGsapScroll();
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Banner url="/images/showroom/Banner.png" />
          <Slider />
          <Listing />
          <CTA />
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default ShowroomPage;
