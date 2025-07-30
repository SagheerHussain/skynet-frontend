import React, { useState, useEffect } from "react";
import SearchBox from "./SearchBox";
import { MdMenu } from "react-icons/md";
import GlassNavbar from "./GlassNavbar";
import { Link, useLocation } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const location = useLocation();

  return (
    <nav
      className={`${location.pathname === "/blog-detail/1" || location.pathname === "/blogs" ? "bg-[#000]" : ""} xl:pt-0 lg:pt-4 z-[9999] fixed md:static top-0 w-full px-6 text-white flex items-center justify-between h-[10vh] transition-colors duration-300 ${
        scrolled ? "bg-black/70" : "bg-transparent"
      } md:bg-transparent`}
    >
      <div className="logo z-[999999]">
        <Link to={"/"}>
          <img
            src={
              "https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_180,h_65,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%201x,%20https://static.wixstatic.com/media/04f737_e93964b7810f46d7bab986687486d898~mv2.png/v1/fill/w_360,h_130,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/04f737_e93964b7810f46d7bab986687486d898~mv2.png%202x"
            }
            className="w-32 md:w-40"
            alt="logo"
          />
        </Link>
      </div>

      <GlassNavbar />

      <div className="flex items-center justify-end call-to-action z-[9999] ">
        <SearchBox />
        <div
          className="flex items-center ms-4 xl:hidden"
          onClick={() => setIsOpen(true)}
        >
          <span className="text-white me-2">MENU</span>
          <MdMenu size={28} color="#fff" />
        </div>
        {isOpen && <MobileNavigation isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </nav>
  );
};

export default Navbar;
