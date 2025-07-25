import React from "react";

const ServiceBannerContent = ({ highlightTitle, title, description }) => {
  return (
    <>
      <section id="banner_content" className="flex items-center h-[70vh] pb-[5rem]">
        <div className="container px-5">
          <div className={`glass-container w-full p-10`}>
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content h-full flex flex-col p-8">
              <h1 className="text-7xl text-white" style={{ lineHeight: "1.2" }}>
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  {highlightTitle}
                </span>{" "} <br />
                {title}
              </h1>
              <p className="text-white text-lg font-light max-w-4xl mt-5">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBannerContent;
