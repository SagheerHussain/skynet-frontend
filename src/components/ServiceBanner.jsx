import React from "react";
import Navbar from "./Navbar";
import ServiceBannerContent from "./ServiceBannerContent";
import { useLocation } from "react-router-dom";

const ServiceBanner = ({ banner }) => {
  const location = useLocation();

  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <section
        className="w-screen h-full lg:h-screen xl:h-[90vh] md:sticky top-0 mt-[-10vh]"
        style={{
          backgroundImage: `url(${
            location.pathname === "/brokerage"
              ? "https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/65205905e79b83c5cf244e17_SJ%20Inventory%20Banner.webp"
              : "https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/64eb9b0110008b830a74c25a_SJ%20Recruiting%2032.webp"
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="overlay bg-[#111218] opacity-80 absolute top-0 left-0 w-full h-full " />
        <div className="container px-5 pt-[25vh] md:pt-[15vh] lg:pt-[10vh] xl:pt-[15vh]">
          <ServiceBannerContent
            highlightTitle={
              location.pathname === "/brokerage"
                  ? "Navigating Brokerage"
                  : "Simplifying Aviation"
              }
              title={
                location.pathname === "/brokerage"
                  ? "With Confidence & Clarity"
                  : "One Deal at a Time"
              }
              description={
                location.pathname === "/brokerage"
                  ? "At Mason Amelia, we simplify the complexities of aircraft brokerage. Whether you're listing or buying, our experts ensure every step is precise, strategic, and transparent. With deep industry insight and relentless execution, we guide high-stakes deals to successful closures—so you can focus on the results, not the process."
                  : "At Mason Amelia, we bring clarity to the complexities of aircraft transactions. Whether you're buying or selling, our experts ensure every step is smooth, transparent, and strategic. With decades of aviation insight, we turn challenges into confident decisions — seamlessly. Let us handle the details, so you can focus on what truly matters."
              }
            />
          </div>
      </section>
    </>
  );
};

export default ServiceBanner;
