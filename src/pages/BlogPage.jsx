import React from "react";
import BlogListing from "../components/BlogListing";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useGsapScroll from "../hooks/useGsapScroll";

const BlogPage = () => {
  // useGsapScroll();

  return (
    <>
      <div className="container bg-[#111218]">
        <Navbar />
      </div>
      <BlogListing />
      <Footer />
    </>
  );
};

export default BlogPage;
