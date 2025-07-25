import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Skynet from "../components/Skynet";
import SkynetAdvantage from "../components/SkynetAdvantage";
import ScrollToTop from "../components/ScrollToTop";
import SkynetTimeline from "../components/SkynetTimeline";
import CTABanner from "../components/CTABanner";

const SkynetPage = () => {
  return (
    <>
      <section
        className="relative w-full lg:h-[80vh] xl:h-[70vh] bg-cover bg-center z-[10]"
        style={{
          backgroundImage: `linear-gradient(to right, #15161c 40%, rgba(21, 22, 28,0.3)), url(https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/64eb9b0110008b830a74c25a_SJ%20Recruiting%2032.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container px-5">
          <Navbar />
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-[-1]"></div>
        {/* <div className="inset-0 absolute w-[50%] h-full bg-black opacity-85 z-[-1]"></div> */}
        <Skynet />
      </section>
      <SkynetAdvantage />
      <SkynetTimeline />
      <CTABanner />
      <Footer />
    </>
  );
};

export default SkynetPage;
