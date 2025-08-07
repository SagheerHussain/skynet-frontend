import React from "react";
import BlogDetail from "../components/BlogDetail";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useGsapScroll from "../hooks/useGsapScroll";
import ReviewForm from "../components/ReviewForm";

const BlogDetailPage = () => {
  // useGsapScroll();

  return (
    <>
      <Navbar />

      <BlogDetail />

      <Footer />
    </>
  );
};

export default BlogDetailPage;
