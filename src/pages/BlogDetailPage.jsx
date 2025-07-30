import React from "react";
import BlogDetail from "../components/BlogDetail";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useGsapScroll from "../hooks/useGsapScroll";

const BlogDetailPage = () => {
  useGsapScroll();

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container">
            <Navbar />
          </div>
          <BlogDetail />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BlogDetailPage;
