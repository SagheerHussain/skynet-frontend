import React from "react";
import { Tabs } from "./ui/tabs";
import TabContent from "./TabContent";
import Button from "./Button";

function WhyChoosUs() {
  const services = [
    {
      title: "Personal Commitment",
      description:
        "Our name is our promise—every client, every transaction, every time. We build lasting relationships through true personal care and integrity in all we do.",
      features: [
        "Individual attention for every client",
        "Long-term, trust-based relationships",
        "Unwavering dedication from start to finish",
      ],
    },
    {
      title: "Unmatched Expertise",
      description:
        "Decades of hands-on aviation experience and over 200 successful transactions mean you get trusted advice, proven strategies, and results you can count on.",
      features: [
        "Decades in the aviation industry",
        "200+ successful global transactions",
        "Expert advice on every aircraft deal",
      ],
    },
    {
      title: "Nationwide Representation",
      description:
        "From coast to coast, our reach is nationwide—ensuring clients and aircraft receive seamless, personalized support and powerful connections anywhere in the country.",
      features: [
        "Team presence across the United States",
        "Seamless coast-to-coast service",
        "Personalized solutions for every region",
      ],
    },
  ];

  const tabs = services.map((service) => ({
    title: service.title,
    value: service?.title
      ?.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(""),
    content: (
      <TabContent
        title={service.title}
        src={
          "https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/64e67ebffb32deb5a66c7725_SJ%20Partners%20in%20Suits.webp"
        }
        description={service.description}
        features={service.features}
      />
    ),
  }));

  return (
    <section id="why-choosen" className="py-20">
      <div className="container">
        <div className="w-full mb-20 px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Headline */}
          <div className="md:w-1/2">
            <h4 className="text-white text-base bg-gradient-to-r inline-block px-4 py-2 rounded-[30px] from-[#373738] to-[#6c6d6f] font-semibold mb-6">
              Why Choose Us
            </h4>
            <h2 className="text-4xl xl:text-5xl font-bold text-white mb-4">
              Aviation is more than our business{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                it’s our passion and our promise.
              </span>
            </h2>
          </div>
          {/* Right Side: Paragraph + Button */}
          <div className="md:w-1/2 flex flex-col justify-center items-start mt-8 md:mt-0 md:pl-12">
            <p className="text-lg text-neutral-300 mb-8 max-w-xl">
              At Mason Amelia, you’ll find a brokerage built on trust,
              expertise, and genuine personal commitment. Our boutique approach
              means you’re never just another transaction. We listen, understand
              your mission, and tailor every step to your needs—delivering
              clarity, confidence, and results.
            </p>
          </div>
        </div>

        <div className="h-[550px] [perspective:1000px] relative flex flex-col mx-auto w-full items-start justify-start">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  );
}

export default WhyChoosUs;
