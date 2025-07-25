import React from "react";
import banner from "/images/skynet/backgroundBanner.png"
import { motion } from "framer-motion";

const BrokerageRappleResearch = ({
  data,
  highlightedTitle,
  title,
  description,
}) => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="relative py-20 z-[10]"
      >
        <div className="overlay bg-[#111218d8] opacity-[.97] absolute top-0 left-0 w-full h-full z-[-1]" />
        <div className="container px-5 flex">
          <div className="w-[50%] mb-20 px-4 flex flex-col items-center justify-center z-[4]">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl xl:text-7xl font-bold text-white mb-4"
              style={{ lineHeight: "1.1" }}
            >
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                {highlightedTitle}
              </span>{" "}
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#eee] text-xl font-light"
            >
              {description}
            </motion.p>
          </div>

          <div className="ms-[15%] w-[40%] flex flex-col gap-4">
            {data.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`w-full p-8 rounded-2xl bg-[#1777cbd0] overflow-hidden relative`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center">
                    <span className="text-[#e8e8e819] text-[7rem] absolute top-[-50px] left-[-5px] font-extrabold">
                      0{item.id}
                    </span>
                  </div>
                  <h4 className="text-[1.4rem] font-semibold text-white pt-8">
                    {item.title}
                  </h4>
                  <p className="text-base text-white/80">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrokerageRappleResearch;
