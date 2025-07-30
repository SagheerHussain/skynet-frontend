import React from "react";
import Navbar from "../components/Navbar";
import AircraftDetail from "../components/AircraftDetail";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import useGsapScroll from "../hooks/useGsapScroll";

const AircraftDetailPage = () => {
  useGsapScroll();

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <AircraftDetail />
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </>
  );
};

export default AircraftDetailPage;
