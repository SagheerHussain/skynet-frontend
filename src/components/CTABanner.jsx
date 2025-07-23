import React from "react";
import Button from "./Button";
import banner from "/images/cta-banner.png"

const CTABanner = () => {
  return (
    <>
      <div
        className="relative text-white py-10 px-6 text-center overflow-hidden rounded-[30px] z-10 my-20"
        style={{
          backgroundImage:
            `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text Content */}
        <h2 className="text-sm uppercase mb-4 text-gray-400">
          Get Started Today
        </h2>
        <h1 className="text-4xl sm:text-5xl font-bold leading-snug">
          Ready to connect and <br />
          acquire the{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            aircraft of your dreams?
          </span>
        </h1>

        {/* CTA Button */}
        <div className="mt-8 ">
          <Button buttonLabel="Contact Us" onClick="/contact" />
        </div>
      </div>
    </>
  );
};

export default CTABanner;
