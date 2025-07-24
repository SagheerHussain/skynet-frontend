import React from "react";
import { HiOutlineMail } from "react-icons/hi";

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
          backgroundImage: `url("https://cdn.prod.website-files.com/64c2db8601707a81c0d28ff5/685470b93fc698d37f20b3e3_Why%201920%20BG%20Image.avif")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="relative py-20 z-[10]"
      >
        <div className="overlay bg-[#111218] opacity-[.97] absolute top-0 left-0 w-full h-full z-[-1]" />
        <div className="container px-5 flex">
          <div className="w-[50%] mb-20 px-4 flex flex-col items-center justify-center z-[4]">
            <h2
              className="text-4xl xl:text-[5rem] font-bold text-white mb-4"
              style={{ lineHeight: "1.1" }}
            >
              <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                {highlightedTitle}
              </span>{" "}
              {title}
            </h2>
            <p className="text-[#eee] text-xl font-light">
              {description}
            </p>
          </div>

          <div className="ms-[15%] w-[40%] flex flex-col gap-4">
            {data.map((item, index) => (
              <div className={`w-full p-8 rounded-2xl bg-[#81818274] overflow-hidden relative`}>
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrokerageRappleResearch;
