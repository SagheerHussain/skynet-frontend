import React from "react";
import teamBanner from "/images/meet-team.png"; // Adjust your path
import { motion } from "framer-motion";
import Button from "./Button";
import { FiPhoneCall } from "react-icons/fi";

const MeetTheTeam = () => {
  return (
    <section
      className="w-full bg-[#fff] py-32 px-4"
      id="meetTheTeam"
      style={{
        backgroundImage: `url("https://bracketweb.com/jetlywp/wp-content/uploads/2023/01/about-1-bg-1.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container px-5">
        <div className="flex flex-col md:flex-row items-center justify-between lg:gap-4 xl:gap-8">
          {/* LEFT CONTENT */}
          <div className="w-[50%] rounded-3xl p-8 text-white">
            <motion.h6
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-sm bg-gradient-to-r from-[#373738] to-[#6c6d6f] inline-block px-4 py-2 rounded-[30px] mb-4"
            >
              Get To Know Us
            </motion.h6>
            {/* Heading */}
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl xl:text-[4rem] font-bold text-primary_theme"
              style={{ lineHeight: "1.1" }}
            >
              Meet the Experts From{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                San Antonio to Duluth
              </span>{" "}
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-[#222] mt-5 text-lg leading-relaxed"
            >
              Our team is the heart of Mason Amelia — passionate professionals
              dedicated to delivering seamless experiences from takeoff to
              landing. With years of aviation insight, customer-first mindset,
              and sharp execution, we’re more than a team — we’re your partners
              in the sky.
            </motion.p>

            {/* Bullet Points */}
            <ul className="mt-6 space-y-3 text-sm md:text-base">
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="flex items-start gap-2 text-primary_theme"
              >
                <span className="text-tertiary_color">✔</span>
                Decades of collective aviation and tech expertise
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="flex items-start gap-2 text-primary_theme"
              >
                <span className="text-tertiary_color">✔</span>
                Grounded in values, driven by innovation
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
                className="flex items-start gap-2 text-primary_theme"
              >
                <span className="text-tertiary_color">✔</span>
                From San Antonio to Duluth — one united mission
              </motion.li>
            </ul>

            {/* CTA + Phone */}
            <div className="flex flex-col sm:flex-row items-center mt-8 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.4 }}
              >
                <Button buttonLabel="Get to Know Us" onClick="/team" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.6 }}
                className="flex items-center gap-3"
              >
                <div className="bg-tertiary_color p-3 rounded-full">
                  <FiPhoneCall />
                </div>
                <div className="text-sm">
                  <p className="text-[#222]">Call Anytime</p>
                  <a
                    href="mailto:info@masonamelia.com"
                    className="font-semibold text-[#222]"
                  >
                    info@masonamelia.com
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="justify-center w-[50%] flex relative z-[10]">
            <motion.img
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              src="https://bracketweb.com/jetlywp/wp-content/uploads/2023/01/about-one-img-1.jpg"
              alt="Team Banner"
              className="rounded-3xl shadow-2xl z-[20] lg:mt-[25px] xl:mt-[100px] ml-[50px]"
            />

            {/* Transparent Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 w-[470px] h-[550px] bg-[#e7f4ff6d] rounded-3xl z-[-1]"
            ></motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
