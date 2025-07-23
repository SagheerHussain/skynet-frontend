import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import Button from "./Button";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const team = [
  {
    name: "Jesse Adams",
    phone: "(210) 882-9658",
    email: "jesse@masonamelia.com",
    title: "President | Sales & Acquisitions ",
    image:
      "https://static.wixstatic.com/media/04f737_2ec51bc4e12347b6adec7750f2ac3e88~mv2.jpg/v1/crop/x_157,y_249,w_990,h_1003/fill/w_315,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/JA_edited.jpg",
  },
  {
    name: "Melissa Patterson",
    phone: "(432) 553-4241",
    email: "operations@masonamelia.com",
    title: "Operations Manager",
    image:
      "https://static.wixstatic.com/media/04f737_2c4aaa0cafea4b48b8e2002eb3bce55e~mv2.jpg/v1/fill/w_315,h_305,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_6355_edited_edited.jpg",
  },
  {
    name: "Donny Gabriel",
    phone: "(678) 570-8155",
    email: "donny@masonamelia.com",
    title: "Sales & Acquisitions | Flight Ops",
    image:
      "https://static.wixstatic.com/media/04f737_6f72f58bab424ea4aefd8c173fe906e6~mv2.jpg/v1/crop/x_1779,y_102,w_3570,h_3845/fill/w_315,h_339,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/0042_7992_RT.jpg",
  },
  {
    name: "Peyton Lindbloom",
    phone: "(720) 300-2145",
    email: "peyton@masonamelia.com",
    title: "Sales & Acquisitions | Turbine Aircraft",
    image:
      "https://static.wixstatic.com/media/04f737_ac4365d295d54e5883ac79cd35289c15~mv2.jpg/v1/crop/x_0,y_70,w_2624,h_3140/fill/w_315,h_377,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-1.jpg",
  },
  {
    name: "Carlos Lopez",
    phone: "(720) 300-2145",
    email: "peyton@masonamelia.com",
    title: "Videographer | Media Strategist",
    image:
      "https://static.wixstatic.com/media/04f737_e557ad92bfa74140ae49b2f7748812cf~mv2.jpg/v1/crop/x_0,y_3,w_1837,h_2304/fill/w_315,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_5396_edited.jpg",
  },
  {
    name: "Tom Donaldson",
    phone: "(218) 340-6153",
    email: "tom@masonamelia.com",
    title: "Sales & Acquisitions | Flight Ops",
    image:
      "https://static.wixstatic.com/media/04f737_43879c33c26c412691ae5bb35c893616~mv2.jpg/v1/crop/x_191,y_88,w_2159,h_2076/fill/w_315,h_303,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Tom_008_JPG.jpg",
  },
  {
    name: "Melissa Adams",
    phone: "(218) 340-6153",
    email: "info@masonamelia.com",
    title: "Data Analyst | Operations Assistant",
    image:
      "https://static.wixstatic.com/media/04f737_049a22dc06c746b5b1ecdea75206a585~mv2.jpg/v1/crop/x_33,y_0,w_567,h_712/fill/w_315,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Melissa.jpg",
  },
  {
    name: "Nick Buccellato",
    phone: "(518) 578-0609",
    email: "nick@masonamelia.com",
    title: "Sales & Acquisitions | Flight Ops",
    image:
      "https://static.wixstatic.com/media/04f737_5e91991100554352809c6307f5e17ca0~mv2.jpg/v1/crop/x_532,y_680,w_1611,h_2020/fill/w_315,h_395,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4432_JPG.jpg",
  },
];

const TeamSection = () => {
  const navigate = useNavigate();

  return (
    <section id="team" className="text-white py-20 px-4 md:px-10">
      <div className="container px-5">
        <div className="flex flex-col justify-center items-center mb-20">
          <div
            className={`glass-container w-full`}
            style={{
              borderRadius: "20px",
              boxShadow:
                "0 6px 6px rgba(0, 0, 0, 0.02), 0 0 20px rgba(0, 0, 0, 0.1);",
            }}
          >
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div
              className="glass-content h-full flex flex-col"
              style={{ padding: "3rem 1rem" }}
            >
              <h2 className="text-2xl sm:text-4xl lg:text-6xl mt-12 font-bold text-[#fff]">
                A Team of Pilots and{" "}
                <span className="bg-gradient-to-r from-[#1777cb] to-tertiary_color bg-clip-text text-transparent">
                  Aviation Experts
                </span>
              </h2>
              <p className="text-base sm:text-xl text-center max-w-2xl mt-4 font-light">
                Built by aviators with decades of insight, Mason Amelia delivers
                unmatched clarity, strategy, and confidence in every aircraft
                transaction.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <Link to={`/team/${idx}`}>
              <div className="relative team-card rounded-xl overflow-hidden group">
                <div className="relative w-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[0]"></div>
                </div>
                {/* <div className="absolute top-[-20%] group-hover:top-[20%] transition-all duration-500 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Button buttonLabel="View" onClick={`/team/2`} />
              </div> */}
                <div className="absolute bottom-0 left-0 right-0 rounded-[100px] h-[130px] group-hover:h-[190px] transition-all duration-500">
                  <div className="glass-container rounded-xl flex items-center justify-center glass-container--rounded px-4 py-3">
                    <div className="glass-filter"></div>
                    <div className="glass-overlay"></div>
                    <div className="glass-specular"></div>

                    <div className="glass-content glass-content--inline justify-center">
                      <div className="relative w-full py-5 px-2">
                        <h2 className="text-2xl font-semibold text-white">
                          {member.name}
                        </h2>
                        <h2 className="text-sm py-2 font-semibold text-white">
                          {member.email}
                        </h2>
                        <p className="text-sm text-gray-400 mb-4">
                          {member.title}
                        </p>
                        <div className="social-icons flex items-center gap-4 justify-center">
                          <FaFacebook className="hover:text-[#0866ff] text-xl transition cursor-pointer" />
                          <FaTwitter className="hover:text-[#00b7ff] text-xl transition cursor-pointer" />
                          <FaInstagram className="hover:text-[#c3407b] text-xl transition cursor-pointer" />
                          <FaLinkedin className="hover:text-[#0a66c2] text-xl transition cursor-pointer" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
