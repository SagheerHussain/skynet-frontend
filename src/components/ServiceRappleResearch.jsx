import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const ServiceRappleResearch = ({
  data,
  highlightedTitle,
  title,
  description,
}) => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://www.shutterstock.com/image-vector/abstract-background-futuristic-technology-screen-600nw-1687710094.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative py-20 z-[10] parallax-bg"
      >
        <div className="overlay bg-[#111218df] opacity-[.97] absolute top-0 left-0 w-full h-full z-[-1]" />
        <div className="container px-5">
          <div className="w-full mb-20 px-4 flex flex-col justify-between items-center text-center z-[4]">
            <h2
              className="text-4xl xl:text-6xl font-bold text-white mb-4 max-w-4xl mx-auto"
              style={{ lineHeight: "1.1" }}
            >
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                {highlightedTitle}
              </span>{" "}
              {title}
            </h2>
            <p className="text-[#fff] text-xl font-light max-w-5xl mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((item, index) => (
              <div className="w-full p-8 rounded-2xl bg-[#11121889] overflow-hidden relative">
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

            {data.map((item, index) => (
              <></>
              // <div className="flex items-center">
              //   <div className="flip-3d-container">
              //     <div className="flip-3d-inner">
              //       {/* FRONT SIDE */}
              //       <div className="flip-3d-front bg-[#1777cb31] rounded-xl shadow-xl p-6 flex flex-col justify-center items-center">
              //         <div className="text-center">
              //           <h2 className="text-lg font-semibold text-white">
              //             {item.title}
              //           </h2>
              //           <p className="text-xs mt-4 text-white">
              //             {item.description}
              //           </p>
              //         </div>
              //       </div>

              //       {/* BACK SIDE */}
              //       <div className="flip-3d-back bg-[#1777cb31] rounded-xl shadow-xl h-full p-6 flex flex-col justify-center items-center">
              //         <div className="text-center">
              //           <h2 className="text-lg font-semibold text-white">
              //             {item.title}
              //           </h2>
              //           <p className="text-xs mt-4 text-white">
              //             {item.description}
              //           </p>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceRappleResearch;
