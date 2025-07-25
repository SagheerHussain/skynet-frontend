import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

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
        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-base bg-gradient-to-r inline-block px-4 py-2 rounded-[30px] from-[#373738] to-[#6c6d6f] font-semibold mb-6"
        >
          Latest Jets
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-semibold mb-10 text-black max-w-2xl"
        >
          Next-Gen Jets:{" "}
          <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
            Power, Performance & Prestige
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT BIG ARTICLE */}
          <div className="flex flex-col">
            <div className="relative w-full flex items-center justify-center mb-8 z-[0]">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="w-[28rem] h-[28rem] bg-[#bee0fec1] rounded-full absolute -left-10 z-0"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="w-[28rem] h-[28rem] rounded-full overflow-hidden relative z-10 border-8 border-[#fff]"
              >
                <img
                  src="https://www.jetaviva.com/wp-content/uploads/2025/07/Jim-Lewis-Blog-Hero-2048x1040.jpg"
                  alt="Hero Jet"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-4xl text-black max-w-xl"
            >
              Premier Precision: Why the Premier 1A Remains a Top Acquisition
              Target
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-gray-600 text-lg mt-2 mb-6"
            >
              July 3, 2025
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <Button buttonLabel="Read More" onClick="/showroom" />
            </motion.div>
          </div>

          {/* RIGHT SMALL ARTICLES */}
          <div className="flex flex-col divide-y divide-gray-300">
            {blogData.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 py-6 first:pt-0 last:pb-0"
              >
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: .8 }}
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-28 rounded-full object-cover"
                />
                <div>
                  <motion.h4
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-xl font-medium text-black"
                  >
                    {item.title}
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="text-md text-[#222] mt-1"
                  >
                    {item.date}
                  </motion.p>
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
