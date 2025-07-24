import React from "react";

const ServiceBannerContent = () => {
  return (
    <>
      <section id="banner_content" className="-mt-[7rem] pb-[5rem]">
        <div className="container px-5">
          <div className={`glass-container w-full p-10`}>
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content h-full flex flex-col p-8">
              <h1 className="text-7xl text-white" style={{ lineHeight: "1.2" }}>
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Simplifying Aviation
                </span>{" "} <br />
                One Deal at a Time
              </h1>
              <p className="text-txt_light_color font-light max-w-4xl mt-5">
                At Mason Amelia, we bring clarity to the complexities of
                aircraft transactions. Whether you're buying or selling, our
                experts ensure every step is smooth, transparent, and strategic.
                With decades of aviation insight, we turn challenges into
                confident decisions — seamlessly. Let us handle the details, so
                you can focus on what truly matters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBannerContent;
