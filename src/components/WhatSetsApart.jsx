import {
  FaUserAlt,
  FaBriefcase,
  FaPlayCircle,
  FaGlobeAmericas,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";
import SpotlightCard from "./ui/SpotlightEffect";

const features = [
  {
    icon: <FaUserAlt className="text-5xl mb-5 text-white" />,
    title: "Personal Commitment",
    desc: (
      <>
        Our name is our promise. We treat every client and every aircraft with
        the same dedication, integrity, and personal care from start to finish,
        building lasting relationships.
      </>
    ),
  },
  {
    icon: <FaBriefcase className="text-5xl mb-5 text-white" />,
    title: "Unmatched Experience",
    desc: (
      <>
        With decades in aviation and hundreds of successful transactions, our
        deep industry expertise ensures clients receive knowledgeable guidance
        and outstanding results every time.
      </>
    ),
  },
  {
    icon: <FaPlayCircle className="text-5xl mb-5 text-white" />,
    title: "Modern Marketing",
    desc: (
      <>
        Our YouTube channel, “Looking for Higher,” transforms aircraft sales—
        delivering innovative marketing, expert insights, and powerful reach to
        connect with buyers nationwide.
      </>
    ),
  },
  {
    icon: <FaGlobeAmericas className="text-5xl mb-5 text-white" />,
    title: "Coast-to-Coast Presence",
    desc: (
      <>
        With a nationwide team, Mason Amelia represents aircraft and clients
        from coast to coast, delivering truly personalized service everywhere.
      </>
    ),
  },
  {
    icon: <FaShieldAlt className="text-5xl mb-5 text-white" />,
    title: "Transparent Process",
    desc: (
      <>
        Honesty and transparency are at the core of our business — we guide you
        with clear communication and open-book integrity at every step.
      </>
    ),
  },
  {
    icon: <FaLightbulb className="text-5xl mb-5 text-white" />,
    title: "Innovative Solutions",
    desc: (
      <>
        We embrace the latest technology and creative strategies to ensure your
        aircraft sale or purchase is seamless, efficient, and rewarding,
        delivering exceptional value and peace of mind.
      </>
    ),
  },
];

export default function WhatSetsUsApart() {
  return (
    <section className="w-full flex justify-center items-center py-20">
      <div className="container px-5">
        <div className="rounded-2xl py-8 w-full">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {features.map((card, idx) => (
              <div className={`glass-container w-full`}>
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>
                <SpotlightCard
                  className="custom-spotlight-card"
                  // spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                  <div className="glass-content h-full">
                    <div
                      key={idx}
                      className="rounded-xl p-7 flex flex-col items-center w-full relative"
                    >
                      {card.icon}
                      <h3 className="text-xl font-bold text-white mb-2 text-center">
                        {card.title}
                      </h3>
                      <p className="text-white text-center text-base font-light">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
