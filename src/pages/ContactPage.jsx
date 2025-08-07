import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import bgPlane from "/images/contact.png";
import ScrollToTop from "../components/ScrollToTop";
import { useLocation } from "react-router-dom";

const ContactPage = () => {
  const location = useLocation();

  return (
    <>
      <section
        className={`relative w-full bg-cover bg-center md:pb-10 rounded-[20px] ${
          location.pathname !== "/contact"
            ? "lg:h-full xl:h-screen"
            : "h-full md:h-screen"
        }`}
        style={{
          backgroundImage: `url(${bgPlane})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80 z-[0]"></div>

        <div className="border-b-[1px]">
          <Navbar />
        </div>
        <div className="container">
          <Contact />
        </div>
      </section>
      <Footer />

      <ScrollToTop />
    </>
  );
};

export default ContactPage;
