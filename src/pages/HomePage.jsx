import React from "react";
import Showcase from "../components/Showcase";
import Brands from "../components/Brands";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SliderWrapper from "../components/SliderWrapper";
import MeetTheTeam from "../components/MeetTheTeam";
import Gallary from "../components/Gallary";
import ScrollToTop from "../components/ScrollToTop";
import Intro from "../components/Intro";

const HomePage = () => {
  return (
    <>
      <Showcase />
      <Brands />
      <Intro />
      <MeetTheTeam />
      <SliderWrapper />
      <Gallary />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
