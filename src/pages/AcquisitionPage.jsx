import React from "react";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ServiceBanner from "../components/ServiceBanner";
import banner from "/images/acquisition/banner.avif";
import ServiceBannerContent from "../components/ServiceBannerContent";
import CTABanner from "../components/CTABanner";
import ServiceRappleResearch from "../components/ServiceRappleResearch";
import ServiceHighlights from "../components/ServiceHighlights";

const AcquisitionPage = () => {
  return (
    <>
      <ServiceBanner banner={banner} />
      <main id="acquisition">
        <ServiceBannerContent />
        <ServiceRappleResearch />
        <ServiceHighlights />
        <div className="container">
          <CTABanner />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AcquisitionPage;
