import React from "react";
import { FaFileAlt, FaLightbulb, FaShieldAlt } from "react-icons/fa";

const SkynetAdvantage = () => {
  return (
    <>
      <section id="skynet_advantage">
        <div className="container px-5">
          <div className="py-16 px-4 md:px-20 text-white">
            <h2 className="text-3xl xl:text-6xl font-bold text-center mb-2">
              Unlock{" "}
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                SkyNet’s Data Advantage
              </span>
            </h2>
            <p className="text-center text-gray-400 mb-10 text-lg mt-4">
              Discover how SkyNet delivers accurate aircraft valuations through
              private market data, intelligent analysis, and proven methodology.
              We turn complex data into confident decisions—empowering both
              buyers and sellers. Built for aviation professionals who demand
              precision.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
              {/* Card 1 */}
              <div className="bg-[#13151c] group transition-all duration-200 relative overflow-hidden rounded-3xl w-[90%] md:w-1/3 px-6 py-8 text-center flex flex-col items-center transform scale-90 md:mt-10">
                <FaFileAlt className="text-6xl text-white mb-4 bg-[#1777cb] p-3 rounded-full" />
                <h3 className="font-semibold text-2xl mb-2">
                  Precision Data Access
                </h3>
                <p className="text-white text-base font-light mt-3">
                  Gain access to exclusive off-market aircraft transaction data,
                  unavailable on public platforms. Our proprietary database
                  empowers buyers and sellers with real-time, confidential
                  insights. Eliminate guesswork with data that reflects true
                  market behavior. SkyNet makes precision a default, not a
                  bonus.
                </p>
                <div className="absolute group-hover:translate-y-[-60%] top-[50%] left-[10%] group-hover:left-[0%] transition-all duration-200 rotate-[45deg] w-[600px] h-[800px] bg-[#1777cb] opacity-[.05] z-[-1]"></div>
              </div>

              {/* Card 2 (Center) */}
              <div className="bg-[#13151c] group transition-all duration-200 relative overflow-hidden rounded-3xl w-[95%] md:w-1/3 px-6 py-10 text-center flex flex-col items-center transform scale-[1.15] mt-[2rem] z-10">
                <FaLightbulb className="text-6xl text-white mb-4 bg-[#1777cb] p-3 rounded-full" />
                <h3 className="font-semibold text-2xl mb-2">
                  Intelligent Market Analysis
                </h3>
                <p className="text-white text-base font-light mt-3">
                  Our analytics engine processes vast datasets with zero MLS
                  dependency. SkyNet uses pattern recognition, historical
                  trends, and predictive logic to power decisions. You get
                  clarity in a market often filled with ambiguity. It’s not just
                  data—it’s guided intelligence.
                </p>
                <div className="absolute group-hover:translate-y-[-50%] top-[50%] left-0 transition-all duration-200 rotate-[45deg] w-[800px] h-[800px] bg-[#1777cb] opacity-[.05] z-[-1]"></div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#13151c] group transition-all duration-200 relative overflow-hidden rounded-3xl w-[90%] md:w-1/3 px-6 py-8 text-center flex flex-col items-center transform scale-90 md:mt-10">
                <FaShieldAlt className="text-6xl text-white mb-4 bg-[#1777cb] p-3 rounded-full" />
                <h3 className="font-semibold text-2xl mb-2">
                  Verified Valuation Confidence
                </h3>
                <p className="text-white text-base font-light mt-3">
                  Back every valuation with Mason Amelia’s tested and trusted
                  methodology. From corporate jets to private aircraft, our
                  accuracy is unmatched. Confidence isn’t optional when millions
                  are at stake—it’s required. With SkyNet, peace of mind comes
                  built-in.
                </p>
                <div className="absolute group-hover:translate-y-[-60%] top-[50%] left-[10%] group-hover:left-[0%] transition-all duration-200 rotate-[45deg] w-[600px] h-[800px] bg-[#1777cb] opacity-[.05] z-[-1]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SkynetAdvantage;
