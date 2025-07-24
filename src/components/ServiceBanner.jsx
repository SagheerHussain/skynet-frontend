import React from "react";
import Navbar from "./Navbar";

const ServiceBanner = ({ banner }) => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-screen h-[40vh] relative"
      >
        <div className="overlay bg-black opacity-60 absolute top-0 left-0 w-full h-full z-[0]" />
        <div className="container px-5">
          <Navbar />
        </div>
      </section>
    </>
  );
};

export default ServiceBanner;
