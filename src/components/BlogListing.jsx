import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "All Jets",
  "Private Jets",
  "Luxury Jets",
  "Commercial Jets",
  "Military Jets",
  "Charter Jets",
  "Turbojets",
  "Business Jets",
  "Jet Maintenance",
  "Jet Interiors",
];

import blogImageOne from "/images/blogs/plane-2.avif";
import blogImageTwo from "/images/blogs/plane-3.avif";
import blogImageThree from "/images/blogs/plane-4.avif";
import blogImageFour from "/images/blogs/plane-5.avif";
import Pagination from "./Pagination";

const blogPosts = [
  {
    title: "Top Features of Modern Luxury Jets",
    category: "Private Jets",
    author: "John Abraham",
    time: "5 min read",
    image: blogImageOne,
    featured: true,
    description:
      "Discover the unmatched features that make luxury jets the pinnacle of private air travel.",
  },
  {
    title: "How Charter Jets Are Changing Business Travel",
    category: "Luxury Jets",
    author: "Melicca Abrar",
    time: "10 min read",
    image: blogImageTwo,
    description:
      "Explore how private charters improve flexibility, comfort, and speed for corporate clients.",
  },
  {
    title: "The Evolution of Turbojets",
    category: "Commercial Jets",
    author: "Vankatesh Iyer",
    time: "15 min read",
    image: blogImageThree,
    description:
      "From WWII to the present, see how turbojet technology has transformed.",
  },
  {
    title: "Inside the Most Expensive Business Jets",
    category: "Business Jets",
    author: "Roman Reigns",
    time: "20 min read",
    image: blogImageFour,
    description:
      "A tour of the most elite jets in the skies and the billionaires who own them.",
  },
  {
    title: "Maintaining Your Jet for Peak Performance",
    category: "Jet Maintenance",
    author: "Roman Reigns",
    time: "20 min read",
    image: blogImageFour,
    description:
      "Jet maintenance tips to keep your aircraft running smoothly year-round.",
  },
  {
    title: "Designing the Perfect Jet Interior",
    category: "Jet Interiors",
    author: "Roman Reigns",
    time: "20 min read",
    image: blogImageFour,
    description:
      "Interior design trends that make flying as comfortable as your living room.",
  },
];

const categoryGradients = {
  acquired: ["from-[#3b82f6]", "to-[#7eb0fc]"],
  "coming-soon": ["from-[#9333ea]", "to-[#c084fc]"],
  "for-sale": ["from-[#6bfc3f]", "to-[#a5fc8a]"],
  "off-market": ["from-[#4e54fc]", "to-[#8f93fc]"],
  "sale-pending": ["from-[#9a2c3a]", "to-[#ce93d8]"],
  sold: ["from-[#ff0000]", "to-[#fc6262]"],
  wanted: ["from-[#f97316]", "to-[#fb923c]"],
};

const categoryName = "sale-pending" || "";
const gradient = categoryGradients[categoryName] || [
  "from-[#ff8a41]",
  "to-[#fca168]",
];

const BlogListing = () => {
  return (
    <section className="bg-white px-6 md:px-16 pb-20 pt-32">
      <div className="container px-5">
        <div className="text-center mb-12">
          <p className="text-tertiary_color font-semibold">Read Our Blog</p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2 mb-2">Browse Our Resources</h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            We provide tips and resources from jet industry leaders. For real.
          </p>
        </div>

        <div className="lg:flex">
          {/* Left Sidebar */}
          <aside className="lg:mb-0 mb-4 w-full lg:w-[20%] h-full p-4 border-[1px] border-[#00000040]">
            <div>
              <h3 className="text-sm font-semibold mb-3">Categories</h3>
              <ul className="flex flex-wrap lg:gap-0 gap-4 lg:space-y-2 text-sm text-[#111218] font-medium">
                {categories.map((cat, idx) => (
                  <div className="flex items-center w-full md:w-auto lg:w-full">
                    <input type="checkbox" />
                    <li key={idx} className="ms-2">
                      {cat}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </aside>

          {/* Blog Grid */}
          <div className="w-full lg:w-[75%] lg:ms-[5%] grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Link to="/blog-detail/1">
                <div key={idx} className={`relative overflow-hidden`}>
                  <div
                    className={`absolute top-6 -right-14 w-48 text-center rotate-45 bg-gradient-to-r ${
                      gradient[0]
                    } ${gradient[1]} ${
                      categoryName === "for-sale"
                        ? "text-[#111218]"
                        : "text-white"
                    } font-medium py-1 shadow-lg`}
                  >
                    <h1 className="text-[.8rem]">Featured</h1>
                  </div>

                  <img
                    src={post.image}
                    alt=""
                    className="w-full h-56 object-cover rounded-xl"
                  />
                  <div className="p-4">
                    <h3 className="text-base mt-4 text-[#111218] leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-[#444] text-sm py-3 leading-relaxed">
                      {post.description}
                    </p>
                    <p className="text-xs bg-[#eec7ff] text-[#222] inline-block px-3 py-1">
                      {post.author} · {post.time}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Pagination count={5} page={1} onChange={() => {}} color="primary" />
        </div>
      </div>
    </section>
  );
};

export default BlogListing;
