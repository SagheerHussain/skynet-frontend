import React from "react";
import Button from "./Button";

const blogData = [
  {
    id: 1,
    title: "Light Jet, Heavy Demand: The Citation Mustang’s Comeback",
    date: "July 3, 2025",
    image:
      "https://www.jetaviva.com/wp-content/uploads/2025/07/Timon-Huber-Blog_Hero-2048x1040.jpg",
  },
  {
    id: 2,
    title: "Next-Level Trainer: What Makes the DA40 NG Stand Out",
    date: "July 3, 2025",
    image:
      "https://www.jetaviva.com/wp-content/uploads/2025/07/HERO-2-Max-Oberbroeckling-Blog-2048x1040.jpg",
  },
  {
    id: 3,
    title: "Navigating Today's Jet Market: What Buyers Are Really Looking For",
    date: "June 19, 2025",
    image:
      "https://www.jetaviva.com/wp-content/uploads/2025/06/Raphael-DC-Fly-in-Blog-Hero-2-2048x1040.jpg",
  },
];

const LatestJets = () => {
  return (
    <section id="latestJets" className="bg-[#fff] py-20 px-4 md:px-16">
      <div className="container">
        <h4 className="text-white text-base bg-gradient-to-r inline-block px-4 py-2 rounded-[30px] from-[#373738] to-[#6c6d6f] font-semibold mb-6">
          Latest Jets
        </h4>
        <h2 className="text-4xl md:text-6xl font-semibold mb-10 text-black max-w-2xl">
          Next-Gen Jets:{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Power, Performance & Prestige
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT BIG ARTICLE */}
          <div className="flex flex-col">
            <div className="relative w-full flex items-center justify-center mb-8">
              <div className="w-[28rem] h-[28rem] bg-[#bee0fec1] rounded-full absolute -left-10 z-0"></div>
              <div className="w-[28rem] h-[28rem] rounded-full overflow-hidden relative z-10 border-8 border-[#fff]">
                <img
                  src="https://www.jetaviva.com/wp-content/uploads/2025/07/Jim-Lewis-Blog-Hero-2048x1040.jpg"
                  alt="Hero Jet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h4 className="text-4xl text-black max-w-xl">
              Premier Precision: Why the Premier 1A Remains a Top Acquisition
              Target
            </h4>
            <p className="text-gray-600 text-lg mt-2 mb-6">July 3, 2025</p>

            <Button buttonLabel="Read More" onClick="/showroom" />
          </div>

          {/* RIGHT SMALL ARTICLES */}
          <div className="flex flex-col divide-y divide-gray-300">
            {blogData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-6 first:pt-0 last:pb-0"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-xl font-medium text-black">
                    {item.title}
                  </h4>
                  <p className="text-md text-[#222] mt-1">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestJets;
