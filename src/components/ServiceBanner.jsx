import React from "react";
import Navbar from "./Navbar";
import ServiceBannerContent from "./ServiceBannerContent";

const ServiceBanner = ({ banner }) => {
  return (
    <>
      <div className="container">
        <Navbar />
      </div>
      <section
        style={{
          backgroundImage: `url("https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/64eb997e0f9044a1a9eeaba0_SJ%20Recruiting%201.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="w-screen h-[70vh] sticky top-0 z-[-1]"
      >
        <div className="overlay bg-[#111218] opacity-80 absolute top-0 left-0 w-full h-full z-[0]" />
        <div className="container px-5">
          <ServiceBannerContent
            highlightTitle={"Simplifying Aviation"}
            title="One Deal at a Time"
            description="At Mason Amelia, we bring clarity to the complexities of
                          aircraft transactions. Whether you're buying or selling, our
                          experts ensure every step is smooth, transparent, and strategic.
                          With decades of aviation insight, we turn challenges into
                          confident decisions — seamlessly. Let us handle the details, so
                          you can focus on what truly matters."
          />
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
