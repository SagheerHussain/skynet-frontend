import React from "react";
import Aurora from "./ui/Aurora";
import Button from "./Button";
import { FaPlaneDeparture, FaShieldAlt, FaHandshake } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { EffectFade, Autoplay } from "swiper/modules";

const SliderWrapper = () => {
  const cards = [
    {
      icon: <FaPlaneDeparture className="text-tertiary_color text-4xl" />,
      title: "Aviation Expertise",
      description:
        "From takeoff to close, we simplify aircraft deals with unmatched industry insight and support.",
      buttonLabel: "Let Us Help",
      onClick: "/contact",
    },
    {
      icon: <FaShieldAlt className="text-tertiary_color text-4xl" />,
      title: "Secure Transactions",
      description:
        "Avoid costly pitfalls. We ensure full legal, financial, and regulatory compliance throughout your journey.",
      buttonLabel: "Let Us Help",
      onClick: "/contact",
    },
    {
      icon: <FaHandshake className="text-tertiary_color text-4xl" />,
      title: "Trusted Partners",
      description:
        "Work with a team that values transparency, trust, and long-term relationships in every deal.",
      buttonLabel: "Let Us Help",
      onClick: "/contact",
    },
  ];

  return (
    <>
      <section className="relative w-screen h-full xl:h-[70vh] py-20 xl:py-0 z-[-1]">
        <div className="absolute w-screen top-0 left-0 h-full">
          <div className="absolute w-screen h-full bg-black opacity-70 z-[10]"></div>
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            modules={[EffectFade, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="mySwiper z-[-10]"
          >
            {[
              "https://static.wixstatic.com/media/04f737_9493f31851e9469f97c2ae6b820f5802~mv2.jpg/v1/fill/w_1719,h_341,al_c,q_85,enc_avif,quality_auto/04f737_9493f31851e9469f97c2ae6b820f5802~mv2.jpg",
              "https://static.wixstatic.com/media/04f737_2658b2d02ad6476d8b75651269c301e9~mv2.jpg/v1/fill/w_1200,h_238,al_c,q_80,enc_avif,quality_auto/04f737_2658b2d02ad6476d8b75651269c301e9~mv2.jpg",
              "https://static.wixstatic.com/media/04f737_aed1d2f6663144b1af3fcf6d875e1971~mv2.jpg/v1/fill/w_1905,h_378,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_aed1d2f6663144b1af3fcf6d875e1971~mv2.jpg",
            ].map((item, index) => (
              <SwiperSlide
                key={index}
                className="min-w-screen h-full xl:min-h-[70vh]"
                style={{
                  backgroundImage: `url(${item})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container px-5">
          {/* <Aurora
            colorStops={["#222", "#444", "#222"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          /> */}

          <svg style={{ display: "none" }}>
            <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.008 0.008"
                numOctaves="2"
                seed="92"
                result="noise"
              />
              <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
              <feDisplacementMap
                in="SourceGraphic"
                in2="blurred"
                scale="70"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>

          <div className="relative inset-0 flex flex-col items-center justify-center text-white z-[20] h-full xl:h-[70vh]">
            <div className="flex flex-col justify-center items-center">
              <motion.h1
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl lg:text-6xl  font-bold text-white text-center"
              >
                Precision Aviation{" "}
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Global Impact.
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg lg:text-lg max-w-6xl text-white font-light mx-auto text-center pt-4 pb-8"
              >
                At Mason Amelia, we don’t just broker aircraft — we deliver
                confidence, clarity, and world-class service every step of the
                way.
              </motion.p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className="glass-container glass-container--rounded px-4 py-3"
                  style={{
                    border: "none",
                    boxShadow:
                      "0 6px 6px rgba(0, 0, 0, 0.439), 0 0 20px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 30, duration: 0.5, delay: 0.3 }}
                >
                  <div
                    className="glass-filter"
                    style={{
                      filter: "url(#lg-dist) !important",
                      backdropFilter: "blur(0px) !important",
                    }}
                  ></div>
                  <div className="glass-overlay"></div>
                  <div className="glass-specular"></div>
                  <div className="glass-content glass-content--inline justify-center">
                    <div className="relative rounded-xl flex flex-col items-center justify-center text-center p-4 h-full w-full">
                      <div className="mb-4">{card.icon}</div>
                      <h2 className="text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-4">
                        {card.title}
                      </h2>
                      <p className="text-txt_light_color mb-4">
                        {card.description}
                      </p>
                      {/* <div className="z-[9999]">
                        <Button
                          buttonLabel="Let Us Help"
                          onClick={"/contact"}
                        />
                      </div> */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderWrapper;
