import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const ServiceRappleResearch = () => {
  const data = [
    {
      id: 1,
      title: "Materials & Outreach Preparation",
      description:
        "From buyer intent letters to targeted outreach, we craft compelling packages that open doors. This includes electronic newsletters, private inquiries, and public channel monitoring.",
    },
    {
      id: 2,
      title: "Buyer Intent Letters",
      description:
        "We craft personalized buyer letters that communicate credibility and serious intent — opening doors to off-market conversations and early negotiations with aircraft owners.",
    },
    {
      id: 3,
      title: "Opportunity Monitoring",
      description:
        "We continuously scan global listings, private boards, and industry networks to uncover real-time buying opportunities that match your desired aircraft class and criteria.",
    },
  ];

  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://www.shutterstock.com/image-vector/abstract-background-futuristic-technology-screen-600nw-1687710094.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative py-20 z-[10]"
      >
        <div className="overlay bg-[#111218] opacity-[.97] absolute top-0 left-0 w-full h-full z-[-1]" />
        <div className="container px-5">
          <div className="w-full mb-20 px-4 flex flex-col md:flex-row justify-between items-center z-[4]">
            <div className="flex flex-row items-center jsutify-between">
              <h2 className="text-4xl xl:text-5xl font-bold text-white mb-4" style={{ lineHeight: "1.1" }}>
                Pre <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">Acquisition</span> Insight Curated For Precision
              </h2>
              <p className="text-[#7b889e] text-base font-normal">
                Before any deal takes flight, our team conducts thorough
                groundwork to ensure your acquisition strategy is sharp,
                informed, and advantageously positioned — from outreach to
                opportunity identification.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div className="w-full p-8 rounded-2xl bg-[#15161c74] overflow-hidden relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center">
                    <span className="text-[#afafaf0c] text-[7rem] absolute top-[-50px] left-[-5px] font-extrabold">
                      0{item.id}
                    </span>
                  </div>
                  <h4 className="text-[1.4rem] font-semibold text-white pt-8">
                    {item.title}
                  </h4>
                  <p className="text-sm text-white/80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceRappleResearch;
